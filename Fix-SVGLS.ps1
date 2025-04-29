# Fix-SVGLS.ps1
# This script fixes the Get-SVGLS function by separating it into multiple files with one function per file
# It also fixes the substring error in the category capitalization

# Define the base directory where your script is located
$OriginalScriptPath = "C:\Scripts\Svgls\Get-Svgls.ps1"
$TargetDirectoryBase = "C:\Scripts\Svgls"

# Step 1: Check if the original script exists
if (-not (Test-Path -Path $OriginalScriptPath)) {
    Write-Error "Original script not found at: $OriginalScriptPath"
    exit
}

# Step 2: Create directory structure if it doesn't exist
$PublicDir = Join-Path -Path $TargetDirectoryBase -ChildPath "Public"
$PrivateDir = Join-Path -Path $TargetDirectoryBase -ChildPath "Private"

if (-not (Test-Path -Path $PublicDir)) {
    New-Item -Path $PublicDir -ItemType Directory -Force | Out-Null
    Write-Host "Created directory: $PublicDir"
}

if (-not (Test-Path -Path $PrivateDir)) {
    New-Item -Path $PrivateDir -ItemType Directory -Force | Out-Null
    Write-Host "Created directory: $PrivateDir"
}

# Step 3: Create the Format-CategoryName function to fix the substring error
$FormatCategoryNamePath = Join-Path -Path $PrivateDir -ChildPath "Format-CategoryName.ps1"
$FormatCategoryContent = @'
function Format-CategoryName {
    <#
    .SYNOPSIS
        Formats a category name by capitalizing the first letter.
    
    .DESCRIPTION
        Safely formats a category name by capitalizing the first letter and making the rest lowercase.
        Handles empty or short strings gracefully.
    
    .PARAMETER Category
        The category name to format.
    
    .EXAMPLE
        Format-CategoryName -Category "icon"
        # Returns "Icon"
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $false)]
        [AllowEmptyString()]
        [string]$Category
    )

    # Return empty string if input is null or empty
    if ([string]::IsNullOrEmpty($Category)) {
        return ""
    }

    # Handle single character case
    if ($Category.Length -eq 1) {
        return $Category.ToUpper()
    }

    # Format normally for strings with 2+ characters
    return $Category.Substring(0, 1).ToUpper() + $Category.Substring(1).ToLower()
}
'@

Set-Content -Path $FormatCategoryNamePath -Value $FormatCategoryContent
Write-Host "Created Format-CategoryName function at: $FormatCategoryNamePath"

# Step 4: Create the Test-SVGCategory function
$TestSVGCategoryPath = Join-Path -Path $PrivateDir -ChildPath "Test-SVGCategory.ps1"
$TestSVGCategoryContent = @'
function Test-SVGCategory {
    <#
    .SYNOPSIS
        Validates if a given category is valid for SVG graphics.
    
    .DESCRIPTION
        Checks if a provided category name is valid for SVG graphics by comparing
        against a predefined list of allowed categories.
    
    .PARAMETER Category
        The category name to validate.
    
    .EXAMPLE
        Test-SVGCategory -Category "Icon"
        # Returns $true if "Icon" is a valid category
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [AllowEmptyString()]
        [string]$Category
    )

    # Define valid categories (modify as needed based on your actual valid categories)
    $ValidCategories = @(
        "Icon",
        "Logo",
        "Chart",
        "Diagram",
        "Symbol",
        "Background",
        "Button",
        "Illustration",
        "Animation",
        "" # Empty string is allowed to show all categories
    )

    # Format the category name properly for comparison
    $FormattedCategory = Format-CategoryName -Category $Category
    
    # Check if the formatted category is in the valid categories list
    return $ValidCategories -contains $FormattedCategory
}
'@

Set-Content -Path $TestSVGCategoryPath -Value $TestSVGCategoryContent
Write-Host "Created Test-SVGCategory function at: $TestSVGCategoryPath"

# Step 5: Create the Get-SVGFiles function
$GetSVGFilesPath = Join-Path -Path $PrivateDir -ChildPath "Get-SVGFiles.ps1"
$GetSVGFilesContent = @'
function Get-SVGFiles {
    <#
    .SYNOPSIS
        Gets SVG files from the specified path.
    
    .DESCRIPTION
        Retrieves SVG files from the specified path, with optional filtering by category.
    
    .PARAMETER Path
        The path to search for SVG files.
    
    .PARAMETER Category
        Optional category filter for SVG files.
    
    .EXAMPLE
        Get-SVGFiles -Path "C:\SVGs" -Category "Icon"
        # Returns SVG files in the Icon category
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [string]$Path,
        
        [Parameter(Mandatory = $false)]
        [AllowEmptyString()]
        [string]$Category = ""
    )

    # Format the category name
    $FormattedCategory = Format-CategoryName -Category $Category
    
    # Get all SVG files
    $SVGFiles = Get-ChildItem -Path $Path -Filter "*.svg" -Recurse -File
    
    # If a specific category is requested, filter the files
    if (-not [string]::IsNullOrEmpty($FormattedCategory)) {
        # Assuming category info is stored in the file path or name
        # Modify this filtering logic based on how you determine categories
        $SVGFiles = $SVGFiles | Where-Object {
            $_.FullName -like "*\$FormattedCategory\*" -or
            $_.Name -like "$FormattedCategory*"
        }
    }
    
    return $SVGFiles
}
'@

Set-Content -Path $GetSVGFilesPath -Value $GetSVGFilesContent
Write-Host "Created Get-SVGFiles function at: $GetSVGFilesPath"

# Step 6: Create the Format-SVGOutput function
$FormatSVGOutputPath = Join-Path -Path $PrivateDir -ChildPath "Format-SVGOutput.ps1"
$FormatSVGOutputContent = @'
function Format-SVGOutput {
    <#
    .SYNOPSIS
        Formats SVG file information for display.
    
    .DESCRIPTION
        Creates a formatted object with relevant SVG file information for display.
    
    .PARAMETER SVGFile
        The SVG file object to format.
    
    .EXAMPLE
        Format-SVGOutput -SVGFile $file
        # Returns formatted SVG file information
    #>
    [CmdletBinding()]
    param (
        [Parameter(Mandatory = $true)]
        [System.IO.FileInfo]$SVGFile
    )
    
    # Extract category from path or filename (adjust based on your naming convention)
    $Category = "Unknown"
    
    # Try to extract category from path
    $PathParts = $SVGFile.Directory.FullName -split '\\'
    foreach ($part in $PathParts) {
        if (Test-SVGCategory -Category $part) {
            $Category = Format-CategoryName -Category $part
            break
        }
    }
    
    # If category not found in path, try filename
    if ($Category -eq "Unknown") {
        $NameParts = $SVGFile.BaseName -split '-|_|\s'
        foreach ($part in $NameParts) {
            if (Test-SVGCategory -Category $part) {
                $Category = Format-CategoryName -Category $part
                break
            }
        }
    }
    
    # Parse SVG content to extract dimensions if available
    $Width = "Unknown"
    $Height = "Unknown"
    
    try {
        $Content = Get-Content -Path $SVGFile.FullName -Raw
        
        # Extract width attribute
        if ($Content -match 'width="([^"]+)"') {
            $Width = $matches[1]
        }
        
        # Extract height attribute
        if ($Content -match 'height="([^"]+)"') {
            $Height = $matches[1]
        }
        
        # If width/height not found in attributes, try viewBox
        if (($Width -eq "Unknown" -or $Height -eq "Unknown") -and $Content -match 'viewBox="[^"]+ [^"]+ ([