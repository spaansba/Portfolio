"use server";

import { headers } from "next/headers";

export async function isMobileDevice() {
  if (typeof process === "undefined") {
    throw new Error(
      "[Server method] you are importing a server-only module outside of server",
    );
  }

  try {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    // Simple regex pattern to detect common mobile devices
    const mobileRegex = /(android|iphone|ipad|ipod|blackberry|windows phone)/i;
    return mobileRegex.test(userAgent);
  } catch (error) {
    console.error("Error detecting device:", error);
    return false; // Default to non-mobile on error
  }
}
