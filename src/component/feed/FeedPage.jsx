import React from 'react'
import {Main} from './Main'
import {Aside} from './Aside'
import {Sidebar} from './sidebar'


import "./feed.css"

const FeedPage = () => {
  return (
    <div className="w-full h-full ">
      {/* <div className="flex flex-col justify-center lg:flex-row lg:items-start lg:justify-evenly w-full h-full items-center gap-6"> */}
        {/* aside left */}
        <div className="pt-4 grid gap-6" id="index-grid">
        <Sidebar />
        {/* center */}
        <Main />
        {/* aside right */}
        <Aside />
      </div>
    </div>
  );
}

export default FeedPage