import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { FaRegHeart } from 'react-icons/fa';
import { BsBookmark } from 'react-icons/bs';
import { CiShare2 } from 'react-icons/ci';
import { FcConferenceCall } from "react-icons/fc"
import {FcEngineering} from "react-icons/fc"
import './Blog.css'
import ImgTag from '../../Components/ImgTag/ImgTag';
export default function Blog() {
    return (
        <>
            <Header />
            <section className='blog'>
                <div className="home-page response-top mb-5">
                    <div className="home-page-title">
                        <h2 className='text-light'>آراد پاسخ به نیاز های خاص</h2>
                        <p className='text-light'>شرکت آراد یکی از بزرگترین تیم های فعال توی حوزه معماری و طراحی داخلی است.</p>
                    </div>
                    <div className="desc-wiiner">
                        <ImgTag src={"/img/home_architect4_pic8.png"} />
                        <span className='text-light my-3' style={{ fontSize: '11px' }}>همکاری با ما شما را برنده میکند برای اطلاعات بیشتر از ما وبسایت رو مطالعه کنید</span>
                        <ImgTag src={"/img/home_architect4_pic2.jpg"} />
                        <button className='mt-3'>تماس بگیرید</button>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <h4 className='mt-5 pt-5 fs-4 fw-bolder'><i><FcEngineering/></i> کیفیت و استاندارد ما اتفاقی نیست شما میتوانید با دیدن پروژه های ما <span className='text-success'>اطمینان</span> حاصل کنید</h4>
                        </div>
                        <div className="col-md-12 mt-2 mt-sm-5">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <figure>
                                        <ImgTag src={"/img/home_architect4_pic14.jpg"} class={"img-blog"} />
                                    </figure>
                                </div>
                                <div className="col-md-6 mt-3 mt-sm-0">
                                    <h5 className='mb-3'>معرفی شرکت</h5>
                                    <p className='lh-lg'>
                                        Office
                                        Architectما معماری را بازتعریف می‌کنیم و مفاهیم قدیمی زندگی هرروزه را به چالش می‌کشیم تا برای انسان معاصر، فضایی هیجان‌انگیز برای استراحت، کار و تفریح بسازیم. هر پروژه در وضعیت و با پارامترهای خاص خود مساله‌ای است که پیدا کردن بهترین پاسخ برای آن هدف ماست. ما تیپولوژی‌ها را بازنگری می‌کنیم تا فضایی که هر گروهی با خاسته‌های خود  از آن لذت می‌برد را طراحی کنیم.</p>
                                    <p className='lh-lg'>
                                        استودیو آدمون در پروسه‌ی ساخت مهارت و تجربه‌‌ی زیادی دارد. تیم‌های ساخت ما برای اجرای دقیق طرح‌ها و هم‌چنین پایین نگه‌داشتن هزینه‌ها مبتکرانه عمل می‌کنند و راه‌حل‌های مخصوص هر پروژه را پیدا می‌کنند. بخش مهندسی توانای ما در زمینه‌ی سازه، تاسیسات الکتریکی و مکانیکی، نور و روشنایی، صوت و آکوستیک در کنار تیم‌های اجرایی مستقر در کارگاه‌ها، استاندارد‌های بالای زندگی را در پروژه‌ها پیاده‌سازی می‌کنند.
                                    </p>
                                    <div className="span-counter d-flex justify-content-between mt-3 mt-sm-5 ">
                                        <div className="box-counter text-center">
                                            <span className='count-span'>530</span>
                                            <h5>پروژه های انجام شده</h5>
                                        </div>
                                        <div className="box-counter text-center">
                                            <span className='count-span'>76</span>
                                            <h5>نیرو های انسانی</h5>
                                        </div>
                                        <div className="box-counter text-center">
                                            <span className='count-span'>13</span>
                                            <h5>مدارک معتبر کسب شده</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='bg-green p-5 mt-5'>
                    <div className="container">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h5 className='mb-3 text-dark'>پروژه های انجام شده</h5>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className='tage-a-img position-relative'>
                                        <span style={{ cursor: 'pointer' }}>
                                            <figure>
                                                <ImgTag src={"/img/home_architect4_pic24-960x700.jpg"} />
                                            </figure>
                                        </span>
                                        <figcaption className='text-center'>
                                            <span className='d-block mb-2'>طراح : لیلا عراقچی</span>
                                            <span>مکان : تهران 1398</span>
                                        </figcaption>
                                        <div className="title-desc">
                                            <div className="row">
                                                <div className="col-md-4 col-4 button-title-decs"><span title='ذخیره کردن' style={{ cursor: 'pointer' }}><BsBookmark /></span></div>
                                                <div className="col-md-4 col-4 button-title-decs"><span title='لایک کردن' style={{ cursor: 'pointer' }}><FaRegHeart /></span></div>
                                                <div className="col-md-4 col-4 button-title-decs"><span title='به اشتراک گزاشتن' style={{ cursor: 'pointer' }}><CiShare2 /></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className='tage-a-img position-relative'>
                                        <span style={{ cursor: 'pointer' }}>
                                            <figure>
                                                <ImgTag src={"/img/home_architect4_pic22-960x700.jpg"} />
                                            </figure>
                                        </span>
                                        <figcaption className='text-center'>
                                            <span className='d-block mb-2'>طراح : سامان گلریز</span>
                                            <span>مکان : اصفهان 1385</span>
                                        </figcaption>
                                        <div className="title-desc">
                                            <div className="row">
                                                <div className="col-md-4 col-4 button-title-decs"><span style={{ cursor: 'pointer' }} title='ذخیره کردن'><BsBookmark /></span></div>
                                                <div className="col-md-4 col-4 button-title-decs"><span style={{ cursor: 'pointer' }} title='لایک کردن'><FaRegHeart /></span></div>
                                                <div className="col-md-4 col-4 button-title-decs"><span style={{ cursor: 'pointer' }} title='به اشتراک گزاشتن'><CiShare2 /></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className='tage-a-img position-relative'>
                                        <span style={{ cursor: 'pointer' }}>
                                            <figure>
                                                <ImgTag src={"/img/home_architect4_pic23-960x700.jpg"} />
                                            </figure>
                                        </span>
                                        <figcaption className='text-center'>
                                            <span className='d-block mb-2'>طراح : جواد عزتی</span>
                                            <span>مکان : تهران 1401</span>
                                        </figcaption>
                                        <div className="title-desc">
                                            <div className="row">
                                                <div className="col-md-4 col-4 button-title-decs"><span style={{ cursor: 'pointer' }} title='ذخیره کردن'><BsBookmark /></span></div>
                                                <div className="col-md-4 col-4 button-title-decs"><span style={{ cursor: 'pointer' }} title='لایک کردن'><FaRegHeart /></span></div>
                                                <div className="col-md-4 col-4 button-title-decs"><span style={{ cursor: 'pointer' }} title='به اشتراک گزاشتن'><CiShare2 /></span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mt-3">
                                    <div className='tage-a-img position-relative'>
                                        <span style={{ cursor: 'pointer' }}>
                                            <figure>
                                                <ImgTag src={"/img/home_architect4_pic25-960x700.jpg"} />
                                            </figure>
                                        </span>
                                        <figcaption className='text-center'>
                                            <span className='d-block mb-2'>طراح : داریوش فرضایی</span>
                                            <span>مکان : شیراز 1355</span>
                                        </figcaption>
                                        <div className="title-desc">
                                            <div className="row">
                                                <div className="col-md-4 col-4 button-title-decs"><span style={{ cursor: 'pointer' }} title='ذخیره کردن'><BsBookmark /></span></div>
                                                <div className="col-md-4 col-4 button-title-decs"><span style={{ cursor: 'pointer' }} title='لایک کردن'><FaRegHeart /></span></div>
                                                <div className="col-md-4 col-4 button-title-decs"><span style={{ cursor: 'pointer' }} title='به اشتراک گزاشتن'><CiShare2 /></span></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-12 d-flex justify-content-center">
                                    <span className='tag-a-button' style={{ cursor: 'pointer' }}>
                                        دیدن پروژه های بیشتر
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className='mt-5 pt-sm-5 pt-0'>
                            <i className='ms-2'><FcConferenceCall/></i>
                                مهندسین ما تجربه همکاری لذت بخشی را با شما به اشتراک میگذارند
                            </h4>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="img-3-blog">
                                        <figure className='mb-0'>
                                            <ImgTag src={"/img/home_architect4_pic7.png"} />
                                        </figure>
                                        <h5 className='text-success'>طراحی های اداری</h5>
                                        <p>مهندسین ما در بخش طراحی اداری تجربه زیادی دارند</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="img-3-blog">
                                        <figure className='mb-0'>
                                            <ImgTag src={"/img/home_architect4_pic6.png"} />
                                        </figure>
                                        <h5 className='text-success'>مهندسین عاشق محیط زیست</h5>
                                        <p>برای الهام گرفتن از محیط زیست و استفاده از قدرت طبیعت همیشه آماده هستند</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="img-3-blog">
                                        <figure className='mb-0'>
                                            <ImgTag src={"/img/home_architect4_pic5.png"} />
                                        </figure>
                                        <h5 className='text-success'>طراحی های صنعتی</h5>
                                        <p>در بخش صنعتی به تمام ریز جزئیات استاندارد ها دقت میکنند</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
