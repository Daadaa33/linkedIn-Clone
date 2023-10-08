import React from 'react'
import SideLeft from './SideLeft'
import FeedMain from './FeedMain'
import AsideRight from './AsideRight'

import "./feed.css"

const FeedPage = () => {
  return (
    <div className="w-full">
 <div className="pt-4 grid gap-6" id="index-grid">
        {/* <div className="relative grid grid-rows-3 sm:grid-cols-2 bg-red-400 md:grid-cols-3 gap-x-[2.5rem] gap-y-[2.4rem]"> */}
        {/* aside left */}
        <SideLeft />
        {/* center */}
        <FeedMain />
        {/* aside right */}
        <AsideRight />
        {/* </div> */}
      </div>
    </div>
  );
}

export default FeedPage