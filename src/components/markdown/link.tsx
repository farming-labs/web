import { ComponentProps } from "react";

export default function Link({ href, ...props }: ComponentProps<"a">) {
  if (!href) return null;
  return (
    <a
      href={href}
      {...props}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
}
