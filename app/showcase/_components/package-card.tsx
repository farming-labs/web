import { cn } from "@/lib/utils";
export const PackagegCard = () => {
  const CardBody = ({ className = "p-4" }) => (
    <div className={cn("text-left mb-7 space-y-5 pt-10", className)}>
      <h2 className="font-pixel text-xl sm:text-2xl md:text-3xl uppercase">
        Befter
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic
        ipsum! Qui dicta debitis aliquid quo molestias explicabo iure!
      </p>
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
