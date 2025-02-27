import React from 'react'

export default function HistoryRow({title, text, icon, date, time}) {
  return (
    <div className='w-full h-[50px] p-2 flex flex-row items-center mb-5'>
    <div className="h-[40px] w-[40px] rounded-xl bg-white shadow-[0_0_20px_10px_rgba(59,130,246,0.5)] flex items-center justify-center">
        {icon}
    </div>
      <div className='ml-4 flex flex-col'>
        <p className='text-sm text-black font-semibold'>{title}</p>
        <p className='text-[#71717A] text-xs font-normal'>{text}</p>
      </div>
      <div className='ml-auto justify-end items-end justify-items-end'>
        <p className='text-xs text-black font-semibold'>{date}</p>
        <p className='text-xs text-[#71717A] font-normal'>{time}</p>
      </div>
    </div>
  )
}
