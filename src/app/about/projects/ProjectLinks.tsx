import { ExternalLink, Github, Download } from "lucide-react"
import Link from "next/link"
import React from "react"

type ProjectLinksProps = {
  link: string | undefined
  gitHubLink: string | undefined
  downloadLink: string | undefined
  isRightalign: boolean
}

function ProjectLinks({ link, gitHubLink, isRightalign, downloadLink }: ProjectLinksProps) {
  return (
    <div className={`flex flex-wrap gap-4 ${isRightalign ? "justify-end" : ""}`}>
      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-fgButton hover:text-fgButtonHover transition-colors"
        >
          <ExternalLink size={16} />
          <span>Visit Project</span>
        </Link>
      )}

      {gitHubLink && (
        <Link
          href={gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-fgButton hover:text-fgButtonHover transition-colors"
        >
          <Github size={16} />
          <span>View Code</span>
        </Link>
      )}

      {downloadLink && (
        <Link
          href={downloadLink}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-fgButton hover:text-fgButtonHover transition-colors"
        >
          <Download size={16} />
          <span>Download</span>
        </Link>
      )}
    </div>
  )
}

export default ProjectLinks
