import React from 'react'
import { USER_ICON } from '../utils/constants';

const SearchVideoResults = ({info}) => {
    const {snippet} = info;
    const {thumbnails,channelTitle,title} = snippet;
  return (
    <div className='my-4 mt-4 mx-10 flex border-b pb-4 shadow-sm'>
        <img alt='thumbnail' src={thumbnails.high.url} className='h-96 max-w-xl rounded-2xl'></img>
        <div className='ml-4'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <div className='flex mt-2'>
                <img src={USER_ICON} className='h-8 mr-2'></img>
                <p className='ml-2'>{channelTitle}</p>
            </div>
        </div>
    </div>
  )
}

export default SearchVideoResults