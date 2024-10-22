import { ChevronDown } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-gray-800 text-white p-2 text-sm flex justify-between">
      <span>Welcome to Needus & Get the best product</span>
      <div>
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
