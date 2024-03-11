import React from 'react'
import { valueConvertor } from '../utils/constants'
import moment from 'moment'

const RecommendVideo = ({recommend}) => {
  return (
    <div className='flex ml-3 mr-8 mb-2'>
        <img src={recommend?.snippet?.thumbnails.medium.url} className='h-36 max-w-64 rounded-lg'></img>
        <div className='pl-2'>
            <p className='font-bold text-base mb-1'>{recommend?.snippet?.title}</p>
            <p>{recommend?.snippet?.channelTitle}</p>
            <div>
                <p className='inline mr-3'>{valueConvertor(recommend?.statistics?.viewCount)} views</p>
                <p className='inline'>{moment(recommend?.snippet?.publishedAt).fromNow()}</p>
            </div>
        </div>
    </div>
  )
}

export default RecommendVideo