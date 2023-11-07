import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer'
import ContactMe from '../../Components/ContactMe/ContactMe'
import { SiArtixlinux } from "react-icons/si";
import { BsShop, BsWindows } from "react-icons/bs";
import { FaModx } from "react-icons/fa";
import "./HomeUs.css";
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import { useEffect, useRef, useState } from 'react';
export default function HomeUs() {
    const usei = useRef([window.innerWidth, window.innerHeight])
    const [isShow, setIsShow] = useState("panel-admin")
    useEffect(() => {

        if (window.innerWidth < 777) {
            setIsShow("panel")
        }
    }, [])
    return (
        <>
            <Header />
            <section className='Home'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div className="home-top-image">
                                <figure>
                                </figure>
                                <figcaption>
                                    <h3>خوش آمدید :)) </h3>
                                    <span>این یک نمونه کار برای نمایش سطح مهارت است.</span>
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="row text-center mt-4">
                                <div className="col-md-3 col-3"><span><i className='d-block fs-4'><SiArtixlinux /></i> وبلاگ</span></div>
                                <div className="col-md-3 col-3"><span><i className='d-block fs-4'><BsShop /></i> فروشگاهی</span></div>
                                <div className="col-md-3 col-3"><span><i className='d-block fs-4'><BsWindows /></i> داشبورد</span></div>
                                <div className="col-md-3 col-3"><span><i className='d-block fs-4'><FaModx /></i> پنل ادمین</span></div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <HomeSlider data={"املاک"} p={"یه صفحه کوچیک به سبک املاک هستش با قابلیت فیلتر های زمان و نوع آگهی..."} linkTitle={"دیدن صفحه"}
                                link={"/estate/page/1"} img={"/img/mika-twin-towers-alidoost-and-partners_1_prev_ui.png"} imgBack={"/img/cityhall-subheader1.jpg"} classHome={"estate"} />
                        </div>
                        <div className="col-md-6 mt-5">
                            <HomeSlider data={"فروشگاهی"} p={"از دسته های متنوع با ویژگی افزودن به سبد خرید تشکیل شده که تا صفحه پرداخت  هدایت میشه..."} linkTitle={"دیدن صفحه"}
                                link={"/shopping"} img={"/img/laptop2.png"} imgBack={"/img/home_charity_texture_7.jpg"} classHome={"shopping"} />
                        </div>
                        <div className="col-md-6">
                            <HomeSlider data={"داشبورد"} p={"تمام بخش های که کاربران می تونستن بهش نیاز داشته باشن رو ایجاد کردم"} linkTitle={"دیدن صفحه"}
                                link={"/dashboard/my-account"} img={"/img/the-road-mccarthy1_prev_ui.png"} imgBack={"/img/home_burger_section_bg1.jpg"} classHome={"dashboard"} />
                        </div>
                        <div className="col-md-6">
                            <HomeSlider data={"پنل ادمین"} p={"بخش های لازم برای مدیریت ادمین درست شده با قابلیت پاک یا ویرایش پیام ها و لی در گوشی در دسترس نیست"} linkTitle={"دیدن صفحه"}
                                link={"/panel-admin/dashboard"} img={"https://blog.faradars.org/wp-content/uploads/2023/02/What-Is-Management-1.jpg"} imgBack={"/img/home_casino_slider.jpg"} classHome={isShow} />
                        </div>
                        <div className="col-md-6">
                            <HomeSlider data={"وبلاگ"} p={"این بخش از یه صفحه ساده و بدون چیز خاصی درست شده کلا یه تک صفحه اس"} linkTitle={"دیدن صفحه"}
                                link={"/blog"} img={"/img/home_architect4_pic22-960x700.jpg"} imgBack={"/img/boxing-sectionbg2.jpg"} classHome={"bloge"} />
                        </div>
                    </div>
                </div>
            </section>
            <ContactMe />
            <Footer />
        </>
    )
}
