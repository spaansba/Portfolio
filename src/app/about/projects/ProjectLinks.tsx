import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import React from "react"

type ProjectLinksProps = {
  link: string | undefined
  gitHubLink: string | undefined
  isRightalign: boolean
}

function ProjectLinks({ link, gitHubLink, isRightalign }: ProjectLinksProps) {
  return (
    <div className={`flex flex-wrap gap-4 ${isRightalign ? "justify-end" : ""}`}>
      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
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
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <Github size={16} />
          <span>View Code</span>
        </Link>
      )}
    </div>
  )
}

export default ProjectLinks
