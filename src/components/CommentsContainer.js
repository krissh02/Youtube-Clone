import moment from 'moment'
import React from 'react'
import { valueConvertor } from '../utils/constants'

const CommentsContainer = ({comment}) => {
  return (
    <div className='mt-4 ml-2 max-w-2xl mb-2'>
      <div className='flex mt-3'>
        <img src={comment?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} className='rounded-full mr-3 h-12 mt-1'></img>
        <div className='flex flex-col'>
          <div>
            <p className='font-bold mr-2 inline'>{comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
            <p className='inline'>{moment(comment?.snippet?.topLevelComment?.snippet?.publishedAt).fromNow()}</p>
          </div>
          <p className='font-bold text-lg mb-1'>{comment?.snippet?.topLevelComment?.snippet?.textOriginal}</p>
          <div>
          </div>
          <div className='flex items-center justify-start'>
            <p className='mr-2'>👍 {valueConvertor(comment?.snippet?.topLevelComment?.snippet?.likeCount)}</p>
            <p className='mr-4'>👎</p>
            <p className='font-bold'>Reply</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsContainer