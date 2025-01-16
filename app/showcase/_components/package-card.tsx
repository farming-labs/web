import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IconGithub } from "@/components/icons";
type PackageCardProps = {
  id: string;
  title: string;
  description: string;
  github: string;
};
export const PackagegCard = ({
  item: { id, title, description },
}: {
  item: PackageCardProps;
}) => {
  const CardBody = ({ className = "p-4" }) => (
    <div className={cn("text-left mb-2 space-y-5 pt-10", className)}>
      <Link href={`https://github.com/farming-labs/${id}`}>
        <h2 className="font-pixel w-fit hover:no-underline relative ease-in after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-[3px] after:rounded-full after:dark:bg-zinc-50 after:bg-zinc-800 after:opacity-0 after:duration-300 after:content-[''] hover:after:-translate-y-1 hover:after:opacity-100 px-[1px] pb-0 text-xl sm:text-2xl md:text-3xl uppercase">
          {title}
        </h2>
      </Link>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      <div className="w-full flex justify-end">
        <Button
          className={cn(
            "border-[1px] flex justify-center items-center rounded-md bg-clip-text text-transparent dark:text-transparent animate-bg-shine bg-[length:250%_100%] shadow font-bold tracking-wide duration-[2200ms]",
            "dark:bg-[linear-gradient(110deg,#D4D4D8,45%,#27272A,55%,#D4D4D8)] dark:border-zinc-800",
            "bg-[linear-gradient(110deg,#09090B,45%,#fff,55%,#09090B)] border-zinc-300",
          )}
        >
          <IconGithub className="w-4 h-4 mr-2" />
          Visit
        </Button>
      </div>
    </div>
  );
  const Icon = ({
    className,
    ...rest
  }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
      <div
        {...rest}
        className={cn(
          "dark:border-zinc-200 border-zinc-700 size-6 absolute",
          className,
        )}
      />
    );
  };
  return (
    <div className="border-2 border-zinc-100 dark:border-zinc-700 relative rounded-sm">
      <Icon className="-top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-sm" />
      <Icon className="-top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-sm" />
      <Icon className="-bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-sm" />
      <Icon className="-bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-sm" />
      <CardBody className="p-6" />
    </div>
  );
};
