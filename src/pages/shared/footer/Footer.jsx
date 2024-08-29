import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='grid grid-cols-2 text-center'>
                <div className='bg-[#1F2937] text-white py-[97px]'>
                    <h1 className='pb-[24px]'>CONTACT US</h1>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='bg-[#111827] text-white py-[97px]'>
                    <h1 className='pb-[24px]'>Follow US</h1>
                    <p>Join us on social media</p>
                </div>
            </div>
            <div className='bg-[#151515] text-center py-[17px] text-white'>
                <h1>Copyright © CulinaryCloud. All rights reserved.</h1>
            </div>
        </>
    );
};

export default Footer;