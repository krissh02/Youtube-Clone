import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessage = useSelector((store) => store.chat.messages);
    useEffect(()=>{
        const i = setInterval(() =>{
            dispatch(addMessage({
                name:"krishna Sabat",
                message:"hii"
            }))
        },2000);

        return () =>{
            clearInterval(i);
        }
    },[])
  return (
    <div className='border border-black border-solid ml-3 mb-2 h-[595px] rounded-xl p-2 pl-4 overflow-y-scroll shadow-lg bg-slate-100'>
        {
            chatMessage.map((m,i) => <ChatMessage key={i} name={m.name} message={m.message}/> )
        }
    </div>
  )
}

export default LiveChat