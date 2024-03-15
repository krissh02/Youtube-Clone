import React from 'react'
import { USER_ICON } from '../utils/constants'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center mb-2'>
        <img alt='user-icon' src={USER_ICON} className='h-10 mr-2'></img>
        <p className='mr-2'>{name}</p>
        <p>{message}</p>
    </div>
  )
}

export default ChatMessage