import linkedImg from '../../../public/linkedIn img.png'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import { Link } from 'react-router-dom';
import daadaa from "../../assets/daadaa.jfif"

import {CgMenuGridR, CgMoreVerticalAlt} from "react-icons/cg"

import HouseIcon from '@mui/icons-material/House';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import HeaderSearch from './HeaderSearch';
import { useState } from 'react';


const Header = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className='fixed top-0 right-0 w-full h-[54px] z-50 bg-white'>
      <div className="max-w-6xl h-full bg-white  mx-auto">

        <div className={`${isActive ? "hidden " : "flex"} items-center md:justify-evenly gap-8 md:gap-0 justify-evenly  p-3 h-full w-full `}>
        {/* header left */}
        <div className='flex items-center gap-1.5'>
          <Link to='/'>
            <img src={linkedImg} alt="" className='object-contain w-10 '/>
          </Link>
            <div className='md:bg-[#EDF3F8]  rounded hidden lg:block '>
                <SearchIcon sx={{fontSize : 20}} className='text-[#666666] cursor-pointer'
                />
                <input type="text" className='outline-none h-[34px] rounded text-sm   w-[200px] bg-[#EDF3F8]' placeholder='Search'/>
            </div>
            
            <div className='pl-4 flex flex-col gap lg:hidden items-center group'>
                <SearchIcon sx={{fontSize : 29}} className='text-[#666666] group-hover:text-black cursor-pointer' onClick={() => setIsActive(true)}/>
                <span className='text-[12px] md:block hidden text-[#666666] group-hover:text-black'>Search</span>
            </div>
        </div>
        
        {/* header right */}
        <div className='flex gap-5 md:gap-4 items-center sm:gap-8 cursor-pointer '>
        <HeaderOptions Icon={< HouseIcon sx={{fontSize : 27 , color: "g" }} className='hover:text-black  text-[#666666]' />} title="Home" />
				<HeaderOptions Icon={< SupervisorAccountIcon sx={{fontSize : 27 , color: "g40" }} className='hover:text-black  text-[#666666] duration-100'/>} title="My Network" />
				<HeaderOptions Icon={< HomeRepairServiceIcon sx={{fontSize : 27 , color: "g" }} className='hover:text-black  text-[#666666]'/>} title="Jobs" />
				<HeaderOptions Icon={< SmsIcon sx={{fontSize : 27 , color: "g" }} className='hover:text-black  text-[#666666]'/>} title="Messaging" />
				<HeaderOptions Icon={< NotificationsIcon sx={{fontSize : 27 , color: "g" }} className='hover:text-black  text-[#666666]'/>} title="Notification" />
      
      {/* profile */}
        <div className='flex flex-col gap items-center group '>
          <div>
            <img src={daadaa} alt="daadaa" className='w-[24px] rounded-full object-contain'/>
          </div>
          <div className=' items-center hidden md:flex '>
            <span className='text-[12px]  text-[#666666] font-light group-hover:text-black'>Me</span>
            <ArrowDropDownIcon className=' text-[#666666] group-hover:text-black'/>
          </div>
        </div>

        {/* for bussiness */}
        <div className="sm:flex gap-4 items-center hidden">
          <div className='flex flex-col gap items-center group  '>
          <div>
              <CgMenuGridR className='w-6 h-6 text-[#666666] group-hover:text-black' />
          </div>
          <div className=' items-center hidden md:flex '>
            <span className='text-[12px]  text-[#666666] font-light group-hover:text-black '>For Bussines</span>
            <ArrowDropDownIcon className=' text-[#666666] group-hover:text-black'/>
          </div>
        </div>

        {/* link */}
          <p className='text-[#5c3b09d1] hover:text-[#5C3B09] text-[12px] font-normal underline'>Network Smarter,<br /> Try Premium Free</p>
        </div>

        <div className='sm:hidden'>
        <CgMoreVerticalAlt  className='w-7 h-7 text-[#666666] group-hover:text-black '/>
        </div>

      </div>
        </div>

        {/* header search */}
        <div className={`${isActive ? "flex " : "hidden"}`}>

        {isActive && (
          <HeaderSearch setIsActive={setIsActive} />
          )}
          </div>
        </div>
    </div>
  )
}

export default Header