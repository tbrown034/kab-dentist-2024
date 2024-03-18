"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const HeaderHamburger = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <i className="fa-solid fa-bars"></i>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="m-1 mr-8">
          <DropdownMenuItem className="font-bold">Home</DropdownMenuItem>
          <DropdownMenuItem>Call Us Now</DropdownMenuItem>

          <DropdownMenuItem>Location</DropdownMenuItem>
          <DropdownMenuItem>Contact</DropdownMenuItem>
          <DropdownMenuItem>Make an Appoitnment</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default HeaderHamburger;
