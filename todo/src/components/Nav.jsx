import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { menuOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false)



  return (
    <div className='relative'>
      <div className='flex justify-between items-center py-5 px-3 '>
        <div>
          <Link onClick={ ()=> setIsOpen(false) } className="font-bold font-mono text-2xl" to="/">MERN TODO</Link>
        </div>
        <div className='hidden sm:block'>
          <ul>
            <Link className='px-2 ' to="/about">About</Link>
            <Link className='px-2' to="/projects">More projects</Link>
          </ul>
        </div>
        <div className=' bg-gray-100  rounded-lg px-2 cursor-pointer sm:hidden' aria-controls='mobile-menu' onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen ? "true" : "false"}>
          <IonIcon className='text-4xl' icon={menuOutline} />
        </div>
      </div>
      {
        isOpen && (
          <div id="mobile-menu" className='sm:hidden bg-white h-[100vh] absolute left-0 w-full z-50 transition-transform duration-[3000ms] ease-in-out '>
            <ul className='flex flex-col px-5 pt-5 h-full'>
              <Link onClick={ ()=> setIsOpen(false) } className='px-2 pb-3' to="/about">About</Link>
              <Link onClick={ ()=> setIsOpen(false) } className='px-2 pb-3' to="/projects">More projects</Link>
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default Nav