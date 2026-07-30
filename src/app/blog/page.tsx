import {
  Author,
  BlogMdxFrontmatter,
  getAllBlogs,
} from "@/lib/blog-markdown";
import { formatDate2, stringToDate } from "@/lib/utils";
import type { Metadata } from "@farm.js/core";
import Image from "@farm.js/core/image";
import { Link } from "@farm.js/core/client";

export const metadata: Metadata = {
  title: "Farming Labs - Blog",
};

export default async function BlogIndexPage() {
  const blogs = (await getAllBlogs()).sort(
    (a, b) => stringToDate(b.date).getTime() - stringToDate(a.date).getTime(),
  );
  return (
    <div className="w-full mx-auto flex flex-col gap-1 sm:min-h-[91vh] min-h-[88vh] pt-2">
      <div className="mb-7 flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold">
          The latest blogs of this product
        </h1>
        <p className="text-muted-foreground">
          All the latest blogs and news, straight from the team.
        </p>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-8 gap-4 mb-5">
        {blogs.map((blog) => (
          <BlogCard {...blog} slug={blog.slug} key={blog.slug} />
        ))}
      </div>
    </div>
  );
}

function BlogCard({
  date,
  title,
  description,
  slug,
  cover,
  authors,
}: BlogMdxFrontmatter & { slug: string }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="flex flex-col gap-2 items-start border rounded-md py-5 px-3 min-h-[400px]"
    >
      <h3 className="text-md font-semibold -mt-1 pr-7">{title}</h3>
      <div className="w-full">
        <Image
          src={cover}
          alt={title}
          width={400}
          height={150}
          quality={80}
          className="w-full rounded-md object-cover h-[180px] border"
        />
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex items-center justify-between w-full mt-auto">
        <p className="text-[13px] text-muted-foreground">
          Published on {formatDate2(date)}
        </p>
        <AvatarGroup users={authors} />
      </div>
    </Link>
  );
}

function AvatarGroup({ users, max = 4 }: { users: Author[]; max?: number }) {
  const displayUsers = users.slice(0, max);
  const remainingUsers = Math.max(users.length - max, 0);

  return (
    <div className="flex items-center">
      {displayUsers.map((user, index) => (
        <span
          key={user.username}
          className={`relative inline-block h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-background ${
            index !== 0 ? "-ml-3" : ""
          } `}
        >
          <img
            src={user.avatar}
            alt={user.username}
            className="aspect-square h-full w-full"
          />
        </span>
      ))}
      {remainingUsers > 0 && (
        <span className="relative -ml-3 inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-muted transition-transform hover:translate-y-1">
          +{remainingUsers}
        </span>
      )}
    </div>
  );
}
