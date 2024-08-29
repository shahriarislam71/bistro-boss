import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import TItle from '../../../component/title/TItle';

const Category = () => {
    return (
        <section>
            <TItle subheading = {'---From 11:00am to 10:00pm---'}
                heading = {'ORDER ONLINE'}>
            </TItle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper max-w-[1196px] mx-auto "
            >
                <SwiperSlide><img src={slide1} alt="" /> <p className='text-center uppercase text-white text-2xl font-bold -mt-[30px]'>salad</p></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" /> <p className='text-center uppercase text-white text-2xl font-bold -mt-[30px]'>soup</p></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" /> <p className='text-center uppercase text-white text-2xl font-bold -mt-[30px]'>pizza</p></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" /> <p className='text-center uppercase text-white text-2xl font-bold -mt-[30px]'>dessert</p></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" /> <p className='text-center uppercase text-white text-2xl font-bold -mt-[30px]'>salad</p></SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;