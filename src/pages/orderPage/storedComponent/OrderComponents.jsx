import CoverForMenu from '../../../component/coverFormenu/CoverForMenu';
import orderImage from '../../../assets/shop/banner2.jpg'
import useMenu from '../../../hooks/useMenu';
import { useEffect, useState } from 'react';
import ItemsList from '../itemsList/ItemsList';
import { useParams } from 'react-router-dom';


const OrderComponents = () => {
    const [catagoriesData] = useMenu([])
    const [data, setData] = useState([])
    const [category, setCategory] = useState('salad')
    const {type} = useParams()
    console.log(type)

    category === 'salad' & useEffect(() => {
        const selectedData = catagoriesData.filter(item => item.category === 'salad')
        setData(selectedData)
    }, [catagoriesData])

    const loadOrdersData = (items) => {
        const selectedData = catagoriesData.filter(item => item.category === items)
        setData(selectedData)
        setCategory(items)
    }
    console.log(data)
    return (
        <div>
            <CoverForMenu heading={'Shop now'} subheading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} maxwidth={'1196px'} height={'800px'} image={orderImage} margin={'230px'} headingSize={'88px'}></CoverForMenu>

            <div className="flex max-w-4xl justify-between  mx-auto mt-[130px] mb-[60px]">
                <button onClick={() => loadOrdersData('salad')} className='uppercase text-[24px] mr-[57px]'>Salad</button>
                <button onClick={() => loadOrdersData('pizza')} className='uppercase text-[24px] mr-[57px]'>Pizza</button>
                <button onClick={() => loadOrdersData('soup')} className='uppercase text-[24px] mr-[57px]'>soup</button>
                <button onClick={() => loadOrdersData('dessert')} className='uppercase text-[24px] mr-[57px]'>dessert</button>
                <button onClick={() => loadOrdersData('drinks')} className='uppercase text-[24px] '>drinks</button>
            </div>
            <div className='max-w-[1196px] mx-auto grid grid-cols-3 gap-10'>
                {
                    category ? data.map(item => <ItemsList key={item._id} item={item}></ItemsList>) : ""
                }
            </div>
        </div>
    );
};

export default OrderComponents;