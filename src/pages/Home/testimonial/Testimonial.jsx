import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import TItle from '../../../component/title/TItle';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';

const Testimonial = () => {
    const [ratingsData, setRatingsData] = useState([])
    useEffect(() => {
        fetch('https://bistro-boss-server-mauve-nine.vercel.app/review')
            .then(res => res.json())
            .then(data => setRatingsData(data))
    }, [])
    return (
        <div>
            <TItle subheading={'---What Our Clients Say---'} heading={'Testimonial'}></TItle>
            <div className='max-w-[1196px] mx-auto'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        ratingsData.map(items => <SwiperSlide key={items._id}>
                            <Rating className='block mx-auto'
                                style={{ maxWidth: 180 }}
                                value={items.rating}
                                readOnly
                            />
                            <p className='text-center max-w-5xl mx-auto'>{items.details}</p>
                            <h1 className='text-center text-[#CD9003] text-xl font-normal'>{items.name}</h1>
                        </SwiperSlide>)
                    }
                </Swiper>

            </div>

        </div>
    );
};

export default Testimonial;