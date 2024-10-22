import { Menu, Search, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select } from "./ui/select";

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTrigger,
} from "./ui/drawer";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          Needus<span className="text-red-500">.</span>
        </h1>
        <div className="flex items-center space-x-4 max-md:hidden">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search Products"
              className="pl-10 pr-4 py-2 w-64"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <Select>
            <option >
              All Categories
            </option>
          </Select>
          <Button variant="ghost">Login</Button>
          <Button variant="ghost">Signup</Button>
          <Button variant="ghost" className="relative">
            <ShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              6
            </span>
          </Button>
        </div>
        <Drawer>
          <DrawerTrigger className="hidden max-md:block">
            <Menu />
          </DrawerTrigger>
          <DrawerContent className="bg-white">
            <DrawerHeader className="flex flex-col items-center">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search Products"
                  className="pl-10 pr-4 py-2 w-64"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <Select>
                <option>All Categories</option>
              </Select>
              <Button variant="ghost">Login</Button>
              <Button variant="ghost">Signup</Button>
              <Button variant="ghost" className="relative w-fit mx-auto">
                <ShoppingCart />
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  6
                </span>
              </Button>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
