import React, { useState, useEffect } from 'react'
import { faCalendar, faMessage, faBell, faChevronDown, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Greetings from './utils/greetings'


const Header = () => {

const [desktop , setDesktop] = useState(window.innerWidth >= 840)

useEffect(() => {
  const handleResize = () => {
    setDesktop(window.innerWidth >= 840);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }
})

const Profile = () => {
  return (
    <div className='flex gap-4 items-center'>
     <img src='https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww' 
          alt='profile' className='w-[50px] h-[50px] rounded-full' />
     <div className='group flex items-center gap-2 flex-col relative cursor-pointer'>
      <span><FontAwesomeIcon icon={faChevronDown} className='font-bold'/></span>
     <div className='opacity-0 w-[100px] absolute top-[40px] right-0 bg-white px-4 py-2 shadow-md rounded-md transition-opacity duration-300 delay-100 group-hover:opacity-100'>
      <button className='bg-red-600 w-full px-1 py-1 rounded-md text-white font-semibold cursor-pointer hover:bg-red-500'>Log Out</button>
     </div>
     </div>
   </div>
  )
}

const Links = () => {
   return (
    <div className='flex gap-6'>
    <span>
        <a href=""><FontAwesomeIcon icon={faCalendar} className='text-[16px]'/></a>
    </span>
    <span>
        <a href=""><FontAwesomeIcon icon={faMessage} className='text-[16px]' /></a>
    </span>
    <span>
        <a href=""><FontAwesomeIcon icon={faBell} className='text-[16px]' /></a>
    </span>
    </div>
   )
}

const MobileHeader = () => {
  return (
    <div className='flex w-full items-center max-h-[60px]  px-3 py-3 justify-end bg-slate-300 shadow-md transition-all duration-300'>
      <div className='gap-10 flex items-center justify-center'>
      <div className='flex gap-6'>
      <Links />
    </div>
       <Profile />
      </div>
    </div>
  )
}

const DesktopHeader = () => {

return(

  <div className=" flex items-center shadow-md   justify-between h-[60px]  w-full px-4 py-3">
  <div>
  <h1 className="text-[28px] font-bold flex items-center gap-2"><Greetings name="James" /></h1>
  </div>
  <div className="flex gap-6 items-center">
    <Links />
    <Profile />
  </div>
</div>
)
}
 
return (
<div className='w-full transition-all duration-300'> 
  { desktop ? <DesktopHeader /> : <MobileHeader />}
</div>
)
  
}

export default Header