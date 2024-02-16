import React from 'react'

interface CustomerDetailsCardProps {
    email: string,
    firstname: string,
    lastname: string
}

const CustomerDetailsCard = ({email, firstname, lastname}: CustomerDetailsCardProps) => {
  return (
    <div className='border max-w-96 flex flex-col rounded-2xl p-6 gap-2 m-3'>
      <h1 className='text-lg font-semibold'>Customer Details</h1>
      <div className='flex justify-between'>
        <span>Email</span>
        <span>{email}</span>
      </div>
      <div className='flex justify-between'>
        <span>Firstname</span>
        <span>{firstname}</span>
      </div>
      <div className='flex justify-between'>
        <span>Lastname</span>
        <span>{lastname}</span>
      </div>
      <button className='mr-auto text-blue-700 font-semibold'>View more details</button>
    </div>
  )
}

export default CustomerDetailsCard
