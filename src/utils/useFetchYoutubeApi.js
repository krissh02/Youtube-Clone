import React from 'react'
import { useState,useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from './constants'

const useFetchYoutubeApi = () => {
    const[videos,setVideos] = useState([])

  useEffect(()=>{
    getYoutubeApi();
  },[])

  const getYoutubeApi = async () =>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  }
  return videos;
}

export default useFetchYoutubeApi