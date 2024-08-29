import React from 'react';

const MenusItem = ({item}) => {
    console.log(item)
    return (
        <div className='p-2 md:p-0 flex flex-row gap-5'>
            <div>
                <img style={{borderRadius : '0px 200px 200px 200px'}} className='w-[118px] bg-[#D9D9D9] h-[107px]' src={item.image} alt="" />
            </div>
            <div>
                <h1 className='text-[20px] font-normal'>{item.name} ..........</h1>
                <p className='text-[16px] font-normal'>{item.recipe}</p>
            </div>
            <div>
                <p className='text-[#BB8506] text-[20px] font-normal'>${item.price}</p>
            </div>
        </div>
    );
};

export default MenusItem;