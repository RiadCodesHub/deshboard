
import React from 'react'
import hannah from '../assets/hannah.jpg'
import MeganClark from '../assets/MeganClark.jpg'
import Brandon from '../assets/Brandon.jpg'

const Table = () => {
   const data = [
    {name: 'Hannah Morgan',
     url: hannah,
     todo: 'Meeting schedule', 
     time: '1:24pm'},

     {name: 'Megan Clark',
      url: MeganClark,  
      todo: 'Update on marketing Campaign', 
      time: '2:30pm'},

      {name: 'Brandon Williams',
        url: Brandon,  
        todo: 'Meeting schedule', 
        time: '4:00pm'},

        {name: 'Brandon Williams',
          url: Brandon,  
          todo: 'Meeting schedule', 
          time: '6:00pm'}
   ]
  return (
    <div className='w-full flex flex-col gap-4'>
     <h2 className='text-[20px] font-bold text-gray-800'>Recent Emails</h2>
     <table className='w-full border-collapse'>
     <tbody>
      {data.map((item, index) => {
        return (
          <tr key={index}>
            <td className='flex items-center gap-4 p-2'>
              <img src={item.url} alt={item.name} className='w-[25px] h-[25px] rounded-full object-fill'/>
              <span>{item.name}</span>
            </td>
            <td className='p-2'>{item.todo}</td>
            <td className='p-2'>{item.time}</td>
          </tr>
        )
      }
      )}
     </tbody>
     </table>
   </div>
  )
}

export default Table