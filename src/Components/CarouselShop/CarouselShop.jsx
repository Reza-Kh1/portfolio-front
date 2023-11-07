import { useEffect, useState } from 'react';
import { Pagination, A11y, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgTag from '../ImgTag/ImgTag';
import "swiper/swiper-bundle.min.css";
export default function CarouselShop() {
    const [data, setData] = useState([])
    useEffect(() => {
        import('../../server').then(res => setData(res.carosulShop))
    }, [])
    return (
        <>
            <Swiper className='p-0'
                // install Swiper modules
                modules={[Pagination, A11y, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect='fade'
                loop={true}
                autoplay={{
                    delay: 3000
                }}
                pagination={{ clickable: true }}
            >
                {data.map((i) => (
                    <SwiperSlide key={i.id}>
                        <div className="carousel-top">
                            <figure className='position-relative'>
                                <ImgTag style={{ height: "85vh" }} src={i.img} />
                            </figure>
                            <figcaption>
                                <h4>{i.title}</h4>
                                <span>{i.text}</span>
                            </figcaption>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
