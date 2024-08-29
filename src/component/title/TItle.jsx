import React from 'react';

const TItle = ({heading,subheading}) => {
    return (
        <div>
            <p className='text-center text-[#D99904] text-xl font-normal mb-[16px] '>{subheading}</p>
            <hr className='w-[424px] mx-auto h-[4px] bg-[#E8E8E8]' />
            <p className='text-center mt-[20px] text-[40px] uppercase font-normal mb-[24px]'>{heading}</p>
            <hr className='w-[424px] mx-auto h-[4px] bg-[#E8E8E8] ' />
        </div>
    );
};

export default TItle;