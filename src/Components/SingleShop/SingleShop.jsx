import { Link, useParams } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import { IoWarningOutline } from 'react-icons/io5'
import { FaShippingFast, FaStar, FaRegHeart } from 'react-icons/fa'
import { VscGitCompare, VscCommentDiscussion } from 'react-icons/vsc'
import './SingleShop.css'
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import WarningProblem from "../WarningProblem/WarningProblem";
import BoxSliderLoop from "../BoxSliderLoop/BoxSliderLoop";
import CommentsShop from "../CommentsShop/CommentsShop";
import TableSingleShop from "../TableSingleShop/TableSingleShop";
import TimerOffer from "../TimerOffer/TimerOffer";
import ImgTag from "../ImgTag/ImgTag";
import ButtonBuy from "../ButtonBuy/ButtonBuy";
export default function SingleShop() {
    const { singleShop } = useParams()
    const [color, setColor] = useState('')
    const [scrollPage, setScollPage] = useState(0)
    const [upperScroll, setUpperScoll] = useState(false)
    const [upMenu, setUpMenu] = useState(false)
    const [Alldata, setAllData] = useState([])
    const [data, setData] = useState([])
    const [skill, setSkill] = useState([])
    const [commentData, setCommentData] = useState([])
    const [sliderDown, setSliderDown] = useState([])
    const [kold, setKold] = useState([])
    const [showTimer, setShowTimer] = useState(false)
    useEffect(() => {
        async function fitch() {
            await import('../../server1').then(res => {
                setAllData(res.shopSingle),
                    setSliderDown(res.cartShopSlider)
            })
        }
        fitch()
    }, [])

    useEffect(() => {
        newItem()
    }, [Alldata, singleShop])

    const newItem = () => {
        const gog = [...Alldata]
        const hol = [...sliderDown]
        const kola = gog.find(i => i.id == singleShop)
        const lol = hol.filter(i => i.id != singleShop)
        if (kola) {
            const gog2 = lol.filter(i => i.toggle === kola.category)
            setKold(gog2)
            if (kola.category === 'offer') {
                setShowTimer(true)
            }
        }
        setData(kola)
        if (kola) {
            setSkill([...kola.skils])
            setCommentData([...kola.comments])
        }
    }

    useEffect(() => {
        setColor('مشکی')
        window.addEventListener('scroll', handler)
        function handler() {
            const position = window.pageYOffset
            setScollPage(position)
        }
        return (() => window.removeEventListener('scroll', handler))
    }, [])

    useEffect(() => {
        const upper = window.innerHeight + scrollPage
        setUpperScoll(window.innerHeight + scrollPage)
        if (upperScroll < upper) {
            setUpMenu(false)
        }
        if (upperScroll > upper) {
            setUpMenu(true)
        }
    }, [scrollPage])

    return (
        <>
            <Header />
            <section className="single-shop">
                <div className="container">
                    {data && (
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <div className="shop-single d-flex justify-content-between align-items-center">
                                    <div className="right-bread">
                                        <Link to={'/'} className="text-info me-2">خانه</Link> / <Link to={'/shopping'} className="text-info mx-2">فروشگاه</Link> / <span className=" me-2">{data.title}</span>
                                    </div>
                                    <div className="left-bread">
                                        <WarningProblem />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="shop-single">
                                    <div className="row">
                                        {showTimer && (
                                            <div className="col-md-12 timer-show d-flex mb-3 align-items-center justify-content-center">
                                                <span className="off-span">تا پایان تخفیف :</span>
                                                <TimerOffer />
                                            </div>
                                        )}
                                        <div className="col-md-5">
                                            <div className="gallery-img-estate">
                                                {data.images && <ImageGallery autoPlay={true} items={data.images} />}
                                            </div>
                                        </div>
                                        <div className="col-md-7 d-flex flex-column justify-content-between mt-4 mt-sm-0">
                                            <h4>{data.title}</h4>
                                            <ul className="ul-shop">
                                                {skill.length > 0 &&
                                                    skill[0].ulti.map((i) => (
                                                        <li key={i.id} className="my-2"><i>{i.skils}</i> : {i.summery}</li>
                                                    ))
                                                }
                                            </ul>
                                            <h5 className="d-inline">انبار : {data.store} </h5>
                                            <h5 className="d-inline">قیمت : {(data.price + 0).toLocaleString()} تومان</h5>
                                            <h5 className="d-inline">رنگ : {color} </h5>
                                            <div className="colo-shop d-flex justify-content-around">
                                                <div className="button-color d-inline">
                                                    <button><Form.Check name="kol" type="radio" checked={color === 'مشکی' ? true : false} onChange={() => setColor("مشکی")} aria-label="option 1" /></button>
                                                    <label>رنگ مشکی</label>
                                                </div>
                                                <div className="button-color d-inline">
                                                    <button><Form.Check name="kol" type="radio" checked={color === 'سبز' ? true : false} onChange={() => setColor("سبز")} aria-label="option 1" /></button>
                                                    <label>رنگ سبز</label>
                                                </div>
                                                <div className="button-color d-inline">
                                                    <button><Form.Check name="kol" type="radio" checked={color === 'آبی' ? true : false} onChange={() => setColor("آبی")} aria-label="option 1" /></button>
                                                    <label>رنگ آبی</label>
                                                </div>
                                                <div className="button-color d-inline">
                                                    <button><Form.Check name="kol" type="radio" checked={color === 'قهوه ای' ? true : false} onChange={() => setColor("قهوه ای")} aria-label="option 1" /></button>
                                                    <label>رنگ قهوه ای</label>
                                                </div>
                                            </div>
                                            <div className="row my-3 justify-content-center">
                                                <div className="col-md-4">
                                                    <div className="pay-buy">
                                                        <ButtonBuy title={"افزودن به سبد خرید"} id={data} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <div className="zemanat d-flex justify-content-between">
                                                <div className="button-shares">
                                                    <button className="ms-4"><VscGitCompare className="text-primary fs-4" /></button>
                                                    <button className=""><FaRegHeart className="text-primary fs-4" /></button>
                                                </div>
                                                <div className="info-shop">
                                                    <span><FaStar className="text-warning fs-5" />{data.score} امتیاز</span>
                                                    <span className="me-3"><VscCommentDiscussion className="text-info ms-1 fs-4" />2 کامنت</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-banner-shop text-center">
                                    <Table responsive className="m-0">
                                        <thead></thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="pack-banner-shop flex-column flex-sm-row">
                                                        <ImgTag src={"/img/express-delivery.svg"} />
                                                        <figcaption>امکان تحویل اکسپرس</figcaption>
                                                    </div>
                                                </td>
                                                <td><div className="pack-banner-shop flex-column flex-sm-row">
                                                    <ImgTag src={"/img/support.svg"} />
                                                    <figcaption>24 ساعته روز های کاری</figcaption>
                                                </div>
                                                </td>
                                                <td><div className="pack-banner-shop flex-column flex-sm-row">
                                                    <ImgTag src={"/img/cash-on-delivery.svg"} />
                                                    <figcaption>پرداخت در محل</figcaption>
                                                </div>
                                                </td>
                                                <td><div className="pack-banner-shop flex-column flex-sm-row">
                                                    <ImgTag src={"/img/days-return.svg"} />
                                                    <figcaption>7 روز ضمانت بازگشت کالا</figcaption>
                                                </div>
                                                </td>
                                                <td><div className="pack-banner-shop flex-column flex-sm-row">
                                                    <ImgTag src={"/img/original-products.svg"} />
                                                    <figcaption>ضمانت اصل بودن کالا</figcaption>
                                                </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="shop-single mt-4">
                                            <div className={`tabs-shop ${upMenu ? 'down-nav' : null}`}>
                                                <Tabs
                                                    defaultActiveKey="longer-tab"
                                                    id="fill-tab-example"
                                                    className="mb-3"
                                                    fill
                                                >
                                                    <Tab eventKey="profile" title="بررسی">
                                                        <div className="desc-shop">
                                                            <p>
                                                                ثبت لحظات یکی از شیرین‌ترین و خاطره‌انگیزترین فعالیت‌هایی است که بشر امروزی قادر به انجام آن است. با اختراع دوربین‌های فیلم‌برداری و عکس‌برداری این ممکن فراهم شده تا افراد دوست‌داشتنی لحظات خود را به صورت ماندگار ثبت کنند. تکنولوژی حتی پا را فراتر از آن گذاشته و با اختراع دوربین‌های فوق پیشرفته‌، امکان عکاسی سریع در هنگام ورزش، غواصی، دوچرخه‌سواری و.. را نیز پدید آورده است. دوربین فیلم‌برداری ورزشی اکن مدل H9R 4K نمونه‌ای از همین مورد است که شما می‌توانید از سریع‌ترین حرکات ورزشی خود فیلم‌برداری کنید. این محصول رزولوشن 20 مگاپیکسل را در اختیار شما می‌گذارد تا ویدیوهایی بسیار با کیفیت تهیه کنید.
                                                            </p>
                                                        </div>
                                                    </Tab>
                                                    <Tab eventKey="longer-tab" title="مشخصات">
                                                        <Table striped className="table-shop">
                                                            <thead></thead>
                                                            <tbody>
                                                                {skill && (
                                                                    <TableSingleShop new={skill} />
                                                                )}
                                                            </tbody>
                                                        </Table>
                                                    </Tab>
                                                    <Tab eventKey="contact" title="دیدگاه ها">
                                                        {commentData && (
                                                            <CommentsShop new={commentData} />
                                                        )}
                                                    </Tab>
                                                </Tabs>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="shop-single mt-4">
                                            <p className="danger-shop"><IoWarningOutline className="text-danger fs-5" /> درخواست مرجوع کردن کالا در گروه دوربین فیلم برداری با دلیل (انصراف از خرید) تنها در صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا نباید باز شده باشد).</p>
                                            <p className="danger-shop"><FaShippingFast className="text-primary fs-5 ms-1" />دارای ارسال سریع سفارشات طی 2 روز با اکسپرس  پست و حداقل هزینه سفارشات 30 هزار تومان میباشد</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {kold.length > 0 && (
                                <div className="col-md-12 mt-3">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4 className="mt-4">محصولات مرتبط</h4>
                                        </div>
                                        <div className="col-md-12">
                                            <BoxSliderLoop new={kold} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section >
            <Footer />
        </>
    )
}