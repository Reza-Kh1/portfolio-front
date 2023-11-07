import { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer'
import { CgAppleWatch, CgHeadset } from 'react-icons/cg'
import { GiGamepad } from 'react-icons/gi'
import { LuMonitor } from 'react-icons/lu'
import { BiLaptop } from 'react-icons/bi'
import { BsPhone } from 'react-icons/bs'
import "swiper/swiper-bundle.min.css";
import BoxSliderLoop from '../../Components/BoxSliderLoop/BoxSliderLoop';
import LoopCartShop from '../../Components/LoopCartShop/LoopCartShop';
import swal from 'sweetalert';
import './Shopping.css'
import CarouselShop from '../../Components/CarouselShop/CarouselShop';
import ImgTag from "../../Components/ImgTag/ImgTag";
export default function Shopping() {
    const [populerCart, setPopulerCart] = useState([])
    const [sellPopuler, setSellPopuler] = useState([])
    const [offerData, setOfferData] = useState([])
    const [activeSellPopuler, setActiveSellPopuler] = useState('')
 
    const blogHandler = () => {
        swal({ title: "تکمیل نشده", icon: "error", text: "هنوز صفحات وبلاگی درست نشده که بخوام لینک دهی کنم" })
    }
    useEffect(() => {
        import('../../server1').then(res => { setPopulerCart(res.cartShopSlider), setOfferData(res.cartShopSlider), setActiveSellPopuler('phone') })
    }, [])

    useEffect(() => {
        switch (activeSellPopuler) {
            case 'console': {
                const gog = populerCart.filter((i) => {
                    return i.toggle === 'console'
                })
                setSellPopuler(gog)
                break
            }
            case 'headset': {
                const gog = populerCart.filter((i) => {
                    return i.toggle === 'headset'
                })
                setSellPopuler(gog)
                break
            }
            case 'laptop': {
                const gog = populerCart.filter((i) => {
                    return i.toggle === 'laptop'
                })
                setSellPopuler(gog)
                break
            }
            case 'phone': {
                const gog = populerCart.filter((i) => {
                    return i.toggle === 'phone'
                })
                setSellPopuler(gog)
                break
            }
            case 'watch': {
                const gog = populerCart.filter((i) => {
                    return i.toggle === 'watch'
                })
                setSellPopuler(gog)
                break
            }
            default: {
                const gog = populerCart.filter((i) => {
                    return i.toggle === 'phone'
                })
                setSellPopuler(gog)
            }

        }
    }, [activeSellPopuler])
    return (
        <>
            <Header />
            <section className='shopping'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0 response-top">
                            <CarouselShop />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-4 d-flex justify-content-center">
                            <div className="icon-shopping-header">
                                <span><LuMonitor className='icons-shopping' /></span>
                            </div>
                        </div>
                        <div className="col-md-2 col-4">
                            <div className="icon-shopping-header">
                                <span><CgHeadset className='icons-shopping' /></span>
                            </div>
                        </div>
                        <div className="col-md-2 col-4">
                            <div className="icon-shopping-header">
                                <span><BiLaptop className='icons-shopping' /></span>
                            </div>
                        </div>
                        <div className="col-md-2 col-4">
                            <div className="icon-shopping-header">
                                <span><GiGamepad className='icons-shopping' /></span>
                            </div>
                        </div>
                        <div className="col-md-2 col-4">
                            <div className="icon-shopping-header">
                                <span><BsPhone className='icons-shopping' /></span>
                            </div>
                        </div>
                        <div className="col-md-2 col-4">
                            <div className="icon-shopping-header">
                                <span><CgAppleWatch className='icons-shopping' /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container margin-size">
                    <div className="off-shopping-cart">
                        <div className="row ps-0 ps-sm-3">
                            <div className="col-md-12">
                                <LoopCartShop data={offerData} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container margin-size">
                    <div className="row">
                        <div className="col-md-4 col-12 order-2">
                            <div className="shopping-ps4">
                                <h2 className="">بررسی کنسول ps5 سری 12</h2>
                                <p className="mt-4 mb-0 mb-sm-3">به طور کلی هدف از ساخت سری جدید از هر کنسول بازی، پیشرفت، بهبود عملکرد و در نهایت رضایت کاربران است. در سری ۱۲ کنسول پلی استیشن ۵ تغییرات بسیاری به وجود آمده که تجربه بازی های ویدیویی را برای گیمرها لذت بخش تر خواهد کرد.</p>
                                <p>از جمله این تغییرات :کاهش وزن سری  12 - حل مشکل صدای درایور - اضافه شدن لوله حرارتی - کاهش مصرف برق - بهبود عملکرد آنالوگ های دسته و...</p>
                                <a href="javascripts:(void)" onClick={blogHandler} className="shop-now">ادامه مطلب !</a>
                            </div>
                        </div>
                        <div className="col-md-8 col-12  order-1">
                            <figure>
                                <ImgTag src={"img/PlayStation-5-PNG-Free-Download.png"} />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-12 col-12 col-lg-3">
                            <h5 className='mt-2'>محصولات محبوب هر دسته</h5>
                        </div>
                        <div className="col-12 col-md-12 col-lg-9 text-md-start my-3 my-lg-0">
                            <div className="selling-shop">
                                <div className="table-responsive">
                                    <table className="table text-center">
                                        <thead>
                                        </thead>
                                        <tbody>
                                            <tr style={{ borderStyle: 'hidden' }} className="top-items-selling">
                                                <td>
                                                    <span onClick={() => setActiveSellPopuler('phone')} id='phone'
                                                        className={activeSellPopuler === 'phone' ? 'active-sell' : ''}><i className='ms-1 fs-sm-5 fs-2'><BsPhone /></i>گوشی</span>
                                                </td>
                                                <td>
                                                    <span onClick={() => setActiveSellPopuler('console')} id='console'
                                                        className={activeSellPopuler === 'console' ? 'active-sell' : ''}><i className='ms-1 fs-sm-5 fs-2'><GiGamepad /></i>کنسول</span>
                                                </td>
                                                <td>
                                                    <span onClick={() => setActiveSellPopuler('headset')} id='headset'
                                                        className={activeSellPopuler === 'headset' ? 'active-sell' : ''}><i className='ms-1 fs-sm-5 fs-2'><CgHeadset /></i>هدست</span>
                                                </td>
                                                <td>
                                                    <span onClick={() => setActiveSellPopuler('laptop')} id='laptop'
                                                        className={activeSellPopuler === 'laptop' ? 'active-sell' : ''}><i className='ms-1 fs-sm-5 fs-2'><BiLaptop /></i>لپتاپ</span>
                                                </td>
                                                <td>
                                                    <span onClick={() => setActiveSellPopuler('watch')} id='watch'
                                                        className={activeSellPopuler === 'watch' ? 'active-sell' : ''}><i className='me-1 fs-sm-5 fs-2'><CgAppleWatch /></i>ساعت هوشمند</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-4">
                            <BoxSliderLoop new={sellPopuler} />
                        </div>
                    </div>
                </div>
                <div className="container-lg">
                    <div className="row p-3 kol mb-5 my-5">
                        <div className="laptop-bg row d-flex align-items-center">
                            <div className="col-md-4 col-12 mt-md-5 pt-md-3">
                                <div className="text-laptop py-md-4">
                                    <h4 className="mt-0 mt-md-5 text-white">لپتاپ سری GL  برای همه</h4>
                                    <span className="color-a my-2 my-md-4 d-block">
                                        سری GE با هدف پاسخگویی به نیاز گیمر های مشتاق آغار بکار کرد. در کنار طراحی فوق‌العاده و نورپردازی RGB، سری GE بالاترین عملکرد و کارایی را به گیمرها و سایر کاربران ارائه می‌دهد. سری GE که از بهترین لپ تاپ های گیمینگ ام اس آی بشمار می‌رود.
                                    </span>
                                    <a href="javascripts:(void)" onClick={blogHandler} className="shop-now bg-white text-info">همین حالا خرید کن !</a>
                                </div>
                            </div>
                            <div className="col-md-8 col-12">
                                <figure>
                                    <ImgTag src={"/img/laptop2.png"} />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-lg">
                    <div className="row">
                        <div className="col-md-8 watch-gallery p-3 p-sm-3">
                            <div className="col-md-12 mb-3">
                                <figure>
                                    <ImgTag src={"/img/pngwing.com.png"} style={{ transition: 'all ease-in 0.4s' }} />
                                    <figcaption className="figure-img">
                                        <p>ساعت جیبی</p>
                                        <h3>ساعت هنری گریوز</h3>
                                        <span className="hover-show-all">نمایش مطلب</span>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="col-md-12 last-img">
                                <figure>
                                    <ImgTag src={"/img/watch.png"} style={{ transition: 'all ease-in 0.4s' }} />
                                    <figcaption className="figure-img">
                                        <p>ساعت هوشمند</p>
                                        <h3>اپل واچ سری 8</h3>
                                        <span className="hover-show-all">نمایش مطلب</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="camera-gallery">
                                <figure>
                                    <ImgTag src={"/img/camera.png"} style={{ transition: 'all ease-in 0.4s' }} />
                                    <figcaption className="figure-img">
                                        <p>دوربین فیلمبرداری</p>
                                        <h3>Sony FX6</h3>
                                        <span className="hover-show-all">نمایش مطلب</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <Footer />
        </>
    )
}