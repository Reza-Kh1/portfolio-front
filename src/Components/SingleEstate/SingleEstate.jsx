import { useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { MdLocationPin } from 'react-icons/md'
import { VscCheck } from "react-icons/vsc"
import './SingleEstate.css'
import "react-image-gallery/styles/css/image-gallery.css";
import LoopCartEstate from '../LoopCartEstate/LoopCartEstate'
import ImageGallery from 'react-image-gallery';
import { useState } from 'react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import WarningProblem from '../WarningProblem/WarningProblem';

export default function SingleEstate() {
    const response = useRef(window.innerWidth)
    const { estate } = useParams()
    const [slider, setSlider] = useState([])
    const [data, setData] = useState('');
    const [allData, setAllData] = useState([])
    useEffect(() => {
        import('../../server').then(res => setAllData(res.estateCart))
    }, [])
    const uploadData = () => {
        const filter = allData.filter((i) => i.id !== Number(estate))
        const gog = allData.find((i) => i.id === Number(estate))
        const finalyFilter = filter.filter((i) => i.forWhat === gog.forWhat)
        setData(gog)
        setSlider(finalyFilter)
    }

    useEffect(() => {
        uploadData()
    }, [estate, allData])
    return (
        <>
            <Header />
            <div className="single-estate">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shop-single d-flex justify-content-between align-items-center mb-4">
                                <div className="right-bread">
                                    {data && (<><Link to={'/'} className="text-info me-2">خانه</Link> / <Link to={'/estate/page/1'} className="text-info mx-2">املاک</Link> / <span className=" me-2">{data.title}</span> </>)}
                                </div>
                                <div className="left-bread">
                                    <WarningProblem />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="gallery-img-estate">
                                {data && <ImageGallery autoPlay={true} items={data.images} />}
                            </div>
                        </div>
                        {data && (<>
                            <div className="col-md-12">
                                <div className="desc-single-estate mt-4 pt-3">
                                    <div className="row">
                                        <div className="col-md-6 col-12 mb-3 mb-sm-0">
                                            <div className="desc-single-estate-right">
                                                <h4>اطلاعات </h4>
                                                <span>{data.title}</span>
                                                <span><MdLocationPin /> {data.location}</span>
                                                <span>{!data.forWhat ? 'رهن' : 'قیمت کل '} : {data.priceAll.toLocaleString()}</span>
                                                <span>{!data.forWhat ? 'اجاره' : 'قیمت هر متر '} : {data.pricePiece.toLocaleString()}</span>
                                                <span>متراژ زمین : {data.landSize}</span>
                                                <span>متراژ بنا :{data.homeSize}</span>
                                                <span>عمر بنا : {data.year}</span>
                                                <span>موقعیت : {data.position}</span>
                                                <span>منتشر کننده : {data.author}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="desc-single-estate-right">
                                                <h4>امکانات </h4>
                                                {data && data.skils.map((i) => (
                                                    <div key={i.title}>
                                                        <span>
                                                            <VscCheck /> {i.title}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-4 mb-3">
                                            <h4>توضیحات</h4>
                                            <p>{data && data.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <h4 className='mt-4 mb-0 mt-sm-5 me-3'>آگهی های مرتبط</h4>
                            </div>
                            <div className="col-md-12">
                                <div className="slider-swiper-site">
                                    <Swiper
                                        // install Swiper modules
                                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                                        spaceBetween={20}
                                        slidesPerView={response.current < 777 ? 1 : 3}
                                        navigation
                                        pagination={{ clickable: true }}
                                        scrollbar={{ draggable: true }}
                                    >
                                        {slider.map((i) => (
                                            <SwiperSlide key={i.id}><LoopCartEstate {...i} /></SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </>)}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}



