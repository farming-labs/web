import { Separator } from "@/components/separator";
import ShoowcaseHeroSection from "./_components/hero";
import Packages from "./_components/packages";

export default function ShowCase() {
  return (
    <div className="flex flex-col gap-1">
      <ShoowcaseHeroSection />
      <Separator className="max-w-[68.3rem] -mt-[1.2px] mx-auto" />
      <Packages />
    </div>
  );
}
