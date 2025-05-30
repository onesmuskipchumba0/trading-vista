import React from 'react'
import { BsBoxSeam } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { MdInventory } from 'react-icons/md'
import { AiOutlineFileExcel } from 'react-icons/ai'

function QuickActions() {
  return (
    <div className='flex flex-col items-center justify-center pt-5 mt-5 pb-5 gap-5'>
      <button className='p-5 bg-purple-600 text-white rounded-md flex items-center gap-2'>
        <BsBoxSeam size={20} />
        Add New Products
      </button>
      <button className='p-5 bg-teal-600 text-white rounded-md flex items-center gap-2'>
        <FiUsers size={20} />
        Add New Customers
      </button>
      <button className='p-5 bg-orange-600 text-white rounded-md flex items-center gap-2'>
        <MdInventory size={20} />
        Add New Inventory
      </button>
      <button className='p-5 bg-slate-600 text-white rounded-md flex items-center gap-2'>
        <AiOutlineFileExcel size={20} />
        Export to excel
      </button>
    </div>
  )
}

export default QuickActions
