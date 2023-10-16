import React from 'react'
import {Main} from './Main'
import {Aside} from './Aside'
import {Sidebar} from './sidebar'


import "./feed.css"
import {   selectIsOpen,  } from '../../features/UserSlice'
import { useSelector } from 'react-redux'

const FeedPage = () => {
  const isopen = useSelector(selectIsOpen)
  console.log(isopen)
  return (
    <div className="w-full h-full ">
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