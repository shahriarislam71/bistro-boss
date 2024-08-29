import TItle from '../../../component/title/TItle';
import MenusItem from './MenusItem';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [catagoriesData] = useMenu([])
    console.log(catagoriesData)
    const desiredData = catagoriesData.filter(item => item.category === 'salad')

    
    // console.log(catagoriesData)
    return (
        <>
            <TItle subheading={'---Check it out---'} heading={'From our Menu'}></TItle>
            <div className='max-w-[1196px] mx-auto md:grid grid-cols-2 gap-10'>
                  {
                    desiredData.map(item=><MenusItem key={item._id} item = {item}></MenusItem>)
                  }
            </div>
            <Link to={`/shop/${'salad'}`}><button className='block mx-auto text-xl font-normal px-[30px] py-[20px] text-white mb-[75px] bg-[#BB8506] rounded'>Order Now</button></Link>
        </>
    );
};

export default Menu;