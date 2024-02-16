import React from 'react'

interface MessageBubbleProps {
    text: string;
}

const MessageBubble = ({text} : MessageBubbleProps) => {
  return (
    <div className='p-2 bg-white border rounded-xl max-w-80 text-sm text-gray-700 font-semibold'>
      {text}
    </div>
  )
}

export default MessageBubble
