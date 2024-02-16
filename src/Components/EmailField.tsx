import React from 'react'

const EmailField = () => {
    return (
        <div className='mb-4'>
            <label htmlFor="email" className='block mb-1'>Email</label>
            <input type="email" id='email' className='p-1 border rounded-sm w-72'/>
        </div>
    )
}

export default EmailField
