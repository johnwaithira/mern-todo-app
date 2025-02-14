import React from 'react'
import { Link } from 'react-router-dom'
import { menuOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Nav = () => {
  return (
    <div className='flex justify-between items-center py-5 px-3 '>
        <div>
            <Link className="font-bold font-mono text-2xl" to="/">MERN TODO</Link>
        </div>
        <div className='hidden sm:block'>
            <ul>
                <Link className='px-2 ' to="/about">About</Link>
                <Link className='px-2' to="/projects">More projects</Link>
            </ul>
        </div>
        <div className=' bg-gray-200  rounded-lg px-2 cursor-pointer sm:hidden'>
             <IonIcon className='text-4xl' icon={menuOutline} />
        </div>
    </div>
  )
}

export default Nav