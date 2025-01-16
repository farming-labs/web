import { farmed } from "./farmed";
import { PackagegCard } from "./package-card";

export default function Packages() {
  return (
    <div className="max-w-6xl p-6 mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 pt-3 lg:grid-cols-3">
        {farmed.map((item, indx) => {
          return <PackagegCard item={item} key={indx} />;
        })}
      </div>
    </div>
  );
}
