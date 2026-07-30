import { evaluate } from "@mdx-js/mdx";
import matter from "gray-matter";
import { createElement } from "react";
import * as runtime from "react/jsx-runtime";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

import Image from "../components/markdown/image";
import Link from "../components/markdown/link";
import Pre from "../components/markdown/pre";
import fileRecMdx from "../contents/blogs/file-rec.mdx?raw";
import nextReactMdx from "../contents/blogs/next-react.mdx?raw";
import type { BaseMdxFrontmatter } from "./docs";

const components = {
  pre: Pre,
  img: Image,
  a: Link,
};

const blogSources: Record<string, string> = {
  "file-rec": fileRecMdx,
  "next-react": nextReactMdx,
};

export type Author = {
  avatar?: string;
  handle: string;
  username: string;
  handleUrl: string;
};

export type BlogMdxFrontmatter = BaseMdxFrontmatter & {
  date: string;
  authors: Author[];
  cover: string;
};

async function parseBlogMdx(rawMdx: string) {
  const { content, data } = matter(rawMdx);
  const module = await evaluate(content, {
    ...runtime,
    rehypePlugins: [
      preProcess,
      rehypeCodeTitles,
      rehypePrism,
      rehypeSlug,
      rehypeAutolinkHeadings,
      postProcess,
    ],
    remarkPlugins: [remarkGfm],
  });

  return {
    content: createElement(module.default, { components }),
    frontmatter: data as BlogMdxFrontmatter,
  };
}

export async function getAllBlogStaticPaths() {
  return Object.keys(blogSources);
}

export async function getAllBlogs() {
  return Object.entries(blogSources).map(([slug, source]) => ({
    ...(matter(source).data as BlogMdxFrontmatter),
    slug,
  }));
}

export async function getBlogForSlug(slug: string) {
  const source = blogSources[slug];
  if (!source) return undefined;
  return parseBlogMdx(source);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeElement] = node.children;
      if (codeElement.tagName !== "code") return;
      node.raw = codeElement.children?.[0].value;
    }
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postProcess = () => (tree: any) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      node.properties.raw = node.raw;
    }
  });
};
