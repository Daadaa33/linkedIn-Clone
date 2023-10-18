import "./sideleft.css"
import React, { useState } from 'react'
import daadaa from "../../assets/daadaa.jfif"
import topImg from "../../assets/topimg.jfif"

import AddIcon from '@mui/icons-material/Add';
import { BsBookmark } from 'react-icons/bs';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import { UserAuth } from "../../context/AuthContext";
import { Avatar } from "@mui/material";

const MyProfileHeader = () => {
  const {user} = UserAuth()
  return (
    <div>
      <div
        className="bg-center bg-cover block h-14 w-full"
        style={{
          backgroundImage:
            `url(${topImg})`,
        }}
      ></div>
      <div className="flex justify-center">
          <img className="w-16 h-16 rounded-full overflow-hidden border-white border-2 mt-[-32px] z-1"
          src={user?.photoURL || daadaa}/>
      </div>
    </div>
  );
};

const MyProfileProfession = () => {
  const {user} = UserAuth()
  return (
    <a
      className="flex justify-center items-center flex-col mt-4 pb-4 border-b border-slate-200"
      // href="https://www.linkedin.com/in/abdikadir-abdirahman-5853bb255/"
      target="_blank"
    >
      <div className="text-md font-medium hover:underline cursor-pointer">
        {user?.displayName || "Ali Abdikarim"}
      </div>
      <div className="text-xs text-zinc-500 mt-1">Software Engineer</div>
    </a>
  );
};

const MyProfileStats =({ text,  count,}) => {
  return (
    <div className="flex flex-row items-center text-xs font-semibold px-3 p-1 cursor-pointer hover:bg-zinc-200">
      <div className="w-full text-zinc-500">{text}</div>
      <div className="text-blue-600">{count}</div>
    </div>
  );
};

const MyItems = () => {
  return (
    <div className="flex flex-row items-center text-xs font-semibold p-3 cursor-pointer hover:bg-zinc-200 text-zinc-600">
      <BsBookmark />
      <span className="ml-2">My items</span>
    </div>
  );
};

const Discover = () => {
  const discoverItem =
    "font-semibold text-blue-700 text-xs p-3 py-2 hover:underline";
  return (
    <div className="pt-1 mt-2 rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className={discoverItem}>Groups</div>
      <div className={discoverItem}>Events</div>
      <div className={discoverItem}>Followed hashtags</div>
      <div className="border-t border-zinc-200 hover:bg-zinc-100 text-sm font-semibold text-zinc-500 p-3 text-center cursor-pointer transition-all">
        Discover more
      </div>
    </div>
  );
};

const SidebarDesktopLayout = () => {
  return (
    <>
      <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
        <MyProfileHeader />
        <MyProfileProfession />
        <div>
          <div className="py-3 border-b border-slate-200">
            <MyProfileStats text="Who's viewed your profile" count={50} />
            <MyProfileStats text="Impressions of your post" count={9195} />
          </div>
          <MyItems />
        </div>
      </div>
      <div className="sticky top-16">
        <Discover />
      </div>
    </>
  );
};



const SidebarMobileLayout = () => {
  const [isShowingAllMobile, setShowingAllMobile] = useState(false);
  return (
    <>
      <div className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
        <MyProfileHeader />
        <MyProfileProfession />
        {isShowingAllMobile && (
          <div>
            <div className="py-3 border-b border-slate-200">
              <MyProfileStats text="Who's viewed your profile" count={50} />
              <MyProfileStats text="Impressions of your post" count={9195} />
            </div>
            <MyItems />
          </div>
        )}
      </div>
      {isShowingAllMobile && <Discover />}
      <div
        className="flex text-zinc-500 font-semibold p-1 mt-2 hover:bg-zinc-200 cursor-pointer flex-row justify-center items-center text-sm"
        onClick={() => setShowingAllMobile(!isShowingAllMobile)}
      >
        {isShowingAllMobile ? (
          <>
            Show less <IoIosArrowUp />
          </>
        ) : (
          <>
            Show more <IoIosArrowDown />
          </>
        )}
      </div>
    </>
  );
};




export const Sidebar = () => {
  return (
    <div style={{ gridArea: "sidebar" }}>
      <div className="hidden sm:block">
        <SidebarDesktopLayout />
      </div>
      <div className="block sm:hidden">
        <SidebarMobileLayout />
      </div>
    </div>
  );
}