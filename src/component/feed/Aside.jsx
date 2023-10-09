// import {
//   ChevronDown,
//   ChevronRightIcon,
//   InfoIcon,
//   PlusIcon,
// } from "lucide-react";
// import { cn } from "src/utils/cn";
// import { UserAvatar } from "./UserAvatar";
// import { Card, CardHeader } from "./primitives/Card";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "./primitives/DropdownMenu";
// import {
//   TooltipProvider,
//   Tooltip,
//   TooltipTrigger,
//   TooltipContent,
// } from "./primitives/Tooltip";

import AddIcon from '@mui/icons-material/Add';
import { Avatar } from "@mui/material";

import abduleImage from '../../assets/abduleimg.jfif'
import w3image from '../../assets/w3img.jfif'
import matanImg from '../../assets/matanimg.jfif'
import { BsArrowRight} from "react-icons/bs"


const UserRecommendation = ({ name, subtext, imageUrl }) => {
  return (
    <div className="flex flex-row p-3">
        <img src={imageUrl} alt="img" className=" rounded-full bg-clip-content w-[48px] h-[48px]" />
      {/* <Avatar /> */}
      <div className="w-full ml-2">
        <div className="font-semibold text-sm">{name}</div>
        <div className="text-xs text-zinc-500 mb-2">{subtext}</div>
        <span className="rounded-2xl font-semibold text-zinc-500 border-zinc-500 hover:border-zinc-700 
        text-sm w-24 p-1 flex flex-row items-center border justify-center hover:bg-zinc-200 cursor-pointer transition-all"
          
        >
          <AddIcon size={18} /> <span className="ml-1">Follow</span>
        </span>
      </div>
    </div>
  );
};

const AsideHeader = () => {
  return (
    <>
      <div className="font-semibold w-full">Add to your feed</div>

      {/* <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild className="cursor-pointer">
            <InfoIcon size={16} />
          </TooltipTrigger>
          <TooltipContent>
            <p className="w-48">
              Follow things that interest you to personalize your feed.{" "}
              <span className="text-underline font-semibold text-blue-600">
                Learn more.
              </span>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider> */}
    </>
  );
};

const AsideFooterLink= ({ text, subItems }) => {
  return (
    <span className="m-1 cursor-pointer hover:underline hover:text-blue-500 ">
        {text}
    </span>
  );
};

const AsideFooter = () => {
  return (
    <div className="text-xs text-zinc-500 flex flex-wrap p-4 m-2 justify-center sticky top-14">
      <AsideFooterLink text="About" />
      <AsideFooterLink text="Accessibility" />
      <AsideFooterLink text="Help Center" />
      <AsideFooterLink text="Privacy & Terms"/>
      <AsideFooterLink text="Ad Choices" />
      <AsideFooterLink text="Advertising" />
      <AsideFooterLink text="Business Services" />
    </div>
  );
};

export const  Aside = () => {
  return (
    <aside style={{ gridArea: "aside" }}>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-3 flex flex-row ">
          <AsideHeader />
        </div>
        <UserRecommendation
          name="abdule yusuf"
          imageUrl={abduleImage}
          subtext="Software Engineer 💻 Javascript || React-Js || Next-Js || Nodejs"
        />
        <UserRecommendation
          name="w3Shcool.com"
          imageUrl={w3image}
          subtext="Company • E-Learning"
        />
        <UserRecommendation
          name="Abdulrashiid O. Matan"
          imageUrl={matanImg}
          subtext="GKSP Scholar || Data scientist || Developer || Creative designer || Story"
        />
        <div className="mt-1 ml-3 text-zinc-500 flex flex-row text-sm p-2 items-center font-semibold cursor-pointer">
          View all recommendations <BsArrowRight size={18} />
        </div>
      </div>
      <AsideFooter />
    </aside>
  );
};
