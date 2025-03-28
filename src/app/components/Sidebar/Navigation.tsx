import React from "react"
import NavigationSection from "./NavigationSection"
import type { Icon } from "next/dist/lib/metadata/types/metadata-types"
import { Github, Info } from "lucide-react"

function Navigation() {
  return (
    <ul className="space-y-6 mt-6 ml-3">
      <NavigationSection
        title="about"
        items={[
          { name: "About me", icon: Info },
          { name: "About me", icon: Info },
        ]}
      />
      <NavigationSection title="Contact" items={[{ name: "Github", icon: Github }]} />
      <NavigationSection title="about" items={[{ name: "hello", icon: Info }]} />
      <NavigationSection title="about" items={[{ name: "hello", icon: Info }]} />
    </ul>
  )
}

export default Navigation
