import React from 'react'

interface ConversationCardProps {
    name: string;
    type: string;
    review: string;
}

const ConversationCard = ({name, type, review} : ConversationCardProps) => {
    return (
        <div className='border p-4 hover:bg-gray-200'>
            <div className='flex justify-between'>
                <div className='flex items-center w-[10%]'>
                    <input type="checkbox" />
                </div>
                <div className='flex flex-col w-[80%]'>
                    <span className='font-semibold'>{name}</span>
                    <span className='text-sm'>{type}</span>
                </div>
                <div>
                    10m
                </div>
            </div>
            <div className='font-semibold'>Awesome Product</div>
            <div className='text-gray-500 text-sm'>{review}</div>
        </div>
    )
}

export default ConversationCard
