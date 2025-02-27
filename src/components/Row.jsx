import React from 'react';

export default function Row({ text, pills = [] }) {
  return (
    <div className='h-[50px] w-full bg-[#F7F7FF] mb-5 rounded-full flex items-center px-7 gap-5 shadow-md'>
      {/* Title */}
      <p className='text-black font-semibold text-sm pr-28'>{text}</p>

      {/* Pills */}
      <div className='flex gap-3'>
        {pills.map((pill, index) => (
          <Pill key={index} text={pill.text} bgColor={pill.bgColor} />
        ))}
      </div>
    </div>
  );
}

// Pill Component
const Pill = ({ text, bgColor }) => {
  return (
    <div className={`w-[95px] h-[19px] rounded-full flex items-center justify-center text-xs font-semibold text-black shadow-md`} 
    style={{ backgroundColor: bgColor }}>
      {text}
    </div>
  );
};
