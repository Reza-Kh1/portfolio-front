import { Link } from "react-router-dom"
import { FaStar } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import ButtonBuy from "../ButtonBuy/ButtonBuy"
import { VscGitCompare } from 'react-icons/vsc'
import { BiHappyHeartEyes } from 'react-icons/bi'
import { BsArrowLeft } from 'react-icons/bs'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TimerOffer from '../../Components/TimerOffer/TimerOffer';
import './LoopCartShop.css'
import { useEffect, useRef, useState } from "react"
import ImgTag from "../ImgTag/ImgTag"
export default function LoopCartShop({ data }) {
    const [allData, setAllData] = useState([])
    const refWidth = useRef(window.innerWidth)
    useEffect(() => {
        const gog = [...data]
        setAllData(gog.filter((i) => i.toggle === 'offer'))
    }, [data])
    return (
        <>
            {allData && (
                <div className="slider-swiper-site">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={refWidth.current < 777 ? 1 : 4}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide>
                            <div className="off-title-cart">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h3 className='d-inline-block ms-2 fs-sm-4 fs-5'>تخفیف های این هفته</h3>
                                        <span className='imogy-shopping fs-4'><BiHappyHeartEyes /></span>
                                    </div>
                                    <div className="col-md-12">
                                        <p className='mt-4'>شما تنها تا اخر این تایم مشخص شده تخفیف دارید پس سریع تر خرید هاتونو انجام بدین <BsArrowLeft className='me-2 fs-4' /></p>
                                    </div>
                                    <div className="col-md-12 mt-5">
                                        <TimerOffer />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {allData.map((i) => (
                            <SwiperSlide key={i.id}>
                                <div className="off-cart-shopping">
                                    <figure>
                                        <div className="off-cart-img">
                                            <Link to={`/shopping/${i.id}`}>
                                                <ImgTag src={i.img} class={"oi"} alt={"original"} />
                                            </Link>
                                            <div className="off-cart-img-hover">
                                                <Link to={`/shopping/${i.id}`}>
                                                    <ImgTag src={i.imgHover} alt={"hover"} />
                                                </Link>
                                                <ul className='d-flex justify-content-center mt-3 p-0'>
                                                    <li className='mx-3'><AiOutlineHeart /></li>
                                                    <li><VscGitCompare /></li>
                                                    <li className='mx-3 asly'><ButtonBuy id={i} /></li>
                                                </ul>
                                                <span className='text-center d-block w-100'>
                                                    {Array(i.star).fill(0).map(() => <FaStar className="text-warning me-1" key={Math.random(4)} />)}
                                                    {Array(5 - i.star).fill(0).map(() => <FaStar className="me-1" key={Math.random(4)} />)}
                                                </span>
                                            </div>
                                            <figcaption className='d-flex align-items-center mt-3'>
                                                <span className="off-jkj">{i.name}</span>
                                                <p className="off-jkj">{i.title}</p>
                                                <span>{(i.price + 0).toLocaleString()} $</span>
                                                <ul></ul>
                                            </figcaption>
                                        </div>
                                        <span className='off-notif-cart'>{i.offer}%-</span>
                                    </figure>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </>
    )
}