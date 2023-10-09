// import { MyAvatar } from "./UserAvatar";
// import { BaggageClaim, Calendar, File, Image, Video } from "lucide-react";
import { Avatar } from "@mui/material";
import { useState } from "react";
// import { Button } from "./primitives/Button";
// import { Card } from "./primitives/Card";
// import { Dialog, DialogContent } from "./primitives/Dialog";
// import { Separator } from "./primitives/Separator";
// import { Textarea } from "./primitives/TextArea";
// import {TooltipProvider,Tooltip,TooltipTrigger,TooltipContent,} from "./primitives/Tooltip";
// import { Input } from "./primitives/Input";

import {AiOutlineFile} from "react-icons/ai"
import {FaLuggageCart} from "react-icons/fa"
import {HiOutlineVideoCamera} from "react-icons/hi"
import {TbPhoto} from "react-icons/tb"
import {BiCalendar} from "react-icons/bi"
export const Card = "rounded-lg border bg-card text-card-foreground shadow-sm"

const WriteNewPostCardButtonContainer = ({ children,}) => {
  return (
    <div className="cursor-pointer hover:bg-zinc-100 p-2 rounded flex flex-row items-center justify-center">
      {children}
    </div>
  );
};

const Action  = ({ icon, tooltipText,}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className="cursor-pointer">
          <div
            className="rounded-full bg-zinc-100 transition-all p-4 text-zinc-500 mr-3 hover:border-zinc-400 border-b-4 border-transparent hover:shadow-lg" >
            <span className="w-6 h-6">{icon}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const PostBottomActions = () => {
  return (
    <div className="flex flex-row items-center mt-4">
      <Action icon={<Image />} tooltipText="Add a photo" />
      <Action icon={<Video />} tooltipText="Add a video" />
      <Action icon={<Calendar />} tooltipText="Create an event" />
    </div>
  );
};

const WriteNewPostDialog = ({ onClose }) => {
  const [text, setText] = useState("");
  const isPostButtonDisabled = text === "";

  return (
    <Dialog open onOpenChange={() => onClose()}>
      <DialogContent className="top-8 p-0">
        <div className="p-6">
          <div className="flex flex-row items-center">
            <Avatar />
            <div className="ml-3">
              <div className="text-lg font-semibold">Ozgur GUL</div>
              <div className="text-sm">Post to anyone</div>
            </div>
          </div>
          <textarea
            placeholder="What do you want to talk about?"
            className="border-none outline-none text-lg p-0 text-zinc-600 mt-8 resize-none"
            // Override tailwind variable dynamically for ttis textarea
            // @ts-ignore
            style={{ "--tw-ring-color": "transparent" }}
            rows={12}
            onChange={(e) => setText(e.target.value)}
          />
          <PostBottomActions />
        </div>
        <Separator className="pt-0 mt-0" />
        <div className="flex flex-row p-4 pt-0">
          <div className="w-full" />
          <Button
            className={cn(
              "rounded-3xl font-semibold",
              !isPostButtonDisabled && "bg-blue-600"
            )}
            disabled={isPostButtonDisabled}
          >
            Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const WriteNewPostCard = () => {
  const [isWriteDialogOpen, setWriteDialogOpen] = useState(false);
  return (
    <div className="p-4  rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-row">
        <Avatar />
        <input
          placeholder="Start a post"
          className="rounded-3xl ml-2 h-12 font-semibold text-zinc-500 hover:bg-zinc-100 transition-all cursor-pointer flex  w-full  border border-input bg-transparent px-3 py-2 text-sm ring-offset-background 
          file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
         
          // onClick={() => setWriteDialogOpen(true)}
        />
        {/* {isWriteDialogOpen && (
          <WriteNewPostDialog onClose={() => setWriteDialogOpen(false)} />
        )} */}
      </div>
      <div className="flex flex-row justify-between mt-3 sm:px-4 px-2">
        <WriteNewPostCardButtonContainer>
          <span className="text-blue-500">
            <TbPhoto className="w-6 h-6 "/> 
          </span>
          <span className="font-semibold text-zinc-500 ml-2 text-sm">
            Photo
          </span>
        </WriteNewPostCardButtonContainer>
        
        <WriteNewPostCardButtonContainer>
            <span className="text-[#c37d16]">
            <BiCalendar className="w-6 h-6 "/> 
          </span>
          <span className="font-semibold text-zinc-500 ml-2 text-sm">Event</span>
        </WriteNewPostCardButtonContainer>
        <WriteNewPostCardButtonContainer>
          <span className="text-red-400">
            <AiOutlineFile className="w-6 h-6 "/> 
          </span>
          <span className="font-semibold text-zinc-500 ml-2 text-sm">
            Write article
          </span>
        </WriteNewPostCardButtonContainer>
      </div>
    </div>
  );
};
