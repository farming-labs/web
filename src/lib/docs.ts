import { promises as fs } from "fs";
import matter from "gray-matter";
import path from "path";

import { ROUTES } from "./routes-config";

export type BaseMdxFrontmatter = {
  title: string;
  description: string;
};

export async function getAllChilds(pathString: string) {
  const items = pathString.split("/").filter((item) => item !== "");
  let routes = ROUTES;
  let previousHref = "";

  for (const item of items) {
    const found = routes.find((route) => route.href === `/${item}`);
    if (!found) break;
    previousHref += found.href;
    routes = found.items ?? [];
  }

  if (!previousHref) return [];

  return Promise.all(
    routes.map(async (route) => {
      const contentPath = path.join(
        process.cwd(),
        "src/contents/docs",
        previousHref,
        route.href,
        "index.mdx",
      );
      const raw = await fs.readFile(contentPath, "utf-8");

      return {
        ...(matter(raw).data as BaseMdxFrontmatter),
        href: `/docs${previousHref}${route.href}`,
      };
    }),
  );
}
