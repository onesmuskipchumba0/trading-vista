import React from 'react'
import { FaStore } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';

function Navbar() {
    interface NavElement {
        name: string;
        href: string;
    }

    const navElements: NavElement[] = [
        {name: "Dashboard", href: "/dashboard"},
        {name: "Products", href: "/products"},
        {name: "Orders", href: "/orders"},
        {name: "Customers", href: "/customers"},
        {name: "Analytics", href: "/analytics"},
        {name: "Inventory", href: "/inventory"},
        {name:"Reports", href: "/reports"},
        {name: "Settings", href: "/settings"},
    ]
  return (
    <nav className='flex flex-row gap-4 itemms-center justify-center w-full p-4 bg-gradient-to-r from-teal-500 to-green-400 shadow-md rounded-lg'>
        <a href="/" className="flex items-center gap-2 text-gray-100 hover:text-blue-500 transition-colors duration-200 mr-auto">
            <FaStore className='text-3xl text-gray-100'/>
            <span className="text-lg font-bold text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text">Trading Vista</span>
        </a>
      {navElements.map((element, index) => (
        <a 
          key={index}
            href={element.href}
            className="text-gray-100 hover:text-blue-500 transition-colors duration-200 hover:bg-gray-100 p-4 rounded-lg font-semibold text-sm md:text-base lg:text-lg"
        >
          {element.name}
        </a>
      ))}
      <a href="https://github.com/onesmuskipchumba0" className='flex items-center justify-center'>
      <FaGithub className='text-3xl text-gray-100 hover:text-slate-800 transition-colors duration-200' />
      </a>
    </nav>
  )
}

export default Navbar
