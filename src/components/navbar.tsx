import { ChevronDown, EllipsisVertical, Headset, Menu, Phone } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";

const Navbar = () => {
  return (
    <nav className="bg-[#2F333A] text-white max-md:py-3">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center justify-center w-full space-x-4 max-md:hidden">
          <Button
            variant="ghost"
            className="bg-[#E73C17] py-7 text-xl font-light">
            <EllipsisVertical />
            <Menu className="-ml-3" />
            All Categories
            <ChevronDown />
          </Button>
          <Button variant="ghost">
            HOME
            <ChevronDown />
          </Button>
          <Button variant="ghost">
            ABOUT
            <ChevronDown />
          </Button>
          <Button variant="ghost" className="text-[#E73C17]">
            PRODUCT
            <ChevronDown />
          </Button>
          <Button variant="ghost">
            PAGES
            <ChevronDown />
          </Button>
          <Button variant="ghost">
            CONTACT
            <ChevronDown />
          </Button>
        </div>
        <Drawer>
          <DrawerTrigger className="hidden max-md:block">
            <Menu />
          </DrawerTrigger>
          <DrawerContent className="bg-white">
            <DrawerHeader>
              <Button variant="ghost">All Categories</Button>
              <Button variant="ghost">HOME</Button>
              <Button variant="ghost">ABOUT</Button>
              <Button variant="ghost">PRODUCT</Button>
              <Button variant="ghost">PAGES</Button>
              <Button variant="ghost">CONTACT</Button>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
        <div className="flex items-center">
          <Headset className="mr-2 w-10 h-10 max-md:w-5 max-md:h-5 text-[#E73C17]" />
          <span>CONTACT US 24/7 +12012987481</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
