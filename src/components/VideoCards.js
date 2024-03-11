import React from 'react'
import { valueConvertor } from '../utils/constants'
import moment from 'moment'
// import { USER_ICON } from '../utils/constants';

const VideoCards = ({info}) => {
  return (
    <div className='max-w-sm m-2 mr-2'>
        <img alt="thumbnail" src={info.snippet.thumbnails.medium.url} className='w-96 rounded-xl'></img>
        <h2 className='font-bold text-xl max-w-lg'>{info.snippet.title}</h2>
        <p className=''>{info.snippet.channelTitle}</p>
        <p className='mb-2 inline pr-2'>{valueConvertor(info.statistics.viewCount)} views</p>
        <p className='inline'>{moment(info.snippet.publishedAt).fromNow()}</p>
    </div>

    // <div className='flex justify-between m-2 flex-wrap my-4 mr-4'>
    //     {
    //     info.map(info => (
    //         <div key={info.id} className='max-w-sm'>
    //             <img alt="thumbnai" src={info.snippet.thumbnails.medium.url} className='w-96 rounded-xl'></img>
    //             <h2 className='font-bold text-xl max-w-lg'>{info.snippet.title}</h2>
    //             <p className=''>{info.snippet.channelTitle}</p>
    //             <p className='mb-4'>{Math.floor(info.statistics.viewCount/1000)}k</p>
    //             {/* Render other snippet properties */}
    //         </div>
    //   ))}
    // </div>
  )
}

export default VideoCards