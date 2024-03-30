import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { EXPOLRE_ICON, HELP_ICON, HOME_ICON, LIVE_ICON, SENDFEEDBACK_ICON, SETTING_ICON, SHORTS_ICON, SUBSCRIPTION_ICON, USER_ICON } from '../utils/constants';

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen); //pass in the useSelector - pass the specific action to performed

    if(!isMenuOpen) return null;

  return (
    <div className='shadow-lg p-1 flex flex-col items-start w-72 font-bold text-xl'>
        <ul className=''>
            <Link to="/"><li className='flex items-center p-2 pr-2 mt-2 hover:bg-gray-200 hover:rounded-lg'><img className='w-20 inline' src={HOME_ICON} />Home</li></Link>
            <li className='flex items-center p-2 pr-4 mt-3 hover:bg-gray-200 hover:rounded-lg'><img className='w-10 inline mx-4' src={SHORTS_ICON} />Shorts</li>
            <li className='flex items-center p-2 pr-4 mt-3 hover:bg-gray-200 hover:rounded-lg'><img className='w-10 inline mx-5' src={LIVE_ICON} />Live</li>
            <li className='flex items-center p-2 pr-4 mt-3 mb-4 border-b border-gray-200 border-solid pb-6 hover:bg-gray-200 hover:rounded-lg'><img className='w-8 inline mx-5' src={SUBSCRIPTION_ICON} />Subscriptions</li>
            <li className='flex items-center p-2 pr-4 mt-3 hover:bg-gray-200 hover:rounded-lg'><img className='w-8 inline mx-5' src={USER_ICON} />Your Channel</li>
            <li className='flex items-center p-2 pr-4 mt-3 mb-4 border-b border-gray-200 border-solid pb-6 hover:bg-gray-200 hover:rounded-lg'><img className='w-8 inline mx-5' src={EXPOLRE_ICON} />Explore</li>
            <li className='flex items-center p-2 pr-4 mt-3 hover:bg-gray-200 hover:rounded-lg'><img className='w-8 inline mx-5' src={SETTING_ICON} />Setting</li>
            <li className='flex items-center p-2 pr-4 mt-3 hover:bg-gray-200 hover:rounded-lg'><img className='w-8 inline mx-5' src={HELP_ICON} />Help</li>
            <li className='flex items-center p-2 pr-4 mt-3 hover:bg-gray-200 hover:rounded-lg'><img className='w-8 inline mx-5' src={SENDFEEDBACK_ICON} />Send Feedback</li>
        </ul>
    </div>
  )
}

export default SideBar