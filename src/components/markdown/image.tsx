import { ComponentProps } from "react";
import FarmImage from "@farm.js/core/image";

type Height = ComponentProps<typeof FarmImage>["height"];
type Width = ComponentProps<typeof FarmImage>["width"];

export default function Image({
  src,
  alt = "alt",
  width = 800,
  height = 350,
  ...props
}: ComponentProps<"img">) {
  if (!src) return null;
  return (
    <FarmImage
      src={src}
      alt={alt}
      width={width as Width}
      height={height as Height}
      quality={40}
      {...props}
    />
  );
}
