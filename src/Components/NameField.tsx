import React from 'react'

const NameField = () => {
  return (
    <div className='mb-4'>
        <label htmlFor="name" className='block mb-1'>Name</label>
        <input type="text" id='name' className='p-1 border rounded-sm w-72'/>
    </div>
  )
}

export default NameField
