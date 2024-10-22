import { ChevronDown } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-[#2F333A] text-white p-5 text-sm flex justify-between">
      <span className="mx-20">Welcome to Needus & Get the best product</span>
      <div className="mx-20 font-light">
        <span className="mr-4">
          ENG <ChevronDown className="inline h-4 w-4" />
        </span>
        <span>
          USD <ChevronDown className="inline h-4 w-4" />
        </span>
      </div>
    </div>
  );
};

export default Topbar;
