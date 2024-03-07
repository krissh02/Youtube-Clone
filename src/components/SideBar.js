import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen); //pass in the useSelector - pass the specific action to performed

    if(!isMenuOpen) return null;

  return (
    <div className='shadow-lg p-4 flex flex-col items-start w-72 font-bold text-xl'>
        <ul className=''>
            <li className='p-2 pr-4 mt-2 hover:bg-gray-200 hover:rounded-lg'>Home</li>
            <li className='p-2 pr-4 mt-2 hover:bg-gray-200 hover:rounded-lg'>Shorts</li>
            <li className='p-2 pr-4 mt-2 hover:bg-gray-200 hover:rounded-lg'>Live</li>
            <li className='p-2 pr-4 mt-2 border-b border-gray-200 border-solid pb-4 hover:bg-gray-200 hover:rounded-lg'>Subscriptions</li>
            <li className='p-2 pr-4 mt-2 hover:bg-gray-200 hover:rounded-lg'>Your Channel</li>
            <li className='p-2 pr-4 mt-2 border-b border-gray-200 border-solid pb-4 hover:bg-gray-200 hover:rounded-lg'>Explore</li>
            <li className='p-2 pr-4 mt-2 hover:bg-gray-200 hover:rounded-lg'>Setting</li>
            <li className='p-2 pr-4 mt-2 hover:bg-gray-200 hover:rounded-lg'>Help</li>
            <li className='p-2 pr-4 mt-2 hover:bg-gray-200 hover:rounded-lg'>Send Feedback</li>
        </ul>
    </div>
  )
}

export default SideBar