import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "out");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function walk(dir) {
  const entries = readdirSync(dir);
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (entry.endsWith(".html")) {
      files.push(fullPath);
    }
  }

  return files;
}

function extractLinks(html) {
  const hrefRegex = /href="([^"]+)"/g;
  const links = [];
  let match = hrefRegex.exec(html);
  while (match) {
    links.push(match[1]);
    match = hrefRegex.exec(html);
  }
  return links;
}

function resolveInternalTarget(link) {
  if (
    link.startsWith("http") ||
    link.startsWith("mailto:") ||
    link.startsWith("tel:") ||
    link.startsWith("#")
  ) {
    return null;
  }

  let path = link;
  if (basePath && path.startsWith(basePath)) {
    path = path.slice(basePath.length) || "/";
  }

  if (path.startsWith("/_next/") || path.startsWith("_next/")) {
    const assetPath = path.replace(/^\//, "");
    return join(outDir, assetPath);
  }

  if (path.startsWith("/icons/") || path.startsWith("icons/")) {
    const assetPath = path.replace(/^\//, "");
    return join(outDir, assetPath);
  }

  if (path.startsWith("/images/") || path.startsWith("images/")) {
    const assetPath = path.replace(/^\//, "");
    return join(outDir, assetPath);
  }

  const normalized = path.replace(/^\//, "").replace(/\/$/, "");
  if (!normalized) {
    return join(outDir, "index.html");
  }

  return join(outDir, normalized, "index.html");
}

const htmlFiles = walk(outDir);
const broken = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const links = extractLinks(html);

  for (const link of links) {
    const target = resolveInternalTarget(link);
    if (!target) {
      continue;
    }

    if (!existsSync(target)) {
      broken.push({ file, link, target });
    }
  }
}

if (broken.length > 0) {
  process.stderr.write("Broken internal links found:\n");
  for (const item of broken) {
    process.stderr.write(`  ${item.file}: ${item.link}\n`);
  }
  process.exit(1);
}

process.stdout.write("All internal links are valid.\n");
