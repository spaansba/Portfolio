"use client"
import React from "react"

function HeaderNavigationDisplay() {
  const page = window.location.pathname + window.location.hash
  return <div className="text-xl text-TextGrayWhite">{page}</div>
}

export default HeaderNavigationDisplay
