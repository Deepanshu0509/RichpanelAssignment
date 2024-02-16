import React from 'react'

interface MessageBoxProps { 
    name: string;
    }

const MessageBox = ({name} : MessageBoxProps) => {
  return (
    <div className='p-3'>
      <input type="text" placeholder={`Message ${name}`} className='flex-1 w-full rounded-md p-2 border border-blue-900 items-end'/>
    </div>
  )
}

export default MessageBox
