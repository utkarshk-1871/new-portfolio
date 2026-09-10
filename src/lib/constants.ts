export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://utkarshk-1871.github.io/new-portfolio";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!BASE_PATH) {
    return path;
  }
  return `${BASE_PATH}${path}`;
}
