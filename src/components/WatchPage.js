import React, { useEffect, useState,useRef } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import VideoInfo from './VideoInfo';
import useFetchYoutubeVideoDetails from '../utils/useFetchYoutubeVideoDetails';
import RecommendVideo from './RecommendVideo';
import useFetchYoutubeApi from '../utils/useFetchYoutubeApi';
import LiveChat from './LiveChat';


const WatchPage = () => {
  // console.log(videoDetails[0]?.snippet);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const videoDetails = useFetchYoutubeVideoDetails();
    const recommend = useFetchYoutubeApi();
    console.log(recommend);

    useEffect(()=>{
        dispatch(closeMenu());
    })

  return (
    <div className='mx-32 mt-8 flex'>
      <div>
        <iframe width="1050" height="595" src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
        title="YouTube video player" frameBorder="0" allow="accelerometer;microphone;screen-wake-lock; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen  className='rounded-xl'></iframe>
        {/* <h1>{videoDetails.snippet.title}</h1> */}
        <VideoInfo key ={videoDetails.id} details={videoDetails[0]}/>
      </div>
      {/* Recommend Section */}
      <div>
        <LiveChat />
        {
          recommend.map((r) => <RecommendVideo key={r.id} recommend = {r}/>)
        }
      </div>
    </div>
  )
}

export default WatchPage