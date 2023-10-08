import React from 'react'
import {BsInfoSquareFill, BsArrowRight} from "react-icons/bs"
import AddIcon from '@mui/icons-material/Add';

import abduleImage from '../../assets/abduleimg.jfif'
import w3image from '../../assets/w3img.jfif'
import matanImg from '../../assets/matanimg.jfif'

const AsideRight = () => {

  const data = [
    {
      name : 'Abdule yusuf',
      img : abduleImage,
      desc : "Software Engineer 💻 Javascript || React-Js || Next-Js || Nodejs"
    },
    {
      name : 'W3Schools.com',
      img : w3image,
      desc : "Company • E-Learning"
    },
    {
      name : 'Abdulrashiid O. Matan',
      img : matanImg,
      desc : "GKSP Scholar || Data scientist || Developer || Creative designer || Story"
    }
    ]

  return (
    <div>
      <div className="border-box w-[500px] lg:w-[276px] rounded-[0.8rem] bg-white p-[1.2rem] self-center">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-[16px] font-semibold">Add to your feed</h1>
            <BsInfoSquareFill className="w-3 h-3 " />
          </div>

          {/* feeds  */}
          <div className="flex flex-col space-y-4 ">
            {data?.map((data) => (
              <div className="">
                <div className="flex gap-10 justify-start items-start">
                  <div className="">
                    <img
                      src={data.img}
                      alt="the img"
                      className=" rounded-full bg-clip-content w-[48px] h-[48px]"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h1 className="text-[14px] font-semibold">{data.name}</h1>
                    <p className="text-[12px]">{data.desc}</p>
                    <div className=" w-[66px] h-[20px]">
                      <button className="flex items-center justify-center gap-[2px] rounded-full hover:bg-[#F3F3F3] border-[1px] px-2 hover:border-[2px] border-black">
                        <AddIcon className="w-4 h-4 text-black" />
                        <p>Follow</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='p-2 mt-4 flex gap-2 items-center hover:bg-[#D7D7D7] duration-100 rounded-md'>
            <p className='text-[#464444] font-semibold text-[14px]'>View all recommendations </p>
            <BsArrowRight  className='w-6 h-6 '/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideRight