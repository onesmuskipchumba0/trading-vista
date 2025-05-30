"use client";
import React, { useState } from 'react'

function Chart() {
    const [timeFrame, setTimeFrame] = useState('month')
    const [selectedMonth, setSelectedMonth] = useState('1')
    const [selectedYear, setSelectedYear] = useState('2025')
    const [dataType, setDataType] = useState('products')

    const months = [
        { value: '1', label: 'January' },
        { value: '2', label: 'February' },
        { value: '3', label: 'March' },
        { value: '4', label: 'April' },
        { value: '5', label: 'May' },
        { value: '6', label: 'June' },
        { value: '7', label: 'July' },
        { value: '8', label: 'August' },
        { value: '9', label: 'September' },
        { value: '10', label: 'October' },
        { value: '11', label: 'November' },
        { value: '12', label: 'December' }
    ]

    const years = Array.from({ length: 5 }, (_, i) => 
        (new Date().getFullYear() - 2 + i).toString()
    )

    const selectClassName = "p-2.5 text-gray-700 bg-white border border-gray-300 hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg shadow-sm transition-all duration-200"
    
    return (
        <div className='flex flex-col bg-white rounded-xl shadow-lg w-[80%] max-w-4xl mx-auto my-8 p-6'>
            <h2 className='text-xl font-semibold text-gray-800 mb-6'>Data Analytics</h2>
            <div className='flex gap-4 mb-6 flex-wrap'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="time-filter" className='text-sm font-medium text-gray-600'>Time Period</label>
                    <select 
                        id="time-filter"
                        name="time-filter" 
                        className={selectClassName}
                        value={timeFrame}
                        onChange={(e) => setTimeFrame(e.target.value)}
                    >
                        <option value="month">Monthly</option>
                        <option value="year">Yearly</option>
                    </select>
                </div>

                {timeFrame === 'month' && (
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="month-filter" className='text-sm font-medium text-gray-600'>Month</label>
                        <select 
                            id="month-filter"
                            name="month-filter" 
                            className={selectClassName}
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                        >
                            {months.map(month => (
                                <option key={month.value} value={month.value}>
                                    {month.label}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <div className='flex flex-col gap-2'>
                    <label htmlFor="year-filter" className='text-sm font-medium text-gray-600'>Year</label>
                    <select 
                        id="year-filter"
                        name="year-filter" 
                        className={selectClassName}
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                    >
                        {years.map(year => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="data-type" className='text-sm font-medium text-gray-600'>Data Type</label>
                    <select 
                        id="data-type"
                        name="data-type" 
                        className={selectClassName}
                        value={dataType}
                        onChange={(e) => setDataType(e.target.value)}
                    >
                        <option value="products">Products</option>
                        <option value="orders">Orders</option>
                        <option value="customers">Customers</option>
                        <option value="inventory">Inventory</option>
                    </select>
                </div>
            </div>
            
            <div className='h-[400px] bg-gray-50 rounded-lg border border-gray-200'>
                {/* Chart content will go here */}
            </div>
        </div>
    )
}

export default Chart
