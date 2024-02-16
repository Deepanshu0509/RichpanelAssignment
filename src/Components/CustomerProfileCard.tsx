import React from 'react'
import Image from 'next/image';
interface CutomerProfileCardProps {
    name: string;
    onlineStatus: boolean;
    profilePhotoUrl: string;
    contactNumber: string;
    }

const CustomerProfileCard = ({name, onlineStatus, profilePhotoUrl, contactNumber}: CutomerProfileCardProps) => {
  return (
    <div className='border max-w-96 flex flex-col items-center p-6 gap-1'>
      <Image src={profilePhotoUrl} alt="dp" width={80} height={80} className='rounded-full'/>
        <h1 className='font-semibold'>{name}</h1>
      <div className='text-gray-500 mb-3'>{onlineStatus ? <span>Online</span> : <span>Offline</span>}</div> 
      <div className='flex gap-3'>
        <button>Call</button>
        <button>Profile</button>
      </div>
    </div>
  )
}

export default CustomerProfileCard
