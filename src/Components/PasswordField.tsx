import React from 'react'

const PasswordField = () => {
    return (
        <div className='mb-4'>
            <label htmlFor="password" className='block mb-1'>Password</label>
            <input type="password" id='password' className='p-1 border rounded-sm w-72'/>
        </div>
    )
}

export default PasswordField
