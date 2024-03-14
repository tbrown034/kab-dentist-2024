// components/Header.jsx
"use client";
import { nunito } from "../../lib/fonts.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";

const Header = () => {
  return (
    <header className={`${nunito.className}`}>
      <nav className="flex justify-between p-2 text-xl">
        <p className="">Keith A. Brown D.D.S.</p>
        <div className="flex gap-2">
          <Switch />

          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <i className="fa-solid fa-bars"></i>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Home</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>About</DropdownMenuItem>
              <DropdownMenuItem>Dental Services</DropdownMenuItem>
              <DropdownMenuItem>Location</DropdownMenuItem>
              <DropdownMenuItem>Contact</DropdownMenuItem>
              <DropdownMenuItem>Make an Appoitnment</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
