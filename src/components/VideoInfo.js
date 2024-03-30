import React from 'react'
import { DISLIKE_ICON, DOWNLOAD_ICON, LIKE_ICON, SHARE_ICON, USER_ICON, valueConvertor } from '../utils/constants'
import moment from 'moment';
import useFetchYoutubeCommentDetails from '../utils/useFetchYoutubeCommentDetails';
import CommentsContainer from './CommentsContainer';

const VideoInfo = ({details}) => {
    console.log(details);
    const commentInfo = useFetchYoutubeCommentDetails();
  return (
    <div className='p-2'>
        <h1 className='text-2xl font-bold'>{details?.snippet?.title}</h1>
        <div className='flex justify-between mt-2'>
            <div className='flex items-center'>
                <img src={USER_ICON} className='h-8'></img>
                <div className='flex flex-col ml-3 mr-4'>
                    <p className='text-xl font-bold'>{details?.snippet?.channelTitle}</p>
                    <p>1M subscribers</p>
                </div>
                <button className='py-2 px-4 rounded-full bg-red-600 text-white ml-4 text-lg font-bold'>Subscribe</button>
            </div>
            <div className='flex justify-between'>
                <div className='text-black border border-black font-bold rounded-full mx-2 flex items-center'>
                    <p className='px-6 text-lg'><img src={LIKE_ICON} className='w-6 mr-2 inline'></img>{valueConvertor(details?.statistics?.likeCount)} | <img src={DISLIKE_ICON} className='w-8 ml-2 inline'/></p>
                </div>
                <div className='  text-black border border-black font-bold rounded-full mx-2 flex items-center'>
                    <p className='py-3 px-6 text-lg'><img src={SHARE_ICON} className='w-8 mr-2 inline'></img>Share</p>
                </div>
                <div className='  text-black border border-black font-bold rounded-full mx-2 flex items-center'>
                    <p className='py-3 px-6 text-lg'><img src={DOWNLOAD_ICON} className='w-8 mr-2 inline'></img>Download</p>
                </div>
            </div>
        </div>
        <div className='border mt-4 rounded-lg p-2 bg-gray-200 text-lg font-bold'>
            <p className='mr-2 inline'>{valueConvertor(details?.statistics?.viewCount)} views</p>
            <p className='ml-2 inline'>{moment(details?.snippet?.publishedAt).fromNow()}</p>
            <p>...more</p>
        </div>
        <div>
            <h1 className='font-bold text-xl my-3'>{details?.statistics?.commentCount} Comments</h1>
            {
                commentInfo.map((c)=> <CommentsContainer key={c.id} comment={c}/> )
            }  
        </div>
        
    </div>
  )
}

export default VideoInfo