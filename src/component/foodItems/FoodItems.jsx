import React from 'react';
import useMenu from '../../hooks/useMenu';
import MenusItem from '../../pages/shared/menu/MenusItem';
import { Link } from 'react-router-dom';

const FoodItems = ({itemsType}) => {
    const [catagoriesData] = useMenu([])
    const data = catagoriesData.filter(items=>items.category === itemsType)
    console.log(data)
    return (
        <div>
            <div className='max-w-[1196px] mx-auto md:grid grid-cols-2 mt-[105px] gap-10 mb-[55px]'>
                  {
                    data.map(item=><MenusItem key={item._id} item = {item}></MenusItem>)
                  }
            </div>
            <Link to={`/shop/${itemsType}`}><button className='block mx-auto text-xl font-normal px-[30px] py-[20px] text-white mb-[75px] bg-[#BB8506] rounded'>Order Now</button></Link>
        </div>
    );
};

export default FoodItems;