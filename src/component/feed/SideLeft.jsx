import React from 'react'
import daadaa from "../../assets/daadaa.jfif"
import topImg from "../../assets/topimg.jfif"

import AddIcon from '@mui/icons-material/Add';

import "./sideleft.css"
const SideLeft = () => {
  return (
    <div className=''>
      <div className='flex flex-col gap-3 w-[500px] lg:w-[201px]'>
        <div className="border-box bg-white sm:rounded-[0.8rem] relative overflow-hidden">
          <div className=' flex flex-col justify-center items-center md:mt-0 mt-[4rem] p-[1.2rem]'>

          <div className=' flex flex-col justify-center items-center gap-5'>
            <img src={daadaa} alt="dada" className='w-[68px] z-40 h-[68px] 
            rounded-full boder border-[2px] border-white  '/>

            <div className=" flex flex-col justify-center items-center  gap-3">
            <h2 className='font-semibold text-[16px] hover:underline'>Abdikadir qulle</h2>
            <p className='text-[12px] font-normal text-center'>Frontend developer | ( React.js | Next  js | Typescript) | Transforming Ideas  into Interactive Applications |</p>
            </div>
          </div>
        </div>
        <img src={topImg} alt="top img" className='absolute top-0 left-0'/>
      </div>

        {/* bottom */}
        <div className='hidden sm:flex border-box lg:w-[201px] bg-white  rounded-[0.8rem]  border border-[#F4F2EE]'>
          <div className='flex flex-col items-start gap-4 justify-start  px-2 py-4'>

            <div className=''>
              <h1 className='text-[12px] font-normal text-[#8E8E8E]'>Recent</h1>
              <p className='hidden'><span className='font-bold text-xl'>#</span> hiring</p>
            </div>

            <div className='flex flex-col gap-4'>
              <span>Group</span>
              <span>Events</span>
              <span>Followed Hashtags</span>
            </div>


              <div className='w-full h-14 flex items-center justify-center hover:bg-[#F3F3F3]'>
                <h1 className='text-center font-semibold text-[16px] '>Discover more </h1>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideLeft