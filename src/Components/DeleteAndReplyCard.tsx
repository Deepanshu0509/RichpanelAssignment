import React from 'react'

const DeleteAndReplyCard = () => {
    return (
        <div className='border max-w-96 max-h-64 flex flex-col items-center rounded-3xl p-6'>
            <h1 className='text-lg font-semibold m-1'>Facebook Page Integration</h1>
            <h1 className='text-lg font-semibold m-1'>Integrated page: Amazon business</h1>
            <button className='bg-red-600 text-white p-2 m-2 w-72 rounded-md'>Delete Integration</button>
            <button className='bg-blue-800 text-white p-2 m-2 w-72 rounded-md'>Reply to Messages</button>
        </div>
    )
}

export default DeleteAndReplyCard
