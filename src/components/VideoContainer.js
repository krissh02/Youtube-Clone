import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';
import useFetchYoutubeApi from '../utils/useFetchYoutubeApi';

const VideoContainer = () => {
  const videos = useFetchYoutubeApi();
  return (
    <div className='flex flex-wrap'>
       { videos.map(video => <Link to={"watch?v="+video.id} key={video.id}><VideoCards info={video} /></Link> )
       }
    </div>
  )
}

export default VideoContainer