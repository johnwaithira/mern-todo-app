import React from 'react'

const Header = ({ title, description }) => {
    return (
        <div>
            <div className='py-2 px-3 sm:px-0 sm:py-10'>
                <h1 className='text-3xl font-bold'>{ title }</h1>
                <p className='text-gray-500'> {description} </p>
            </div>
        </div>
    )
}

export default Header

