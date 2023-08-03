import React from 'react'
import logo from '../assest/image/logo.svg'
import { sidebarMenu } from '../ultis/menu'
import { NavLink } from 'react-router-dom'

const notActiveStyle = 'py-2 px-[25px] font-bold text-[14px] text-[#5b5760] bg-[#fbe6e6] flex gap-3 items-center'
const activeStyle = 'py-2 px-[25px] font-bold text-[14px] text-[#c75995] bg-[#eedada] flex gap-3 items-center'

const SidebarLeft = () => {
  return (
    <div className='flex flex-col'>
       <div className='w-full h-[70px] py-[15px] px-[25px] flex justify-center items-center bg-[#fbe6e6]'>
        <img className='w-[140px] h-[40px]' src={logo} alt='logo-zing'></img>
      </div>
      <div className='flex flex-col'>
        {sidebarMenu.map(item => (
           <NavLink 
           to={item.path}
           className={({isActive}) => isActive ? activeStyle: notActiveStyle 
           }
         >
            {item.icon}
            <span>{item.text}</span>
         </NavLink>
        ))}
      </div>
    </div>
  )
}

export default SidebarLeft
