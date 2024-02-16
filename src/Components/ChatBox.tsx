import React from 'react'
import Image from 'next/image';
import MessageBubble from './MessageBubble';
import MessageBox from './MessageBox';
interface ChatBoxProps {
    name: string;
}

const ChatBox = ({ name }: ChatBoxProps) => {
    return (
        <div className='border w-[50%]'>
            <div className='bg-white font-bold border p-4'>{name}</div>
            <div className='bg-gray-200 flex flex-col h-[90vh]'>
                <div className='p-5'>
                    <div className='flex flex-row gap-2'>
                        <span><Image src={"/Hero.jpg"} width={30} height={30} alt='dp' className='rounded-full' /></span>
                        <span><MessageBubble text="Is it in stock right now?" /></span>
                    </div>
                    <div>
                        <span className='text-xs text-gray-600 ml-4'>{name} - Mar 05, 2:22 AM</span>
                    </div>
                </div>
                <div className='p-5 flex flex-1 flex-col items-end'>
                    <div className='flex flex-col gap-2'>
                        <span><MessageBubble text="We have three left in stock!" /></span>
                        <div className='flex gap-2'>
                            <span><MessageBubble text="If you order before 8PM we can shift it today." /></span>
                            <span><Image src={"/Deepanshu_Professional_Pic_Yellow_BG.jpg"} width={30} height={30} alt='dp' className='rounded-full' /></span>
                        </div>

                    </div>
                    <div>
                        <span className='text-xs text-gray-600 mr-8'>Deepanshu - Mar 05, 2:23 AM</span>
                    </div>
                </div>
                <MessageBox name={name}/>
            </div>
            
        </div>
    )
}

export default ChatBox
