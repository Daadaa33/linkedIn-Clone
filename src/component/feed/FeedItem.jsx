
import { Avatar } from "@mui/material";
import { BsArrowLeftRight } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { TfiComment } from "react-icons/tfi";
import { FiSend } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import {HiMiniArrowPathRoundedSquare} from "react-icons/hi2" 

function extractDomain(url){
  const urlObj = new URL(url);
  return urlObj.hostname;
}

const LikesCountRow = ({  stats,}) => {
  if (!stats) {
    return null;
  }
  return (
    <div className="text-zinc-500 text-xs p-2 px-4 flex flex-row items-center border-b">
      {stats.likes && (
        <div className="w-full flex flex-row items-center hover:text-blue-600 hover:underline cursor-pointer">
          <HiOutlineLightBulb size={15} className="w-4 h-4"/> 
          <span className="ml-1">{stats.likes}</span>
        </div>
      )}
      {stats.comments && (
        <div className="hover:text-blue-600 hover:underline cursor-pointer shrink-0">
          {stats.comments} comments
        </div>
      )}
      {stats.reposts && (
        <div className="hover:text-blue-600 hover:underline cursor-pointer shrink-0 ml-2">
          <span className="mr-1 text-muted-foreground">•</span> {stats.reposts}{" "}
          reposts
        </div>
      )}
    </div>
  );
};

const Action = ({ text, icon }) => {
  return (
    <div className="p-2 rounded hover:bg-zinc-200 flex flex-row text-zinc-500 text-sm items-center cursor-pointer transition-all">
      <span>{icon}</span>
      <span className="font-semibold ml-2 hidden sm:inline">{text}</span>
    </div>
  );
};

const ActionsRow = () => {
  return (
    <div className="flex flex-row justify-between items-center py-2 px-4">
      <Action text="Link" icon={<SlLike className="w-6 h-6"/>} />
      <Action text="Comment" icon={<TfiComment className="w-6 h-6"/>} />
      <Action text="Repost" icon={<HiMiniArrowPathRoundedSquare className="w-7 h-7"/>} />
      <Action text="Send" icon={<FiSend className="w-6 h-6"/>} />
    </div>
  );
};

export const FeedItem = ({
  type,
  content,
  thumbnail,
  link,
  author,
  stats,
}) => {
  return (
    <div className="p-0 mt-2 rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-row p-4">
        <Avatar />
        <div className="pl-4">
          <div className="flex flex-row items-center">
            <div className="font-semibold">{author.name}</div>
            <div className="ml-2 text-muted-foreground text-sm">
              • {author.connectionDegree}
            </div>
          </div>
          <div className="text-xs text-zinc-500">{author.subtext}</div>
        </div>
      </div>
      <div className="p-4 text-sm pt-0">{content}</div>
      {thumbnail && <img src={thumbnail} className="w-full h-auto" />}
      {link && (
        <>
          <img src={link.thumbnail} className="w-full h-auto" />
          <div className="p-4 bg-slate-200">
            <div className="text-sm font-semibold">{link.title}</div>
            <div className="text-xs text-zinc-500 mt-1">
              {link.href && extractDomain(link.href)}
            </div>
          </div>
        </>
      )}
      <LikesCountRow stats={stats} />
      <ActionsRow />
    </div>
  );
};
