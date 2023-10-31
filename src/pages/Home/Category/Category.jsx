import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slide1 from '../../../assets/slider/1.jpg'
import slide2 from '../../../assets/slider/2.jpg'
import slide3 from '../../../assets/slider/3.jpg'
import slide4 from '../../../assets/slider/4.jpg'
import slide5 from '../../../assets/slider/5.jpg'
import slide6 from '../../../assets/slider/6.jpg'
import slide7 from '../../../assets/slider/7.jpg'
import slide8 from '../../../assets/slider/8.jpg'
import slide9 from '../../../assets/slider/9.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        
      <section>
        <SectionTitle 
        subHeading={"Discover the Best Models on the Market"}
        heading={"Amazing Car Collection"}
        ></SectionTitle>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-8 h-64"
        >
            <SwiperSlide>
                <img src={slide1} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide6} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide7} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide8} alt=''/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide9} alt=''/>
            </SwiperSlide>
        </Swiper>
      </section>
    
    );
};

export default Category;