import React from 'react'
import logo from "../../assets/linkedPngHeader.png"
import { Link } from 'react-router-dom'
import { ArrowLeft, Search } from 'lucide-react'


const HeaderSearch = ({setIsActive}) => {
  return (
    <div className='flex items-center w-full gap-4 whitespace-nowrap p-2 flex-grow mx-4'>
        <Link to='/'>
            <img src={logo} alt="" className='object-contain w-10 '/>
          </Link>
          <div>
        <ArrowLeft onClick={() => setIsActive(false)}/>
          </div>
            <div className='flex-grow max-w-[700px] lg:max-w-[200px] relative'>
            <input type="search" placeholder='Search' className=' pl-7 rounded-md w-full px-3 py-1 bg-[#edf3f8] focus: border-black border-[3px] focus:border-2 hover:border-2 outline-none ' />
              <Search className='absolute top-2.5 left-2 w-4 h-4 ' />
            </div>
    </div>
  )
}

export default HeaderSearch