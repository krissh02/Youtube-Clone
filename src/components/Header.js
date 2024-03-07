import React from 'react'
import { HAMBURGER_ICON, USER_ICON, YOUTUBE_LOGO } from '../utils/constants'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    }

  return (
    <div className="grid grid-flow-col p-4 shadow-lg fixed w-full top-0 left-0 bg-white">
        {/* left section start */}
        <div className='flex items-center col-span-2 mx-2'>
            <img src={HAMBURGER_ICON} className="h-10 mr-2 cursor-pointer" alt="HamBurger Icon" onClick={() =>toggleMenuHandler()}/>
            <img  alt="youtube logo" src={YOUTUBE_LOGO} className="h-10 ml-4"></img>
        </div>
        {/* left section end */}

        {/* Middle section start */}
        <div className='col-span-9'>
            <div className='flex items-center'>
                <input type='text' placeholder='Search' className='border border-gray-300 border-solid p-3 rounded-l-full w-1/2'></input>
                <button className='border border-gray-300 border-solid px-6 py-3 rounded-r-full bg-gray-100'>🔍</button>
                <button className='rounded-full mx-4 border p-1 text-3xl bg-gray-100'>🎙️</button>
            </div>
        </div>
        {/* Middle section end */}

        {/* Right section start*/}
        <div className='col-span-1 flex items-center justify-end px-4'>
            <img alt='user-icon' src={USER_ICON} className='h-10'></img>
        </div>
         {/* Right section end*/}

    </div>
  )
}

export default Header