import React from 'react';
import TItle from '../../../component/title/TItle';
import featureimg from '../../../assets/home/featured.jpg'
import '../feature/Feature.css'

const Feature = () => {
    return (
        <>
            <div className='setBackground pt-[8px] pb-[130px] mt-[130px]'>
                <TItle subheading={'---Check it out---'} heading={'FROM OUR MENU'}></TItle>

                <div className='flex flex-row max-w-[1196px] mx-auto gap-[68px] mt-[48px] items-center'>
                    <div>
                        <img className=' ' src={featureimg} alt="" />
                    </div>
                    <div>
                        <h1 className='text-white text-xl font-normal'>March 20, 2023</h1>
                        <h2 className='text-white text-2xl font-normal'>WHERE CAN I GET SOME?</h2>
                        <p className='text-[16px] font-normal text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='text-white rounded-[8px] border-b-[3px] mt-[24px] px-[30px] py-[10px]'>Read More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feature;