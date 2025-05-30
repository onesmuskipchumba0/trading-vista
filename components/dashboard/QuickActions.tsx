import React from 'react'

function QuickActions() {
  return (
    <div  className='flex flex-col items-center justify-center pt-5 mt-5 pb-5 gap-5'>
      <button className='p-5 bg-purple-600 text-white rounded-md '>Add New Products</button>
      <button className='p-5 bg-teal-600 text-white rounded-md'>Add New Customers</button>
      <button className='p-5 bg-orange-600 tex</svg>t-white rounded-md'>Add New Inventory</button>
      <button className='p-5 bg-slate-600 text-white rounded-md'>Export to excel</button>
    </div>
  )
}

export default QuickActions
