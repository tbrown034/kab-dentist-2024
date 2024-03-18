"use client";
import CallUsNowDiallogue from "@/app/Dialogues/CallUsNowDialogue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
          <DropdownMenuItem></DropdownMenuItem>
          <DropdownMenuItem>Meet Dr. Brown</DropdownMenuItem>

          <DropdownMenuItem>Location</DropdownMenuItem>
          <DropdownMenuItem>Contact</DropdownMenuItem>
          <DropdownMenuItem>Make an Appoitnment</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default HeaderHamburger;
