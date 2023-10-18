import logo from "../../assets/linkedPngHeader.png"
import daadaa from "../../assets/daadaa.jfif"

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import HeaderOptions from './HeaderOptions';
import HeaderSearch from './HeaderSearch';

import SearchIcon from '@mui/icons-material/Search';
import {CgMenuGridR, CgMoreVerticalAlt} from "react-icons/cg"
import HouseIcon from '@mui/icons-material/House';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { SetUserOpen, selectIsActive,  selectIsOpen,  selectIsUserOpen,  setIsActive, setIsSearchOpen } from '../../features/UserSlice';
import { UserAuth } from "../../context/AuthContext";


const Header = () => {
  const isActive = useSelector(selectIsActive)
  const isOpen = useSelector(selectIsOpen)
  const  isUserOpen = useSelector(selectIsUserOpen)
  const dispatch = useDispatch()
  const {logOut} = UserAuth()
  const navigate = useNavigate()

  const toggle = () => {
     dispatch(setIsActive(true))
     dispatch(setIsSearchOpen(true))
  }

  const inputFocus = () => {
    dispatch(setIsSearchOpen(true))
  }

  const close = () => {
    dispatch(setIsSearchOpen(false));
    dispatch(setIsActive(false));
  }

  const UserOpen = () => {
    dispatch(SetUserOpen(!isUserOpen))
  }

  const handleSignOut = async () => {
    try {
      await logOut()

      console.log("log out")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="fixed top-0 right-0 w-full h-[54px] z-50 bg-white">
      <div className="max-w-6xl h-full bg-white  mx-auto">
        <div
          className={`${
            isActive ? "hidden " : "flex flex-grow"
          } items-center md:justify-evenly gap-8 md:gap-0 justify-evenly  p-3 h-full w-full `}
        >
          {/* header left */}
          <div className="flex items-center gap-1.5">
            <Link to="/feed">
              <img src={logo} alt="" className="object-contain w-10 " />
            </Link>
            <div
              className={`md:bg-[#EDF3F8] w-[240px] relative  rounded hidden lg:block ${
                isOpen ? "isOpen duration-200 translate-x-1" : ""
              } `}
            >
              <SearchIcon
                sx={{ fontSize: 20 }}
                className={`text-[#666666] absolute top-2 left-1 cursor-pointer `}
              />
              <input
                onFocus={inputFocus}
                type="text"
                className={`outline-none px-2 pl-[2rem] h-[34px] w-full rounded text-md   bg-[#EDF3F8] `}
                placeholder="Search"
              />
            </div>

            <div className="pl-4 flex flex-col gap lg:hidden items-center group">
              <SearchIcon
                sx={{ fontSize: 29 }}
                className="text-[#666666] group-hover:text-black cursor-pointer"
                onClick={toggle}
              />
              <span className="text-[12px] md:block hidden text-[#666666] group-hover:text-black">
                Search
              </span>
            </div>
          </div>

          {/* header right */}

          <div
            className="flex gap-5 md:gap-4 items-center sm:gap-8 cursor-pointer "
            onClick={close}
          >
            <HeaderOptions
              Icon={
                <HouseIcon
                  sx={{ fontSize: 27, color: "g" }}
                  className="hover:text-black  text-[#666666]"
                />
              }
              title="Home"
            />
            <HeaderOptions
              Icon={
                <SupervisorAccountIcon
                  sx={{ fontSize: 27, color: "g40" }}
                  className="hover:text-black  text-[#666666] duration-100"
                />
              }
              title="My Network"
            />
            <HeaderOptions
              Icon={
                <HomeRepairServiceIcon
                  sx={{ fontSize: 27, color: "g" }}
                  className="hover:text-black  text-[#666666]"
                />
              }
              title="Jobs"
            />
            <HeaderOptions
              Icon={
                <SmsIcon
                  sx={{ fontSize: 27, color: "g" }}
                  className="hover:text-black  text-[#666666]"
                />
              }
              title="Messaging"
            />
            <HeaderOptions
              Icon={
                <NotificationsIcon
                  sx={{ fontSize: 27, color: "g" }}
                  className="hover:text-black  text-[#666666]"
                />
              }
              title="Notification"
            />

            {/* profile */}
            <div
              className="relative "
            >
              <div className="flex flex-col gap items-center group"
              onClick={UserOpen}
              >
              <div>
                <img
                  src={daadaa}
                  alt="daadaa"
                  className="w-[24px] rounded-full object-contain"
                />
              </div>
              <div className=" items-center hidden md:flex gap-0">
                <span className={`text-[12px]  text-[#666666] font-light group-hover:text-black ${isUserOpen ? "text-black": "text-[#666666]"}`}>
                  Me
                </span>
                <ArrowDropDownIcon className={` group-hover:text-black ${isUserOpen ? "text-black": "text-[#666666]"} `} />
              </div>
              </div>
              {isUserOpen && (
                <div className="fixed top-[3rem]  bg-white w-[13rem] h-[20rem] p-2  rounded">
                  <button className="rounded-md text-center font-semibold text-lg w-full px-2 py-3 bg-[#666666] text-white"
                  onClick={handleSignOut}
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>

            {/* for bussiness */}
            <div className="sm:flex gap-4 items-center hidden">
              <div className="flex flex-col gap items-center group  ">
                <div>
                  <CgMenuGridR className="w-6 h-6 text-[#666666] group-hover:text-black" />
                </div>
                <div className=" items-center hidden md:flex ">
                  <span className="text-[12px]  text-[#666666] font-light group-hover:text-black ">
                    For Bussines
                  </span>
                  <ArrowDropDownIcon className=" text-[#666666] group-hover:text-black" />
                </div>
              </div>

              {/* link */}
              <p className="text-[#5c3b09d1] hover:text-[#5C3B09] text-[12px] font-normal underline">
                Network Smarter,
                <br /> Try Premium Free
              </p>
            </div>

            <div className="sm:hidden">
              <CgMoreVerticalAlt className="w-7 h-7 text-[#666666] group-hover:text-black " />
            </div>
          </div>
        </div>

        {/* header search */}
        <div className={`${isActive ? "flex " : "hidden"}`}>
          {isActive && <HeaderSearch />}
        </div>
      </div>
    </div>
  );
}

export default Header