import { ChevronDown, EllipsisVertical, Headset, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  DrawerClose,
} from "./ui/drawer";
import { useState } from "react";

const navItems = [
  { name: "HOME", highlight: false },
  { name: "ABOUT", highlight: false },
  { name: "PRODUCT", highlight: true },
  { name: "PAGES", highlight: false },
  { name: "CONTACT", highlight: false },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#2F333A] text-white h-fit">
      <div className=" mx-auto flex items-stretch">
        <Button
          variant="ghost"
          className="bg-[#E73C17] text-xl font-light hidden lg:flex items-center justify-center space-x-2 w-1/4 py-5 rounded-none h-full">
          <div className="flex items-center h-full">
            <EllipsisVertical className="h-5 w-5" />
            <Menu className="h-5 w-5 -ml-3" />
          </div>
          <span>All Categories</span>
          <ChevronDown className="h-5 w-5" />
        </Button>

        <div className=" flex-1 flex w-full items-center justify-between px-4 py-3">
          {/* Mobile Menu Button */}
          <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger className="lg:hidden">
              <Menu className="h-6 w-6" />
            </DrawerTrigger>
            <DrawerContent className="bg-white h-[90vh]">
              <DrawerHeader className="flex flex-col items-start p-4">
                <DrawerClose className="self-end mb-4">
                  <X className="h-6 w-6 text-gray-500" />
                </DrawerClose>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-lg font-medium text-[#E73C17] mb-4">
                  All Categories
                </Button>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className={`w-full justify-start text-lg mb-2 ${
                      item.highlight ? "text-[#E73C17]" : "text-gray-700"
                    }`}>
                    {item.name}
                  </Button>
                ))}
                <div className="flex items-center mt-6 border-t pt-4 w-full">
                  <Headset className="h-5 w-5 text-[#E73C17] mr-2" />
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-600">
                      CONTACT US 24/7
                    </span>
                    <span className="text-gray-900 font-medium">
                      +12012987481
                    </span>
                  </div>
                </div>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center mx-auto space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={`font-light hover:bg-gray-700 transition-colors ${
                  item.highlight ? "text-[#E73C17]" : ""
                }`}>
                {item.name}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            ))}
          </div>

          {/* Contact Information */}
          <div className="items-center flex space-x-3 border-l-2 border-white px-3 whitespace-nowrap">
            <Headset className="h-10 w-10 text-[#E73C17] flex-shrink-0" />
            <div className="flex flex-col flex-shrink-0">
              <span className="text-sm">CONTACT US 24/7</span>
              <span className="font-medium">+12012987481</span>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
