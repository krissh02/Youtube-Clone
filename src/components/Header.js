import React, { useState,useEffect } from 'react'
import { EXPOLRE_ICON, HAMBURGER_ICON, USER_ICON, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from '../utils/constants'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { cacheResults } from '../utils/searchSlice'
import { videoResult } from '../utils/videoSlice'

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions,setSuggestions] = useState([]);
    const [showSuggestions,setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
    useEffect(()=>{
        const timer = setTimeout(()=> {
        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery]);
        }
        else{
            getSearchSuggestion();
        }
    },200);

        return ()=>{
            clearTimeout(timer);
        };  
    },[searchQuery])

    const getSearchSuggestion = async () =>{
        console.log("Api call - "+searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);
        // update the cache
        dispatch(
            cacheResults({
                [searchQuery] : json[1],
            })
        )
    }

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu());
    }

    const showSearchVideo = () =>{
        dispatch(videoResult());
    }
  return (
    <div className="grid grid-flow-col p-4 shadow-lg fixed w-full top-0 left-0 bg-white">
        {/* left section start */}
        <div className='flex items-center col-span-2 mx-2'>
            <img src={HAMBURGER_ICON} className="h-10 mr-2 cursor-pointer" alt="HamBurger Icon" onClick={() =>toggleMenuHandler()}/>
            <a href="/">
            <img  alt="youtube logo" src={YOUTUBE_LOGO} className="w-28 ml-4"></img>
            </a>
        </div>
        {/* left section end */}

        {/* Middle section start */}
        <div className='col-span-9'>
            <div className='flex items-center'>
                <input type='text' placeholder='Search' className='border border-gray-300 border-solid p-3 rounded-l-full w-1/2' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)}></input>
                <button className='border border-gray-300 border-solid px-6 py-3 rounded-r-full bg-gray-100'>🔍</button>
            </div>
            {showSuggestions && 
            <div className='shadow-sm p-2 w-[39.5rem] rounded-2xl mt-1 fixed bg-white'>
                <ul>
                    { suggestions.map( s =>
                            <li key={s} className='px-2 py-2 shadow-sm hover:bg-gray-200 rounded-lg text-base font-bold cursor-pointer' onClick={() => showSearchVideo()}>🔍 {s}</li>
                    )
                    }
                </ul>
            </div>
            }
        </div>
        {/* Middle section end */}

        {/* Right section start*/}
        <div className='col-span-1 flex items-center justify-end px-4'>
            <img src={EXPOLRE_ICON} className='w-10 mr-10'></img>
            <img alt='user-icon' src={USER_ICON} className='h-10 mr-3'></img>
        </div>
         {/* Right section end*/}

    </div>
  )
}

export default Header