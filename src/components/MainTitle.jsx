import React from 'react';

const MainTitle = ({title, subTitle}) => {
  return (
    <div className="w-full text-center mt-10 lg:mt-20 mx-0 mb-12 px-4 lg:px-0 font-body">
        <div className="text-2xl lg:text-[2rem] font-semibold text-black mb-2">{title}</div>
        <div className="text-sm lg:text-md text-gray-600">{subTitle}</div>
    </div>
  )
}

export default MainTitle
