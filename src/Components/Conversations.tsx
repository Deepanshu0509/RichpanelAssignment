import React from 'react'
import Image from 'next/image'
import ConversationCard from './ConversationCard'
import { ReloadIcon, ListBulletIcon } from '@radix-ui/react-icons'
const Conversations = () => {
    return (
        <div className='max-w-96 w-[40%] border'>
            <div className='flex border p-3 items-center'>
                <ListBulletIcon className='w-[10%]'/>
                <h1 className='font-bold text-xl w-[80%]'>Conversations</h1>
                <button><ReloadIcon /></button>
            </div>
            <ConversationCard name="Deepanshu Kewalramani" review='Nice one. I would love to buy more' type='Facebook DM' />
            <ConversationCard name="Hiten Saxena" review='You can improve more' type='Facebook post' />
        </div>
    )
}

export default Conversations
