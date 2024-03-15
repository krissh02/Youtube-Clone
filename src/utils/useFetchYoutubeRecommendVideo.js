import React from 'react'
import { useState,useEffect } from 'react';
import { YOUTUBE_SUGGESTION_VIDEO_URL } from './constants';
import { useParams } from 'react-router-dom';
import useFetchYoutubeApi from './useFetchYoutubeApi';


const useFetchYoutubeRecommendVideo = () => {
    const [recommend, setRecommend] = useState([]);
    const video = useFetchYoutubeApi();
    useEffect(()=>{
        FetchRecommend();
    },[])
    const FetchRecommend = async () =>{
        const data = await fetch(YOUTUBE_SUGGESTION_VIDEO_URL+video?.snippet?.categoryId);
        const json = await data.json();
        setRecommend(json);
    }
  return recommend;
}

export default useFetchYoutubeRecommendVideo