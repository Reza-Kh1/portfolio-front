import { BsDeviceHdd, BsCamera, } from 'react-icons/bs'
import { MdBatteryCharging80 } from "react-icons/md"
import { FaMemory } from "react-icons/fa";
import { FaStar } from 'react-icons/fa'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import "./BoxSliderLoop.css";
import { Link } from 'react-router-dom';
import ImgTag from '../ImgTag/ImgTag';
import { useRef } from 'react';
export default function BoxSliderLoop(propw) {
    const respons = useRef(window.innerWidth)
    return (
        <>
            <div className="slider-swiper-site">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={respons.current < 777 ? 1 : 4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {propw.new.map((i) => (
                        <SwiperSlide key={i.id}>
                            <div key={i.id} className="box-slider-shop pb-2">
                                <Link to={`/shopping/${i.id}`}>
                                    <figure className="m-0">
                                        <ImgTag src={i.img} />
                                    </figure>
                                    <figcaption className="mt-1">
                                        <div className="title-slider-shop d-flex justify-content-between">
                                            <span className="me-2">{i.category}</span>
                                            <span className="ms-2">{i.star}<FaStar className="text-warning me-1" /></span>
                                        </div>
                                        <div className="desc-shop-slider mt-2">
                                            <span className="me-1">{i.name}</span>
                                            <ul className="p-0 d-flex justify-content-around my-3">
                                                {i.ram && <li className="d-flex flex-column align-items-center"><FaMemory className="fs-4 mb-2" />{i.ram}{'GB'}</li>}
                                                {i.hard && <li className="d-flex flex-column align-items-center"><BsDeviceHdd className="fs-4 mb-2" />{i.hard}{'GB'}</li>}
                                                {i.camera && <li className="d-flex flex-column align-items-center"><BsCamera className="fs-4 mb-2" />{i.camera}</li>}
                                                {i.bat && <li className="d-flex flex-column align-items-center"><MdBatteryCharging80 className="fs-4 mb-2" />{i.bat}</li>}
                                            </ul>
                                            <div className="price-single-shop">
                                                <span>{(i.price).toLocaleString()} تومان</span>
                                            </div>
                                        </div>
                                    </figcaption>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}
