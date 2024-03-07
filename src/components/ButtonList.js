import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list = ["All","Game Shows","Live","News","Enterainment","Cricket","Music","Videos","Kabaddi","Indian Idol","Kapil Sharma","Data Structures"]
  return (
    <div className='flex'>
        {
            list.map((list) => 
                <Button key={list} name={list}/>
            )
        }
    </div>
  )
}

export default ButtonList