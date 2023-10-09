// import { FeedItem } from "./FeedItem";
// import { WriteNewPostCard } from "./WriteNewPostCard";
// import {  DropdownMenu,  DropdownMenuTrigger,  DropdownMenuContent, DropdownMenuItem,} from "./primitives/DropdownMenu";
// import { Separator } from "./primitives/Separator";

import { FeedItem } from "./FeedItem";
import { WriteNewPostCard } from "./WriteNewPostCard";

const SortByDivider = () => {
  return (
    <div className="flex flex-row mt-2 justify-end ">
      {/* <div className="pt-2 w-full">
         <div className="bg-zinc-300" ></div> 
      </div> */}
      <div className="text-zinc-500 text-xs pl-2 justify-end">
            <div className="cursor-pointer flex  gap-4  w-[8rem]">
              <span >Sort by: </span>
              <select className="bg-[#F3F2F0] outline-none">
            <option>
              <span className="font-semibold text-zinc-800">Top</span>
            </option>
            <option className="font-semibold text-zinc-800">
              <span className="font-semibold text-zinc-800">Recent</span>
            </option>
          </select>
            </div>
          </div>
        </div>
   
  );
};

export const  Main = () => {
  return (
    <div style={{ gridArea: "main" }}>
      <WriteNewPostCard />
      <SortByDivider />
     <div>

      <FeedItem
        type="post"
        content="Today, we are bringing together AI and quantum with Azure Quantum Elements, ushering in a new era of scientific discovery. Our goal is to compress the next 250 years of chemistry and materials science progress into the next 25."
        link={{
          title:
            "Accelerating scientific discovery with Azure Quantum - The Official Microsoft Blog",
          thumbnail:
            "",
          href: "",
        }}
        author={{
          name: "Satya Nadella",
          subtext: "Chairman and CEO at Microsoft",
          imageUrl:
            "",
          connectionDegree: "1st",
        }}
        stats={{
          likes: 5788,
          comments: 139,
          reposts: 593,
        }}
      />
      <FeedItem
        type="post"
        content="In my annual letter to shareholders, I reflect on our opportunity and responsibility to connect what technology can do with what the world needs it to do."
        link={{
          title:
            "My annual letter: A historic intersection of opportunity and responsibility",
          thumbnail:
            "",
          href: "",
        }}
        author={{
          name: "Satya Nadella",
          subtext: "Chairman and CEO at Microsoft",
          imageUrl:
            "",
          connectionDegree: "1st",
        }}
        stats={{
          likes: 5361,
          comments: 73,
          reposts: 275,
        }}
      />
      <FeedItem
        type="post"
        content="Incredible day in New York for Salesforce AI Day. Huge thanks to all our customer TrAIlblazers, partners, media, and analysts who joined us. "
        thumbnail=""
        author={{
          name: "Clara Shih",
          subtext: "CEO of Salesforce AI, Board Director & Entrepreneur",
          imageUrl:
           "",
          connectionDegree: "3rd",
        }}
        stats={{
          likes: 837,
          comments: 39,
          reposts: 27,
        }}
      />
      <FeedItem
        type="post"
        content="Proud to announce the launch of our new sustainable data center region in Sweden, using 100% renewable energy and zero-waste operations."
        link={{
          title:
            "Google unveils its first sustainable data center region in Sweden",
          thumbnail:
            "",
          href: "",
        }}
        author={{
          name: "Sundar Pichai",
          subtext: "CEO at Google",
          imageUrl:
            "",
          connectionDegree: "2nd",
        }}
        stats={{
          likes: 4891,
          comments: 131,
          reposts: 503,
        }}
      />
      <FeedItem
        type="post"
        content="Really proud of the team for our continued advancements in VR technology. The future of communication is exciting!"
        link={{
          title: "Facebook's new VR tech is pushing the boundaries",
          thumbnail:
           "",
          href: "",
        }}
        author={{
          name: "Mark Zuckerberg",
          subtext: "CEO at Facebook",
          imageUrl:
            "",
          connectionDegree: "3rd",
        }}
        stats={{
          likes: 3254,
          comments: 97,
          reposts: 213,
        }}
      />
      <FeedItem
        type="post"
        content="Exciting to see SpaceX push the boundaries of space technology once more. The successful launch of Falcon Heavy was a sight to behold."
        thumbnail=""
        author={{
          name: "Elon Musk",
          subtext: "CEO of SpaceX and Tesla, Entrepreneur",
          imageUrl: "https://ichef.bbci.co.uk/images/ic/640x360/p03c84wz.jpg",
          connectionDegree: "2nd",
        }}
        stats={{
          likes: 18537,
          comments: 839,
          reposts: 1247,
        }}
      />
     </div>
    </div>
  );
};
