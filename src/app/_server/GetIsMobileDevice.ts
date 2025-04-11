import { headers } from "next/headers";

export default async function GetIsMobileDevice() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent");
  if (!userAgent) return false;
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;
  return mobileRegex.test(userAgent);
}
