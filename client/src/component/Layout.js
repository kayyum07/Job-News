import React, { useState } from 'react'
import SideBar from './SideBar'
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import {BiUserCircle} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function Layout(props) {
    const [showSideBar, setShowSideBar] = useState(true);
    const navigate = useNavigate()
    return (
        <div className='layout flex w-full h-full font-bold '>
            <div className='sidebar '>
                <SideBar showSideBar={showSideBar} />
            </div>

            <div className='w-full h-full'>
                <div className='header bg-primary h-20 w-full flex item-center justify-between '>
                    <HiOutlineMenuAlt1 onClick={() => setShowSideBar(!showSideBar)} color='gray' size={30} className='cursor-pointer mt-5' />
                    <div className='mr-5 text-gray-300 flex items-center space-x-1 cursor-pointer'onClick={()=> navigate('/Profile')}>
                    <BiUserCircle />
                        <span>{JSON.parse(localStorage.getItem('sharenews-user')).name.toUpperCase()}</span>
                    </div>
                </div>
                <div className='content max-h-[85vh] overflow-y-auto'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Layout
