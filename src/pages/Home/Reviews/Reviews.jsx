import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () =>{
        fetch('https://car-zone-server-0mahdi.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20">
            <SectionTitle
                subHeading="What our customers say about this template"
                heading={'Customer Support and Satisfaction'}>
            </SectionTitle>

            <Swiper
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide 
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-16">
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            <p className="py-8">{review.details}</p>

                            <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />

                        </div>
                    
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Reviews;