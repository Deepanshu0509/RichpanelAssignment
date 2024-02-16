import React from 'react'
import { ChatBubbleIcon, EnvelopeOpenIcon, HomeIcon } from '@radix-ui/react-icons'
const Sidebar = () => {
  return (
    <div className='bg-blue-800 w-[5%]'>
        <div className='flex flex-col items-center justify-center h-20 hover:bg-white'>
            <HomeIcon className='text-white w-10 h-10'/>
        </div>
        <div className='flex flex-col items-center justify-center h-20 hover:bg-white'>
            <ChatBubbleIcon className='text-white w-10 h-10'/>
        </div>
        <div className='flex flex-col items-center justify-center h-20 hover:bg-white'>
            <EnvelopeOpenIcon className='text-white w-10 h-10'/>
        </div>
    </div>
  )
}

export default Sidebar
