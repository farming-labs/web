import { Typography } from "../../../components/typography";
import { buttonVariants } from "../../../components/ui/button";
import { Author, getBlogForSlug } from "../../../lib/blog-markdown";
import type { Metadata, PageProps } from "@farm.js/core";
import Image from "@farm.js/core/image";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "@farm.js/core/client";
import { notFound } from "@farm.js/core/navigation";
import { formatDate } from "../../../lib/utils";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getBlogForSlug(params.slug);

  return {
    title: post?.frontmatter.title ?? "Farming Labs - Blog",
    description:
      post?.frontmatter.description ??
      "The latest writing from the Farming Labs team.",
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = params;
  const res = await getBlogForSlug(slug);
  if (!res) notFound();
  return (
    <div className="lg:w-[60%] sm:[95%] md:[75%] mx-auto">
      <Link
        className={buttonVariants({
          variant: "link",
          className: "!mx-0 !px-0 mb-7 !-ml-1 ",
        })}
        href="/blog"
      >
        <ArrowLeftIcon className="w-4 h-4 mr-1.5" /> Back to blog
      </Link>
      <div className="flex flex-col gap-3 pb-7 w-full mb-2">
        <p className="text-muted-foreground text-sm">
          {formatDate(res.frontmatter.date)}
        </p>
        <h1 className="sm:text-4xl text-3xl font-extrabold">
          {res.frontmatter.title}
        </h1>
        <div className="mt-6 flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">Posted by</p>
          <Authors authors={res.frontmatter.authors} />
        </div>
      </div>
      <div className="!w-full">
        <div className="w-full mb-7">
          <Image
            src={res.frontmatter.cover}
            alt="cover"
            width={700}
            height={400}
            className="w-full h-[400px] rounded-md border object-cover"
          />
        </div>
        <Typography>{res.content}</Typography>
      </div>
    </div>
  );
}

function Authors({ authors }: { authors: Author[] }) {
  return (
    <div className="flex items-center gap-8 flex-wrap">
      {authors.map((author) => {
        return (
          <a
            href={author.handleUrl}
            className="flex items-center gap-2"
            key={author.username}
          >
            <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-muted">
              <img
                src={author.avatar}
                alt={author.username}
                className="aspect-square h-full w-full"
              />
            </span>
            <div className="">
              <p className="text-sm font-medium">{author.username}</p>
              <p className="font-code text-[13px] text-muted-foreground">
                @{author.handle}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
