import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarLeft, SidebarRight }from '../components/index'

const Public = () => {
    return (
      <div className="w-full flex overflow-y-auto">
            <div className='w-[240px] flex-none'>
                <SidebarLeft />
            </div>
                <div className='flex-auto'>
                    <Outlet />
            </div>
            <div className='w-[330px] flex-none'>
                <SidebarRight />
            </div>
      </div>
    )
}

export default Public