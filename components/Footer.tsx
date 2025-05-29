import React from 'react'
import { FaGithub } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='flex flex-row items-center justify-center w-full p-4 gap-4 bg-gradient-to-r from-teal-500 to-green-400 shadow-md rounded-lg mt-4'>
        <div>

            <p className='text-gray-100 text-sm md:text-base lg:text-lg'>
                &copy; {new Date().getFullYear()} Trading Vista. All rights reserved.
            </p>
            <p className='text-gray-100 text-xs md:text-sm lg:text-base'>
                Built with ❤️ by Onesmus Kipchumba
            </p>
        </div>
    </div>
  )
}

export default Footer
