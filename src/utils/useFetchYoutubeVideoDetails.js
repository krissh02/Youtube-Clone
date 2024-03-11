import React from 'react'
import { useEffect,useState } from 'react';
import { YOUTUBE_VIDEO_DETAILS } from './constants';
import { useSearchParams } from 'react-router-dom';

const useFetchYoutubeVideoDetails = () => {
    const [videoInfo,setVideoInfo] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(()=>{
        VideoDetails();
      },[])
      const VideoDetails = async () => {
        const data = await fetch(YOUTUBE_VIDEO_DETAILS+searchParams.get("v"));
        const json = await data.json();
        // console.log(json.items[0]);
        setVideoInfo(json.items);
      }

  return videoInfo;
}

export default useFetchYoutubeVideoDetails