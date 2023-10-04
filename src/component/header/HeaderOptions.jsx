import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const HeaderOptions = ({title, Icon}) => {
  return (
    <div className=''>
        <div className='flex flex-col items-center'>
          {Icon }
          <span className='md:flex font-light text-[#666666] hidden hover:text-black  text-[13px]'>{title}</span>
          
      </div>
    </div>
  )
}

export default HeaderOptions