import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const repo = searchParams.get('repo');
  const npmPackage = searchParams.get('npmPackage');

  if (!repo || !npmPackage) {
    return NextResponse.json(
      { error: 'repo and npmPackage parameters are required' },
      { status: 400 }
    );
  }

  try {
    const isPowerShellPackage = npmPackage.includes('PowerTree') || npmPackage.includes('Get-SVGL');
    
    const [githubResponse, packageResponse] = await Promise.all([
      fetch(`https://api.github.com/repos/${repo}`),
      isPowerShellPackage
        ? fetch(`https://www.powershellgallery.com/api/v2/Packages?$filter=Id%20eq%20%27${npmPackage}%27&$orderby=Version%20desc&$top=1`)
        : fetch(`https://api.npmjs.org/downloads/point/last-month/${npmPackage}`)
    ]);

    let githubStars = null;
    let npmDownloads = null;

    if (githubResponse.ok) {
      const githubData = await githubResponse.json();
      githubStars = githubData.stargazers_count;
    }

    if (packageResponse.ok) {
      if (isPowerShellPackage) {
        // Parse the PowerShell Gallery XML response
        const xmlText = await packageResponse.text();
        // Extract download count from XML
        const downloadCountMatch = xmlText.match(/<d:DownloadCount[^>]*>(\d+)<\/d:DownloadCount>/);
        if (downloadCountMatch && downloadCountMatch[1]) {
          npmDownloads = parseInt(downloadCountMatch[1]);
        }
      } else {
        const npmData = await packageResponse.json();
        npmDownloads = npmData.downloads;
      }
    }

    return NextResponse.json({
      githubStars,
      npmDownloads,
    });
  } catch (error) {
    console.error('Error fetching project stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch project stats' },
      { status: 500 }
    );
  }
}