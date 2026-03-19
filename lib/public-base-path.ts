export function getPublicBasePath() {
  if (typeof window !== "undefined") {
    const { hostname, pathname } = window.location;

    if (hostname.endsWith("github.io")) {
      const firstSegment = pathname.split("/").filter(Boolean)[0];
      return firstSegment ? `/${firstSegment}` : "";
    }
  }

  return process.env.NEXT_PUBLIC_BASE_PATH ?? "";
}
