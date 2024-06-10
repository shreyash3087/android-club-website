import React from 'react'

const MemberCard = () => {
  return (
    <div className='w-60 p-5  mr-5'>
        <img
        src="https://th.bing.com/th/id/OIP.ZwOx7ZVPStgQ6ugNN9AMBQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        className='rounded-full'
        />
        <p className='font-semibold text-lg mt-2'>Name</p>
        <p>Designation</p>
    </div>
  )
}

export default MemberCard
