import React from 'react'
import {Main} from './Main'
import {Aside} from './Aside'
import {Sidebar} from './sidebar'


import "./feed.css"
import { isSearchOpen,  selectIsOpen,  } from '../../features/UserSlice'
import { useSelector } from 'react-redux'

const FeedPage = () => {
  const isopen = useSelector(selectIsOpen)
  console.log(isopen)
  return (
    <div className="w-full h-full ">
      
      {isopen && (
        <div className="fixed inset-0 z-[999] bg-secondaryHeader-dark opacity-50  " />
      )}
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