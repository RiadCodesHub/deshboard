import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faClipboardCheck, faClipboard, faNewspaper} from '@fortawesome/free-solid-svg-icons'

const listItems = [
    {id:1 ,icon:<FontAwesomeIcon icon= {faNewspaper} />, todo: 'Run payroll', schedule : 'mar 4 at 6:00 PM'},
    {id:2 ,icon:<FontAwesomeIcon icon= {faClock} />, todo: 'Review time of request', schedule : 'mar 4 at 6:00 PM'},
    {id:3 ,icon:<FontAwesomeIcon icon= {faClipboard} />, todo: 'Sign board resulation', schedule : 'mar 4 at 6:00 PM'},
    {id:4 ,icon:<FontAwesomeIcon icon= {faClipboardCheck} />, todo: 'Finish onboarding Tony', schedule : 'mar 4 at 6:00 PM'}
]

const TodoList = () => {
  return (
    <div className='flex flex-col w-full space-y-2  justify-start items-start '>
      <div>
      <h1 className='text-[20px] font-bold'>Your todo list</h1>
      <ul>
        { listItems.map((item) => (
          <li key={item.id} className='flex items-center gap-4 py-2'>
            <div className='w-[40px] h-[40px] flex items-center justify-center text-sm text-white bg-black rounded-xl'>
              {item.icon}
              </div>
            <div className='flex flex-col '>
              <span className='text-[16px] font-bold'>{item.todo}</span>
              <span className='text-[12px] text-gray-600'>{item.schedule}</span>
            </div>
          </li>            
        ))}
      </ul>
      </div>
          <div className='flex flex-col items-start w-fit rounded-xl px-2 py-2 bg-black'>
            <h2 className='text-white text-[16px] font-semibold ml-6 mb-2'>Board meeting</h2>
            <div className='flex items-center gap-3'>
              <span className='bg-green-800 w-[12px] h-[12px] rounded-full'></span>
              <h2 className="text-white">Feb 22 at 6:00PM</h2>
            </div>
            <p className='text-white text-sm font-light w-[80%] ml-6'>You have been invited to join this meeting</p>
          </div>
    </div>
  )
}

export default TodoList