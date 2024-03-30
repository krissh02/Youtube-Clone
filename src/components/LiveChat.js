import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
    const [liveMessage,setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessage = useSelector((store) => store.chat.messages);
    useEffect(()=>{
        const i = setInterval(() =>{
            dispatch(addMessage({
                name:generateRandomName(),
                message:makeRandomMessage(20),
            }))
        },1500);

        return () =>{
            clearInterval(i);
        }
    },[])
  return (
    <>
        <div className='border border-black border-solid ml-3 h-[535px] rounded-t-xl p-2 pl-4 overflow-y-scroll shadow-lg bg-slate-100 flex flex-col-reverse'>
            {
                chatMessage.map((m,i) => <ChatMessage key={i} name={m.name} message={m.message}/> )
            }
        </div>
        <form className='border border-black ml-3 rounded-b-xl p-2 h-[60px] flex justify-center mb-6' onSubmit={(e)=> {
            e.preventDefault();
            dispatch(addMessage({
                name:"Krishna Sabat",
                message:liveMessage,
            }))
            setLiveMessage("");
        }}>
            <input type='text' placeholder='Chat...' className='w-96 px-3 rounded-full bg-gray-200 border border-gray-100 border-solid placeholder:text-black text-lg' value={liveMessage} onChange={(e)=>{
                setLiveMessage(e.target.value);
            }}></input>
            <button className='px-5 ml-4 bg-green-600 rounded-full text-lg font-bold text-white'>Send</button>
        </form>
    </>
  )
}

export default LiveChat