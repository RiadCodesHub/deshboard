import React from 'react'

const StatusBox = () => {
  return (
    <div className='bg-black h-fit text-white p-6 rounded-xl flex flex-col gap-2 w-full'>
        <div className=''>
            <h2 className='text-[20px] font-bold'>Formation status</h2>
            <p className='text-sm font-light text-white'>In Pogress</p>
        </div>
        <div className="w-full h-[20px] bg-gray-700 rounded-full ovrflow-hidden">
  <span className="block w-3/4 h-full bg-white rounded-full"></span>
</div>
   <div className='flex flex-col items-center justify-center'>
    
    <h2 className='text-[16px] font-semibold'>Estimated Prosessing</h2>
    <p className='text-[12px] text-gray-300 font-light'>4-5 business days</p>
   <div className='flex items-center justify-center w-full mt-4 '>
   <button className='bg-white text-black w-fit px-6 py-2 transition hover:bg-gray-200 rounded-xl font-semibold '>View Status</button>
   </div>
   </div> 
   </div>
  )
}

export default StatusBox