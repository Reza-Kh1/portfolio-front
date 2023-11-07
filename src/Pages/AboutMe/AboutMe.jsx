import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ImgTag from '../../Components/ImgTag/ImgTag'
import "./AboutMe.css"
export default function AboutMe() {
    return (
        <>
            <Header />
            <section className='about-me'>
                <div className="container">
                    <div className="row panel-about-me">
                        <div className="col-md-12">
                            <div className="box-about-me">
                                <div className="row">
                                    <div className="col-md-4 col-4 col-sm-4">
                                        <figure className='text-center m-0'>
                                            <ImgTag src={"https://icons.veryicon.com/png/o/internet--web/55-common-web-icons/person-4.png"} />
                                        </figure>
                                    </div>
                                    <div className="col-md-6 col-6 col-sm-6 d-flex align-items-center">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="title-box d-flex justify-content-around mb-sm-3 mb-2">
                                                    <h5>رضاخانی</h5>
                                                    <h5>متولد : 1380/2/30</h5>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="title-box d-flex justify-content-around">
                                                    <h5>09390199977</h5>
                                                    <h5 className='me-3'>r.khani1385.66@gmail.com</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box-desc-me mt-5">
                                <h3 className=' me-0 me-sm-3 mb-3'>خلاصه رزومه</h3>
                                <p>برنامه نویس فرانت اند (React Js) هستم حدود 2 سال پیش آموزش برنامه نویسی رو شروع کردم و عاشق چالش های جدیدم با این که رشته ام مرتبط نیست ولی شدیدا علاقه مند به کد نویسی هستم و همیشه هم در حال یادگیری ام </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box-desc-me mt-4 mt-sm-5 pe-3">
                                <h3 className='me-0 me-sm-3 mb-3'>مشخصات فردی</h3>
                                <ul>
                                    <li>وضعیت تاهل : مجرد</li>
                                    <li>محل سکونت : تهران-فرحزاد</li>
                                    <li>وضعیت سربازی : معافیت تحصیلی</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box-desc-me mt-4">
                                <h3 className=' me-0 me-sm-3 mb-3'>تحصیلات</h3>
                                <p>کارشناسی رشته صنایع   1398 / 1402</p>
                                <p> موسسه آموزش عالی اوج قزوین</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="box-desc-me mt-4">
                                <h3 className=' me-0 me-sm-3 mb-3'>سوابق شغلی</h3>
                                <span>کارآموزی Wordpress</span>
                                <span className='d-block my-2'>محل : تهران-میدان ونک</span>
                                <p>حدود 2 ماه از مهر تا آذر 1401 توی شرکت آی تی تیم ایران کار میکردم اونجا با المنتور پرو سایت طراحی میکردم ولی به خاطر این که از php و وردپرس خوشم نیومد ول کردم و js  رو برای بهتر شروع کردم .</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="box-desc-me mt-4">
                                <h3 className=' me-0 me-sm-3 mb-3'>مهارت های سخت</h3>
                                <div className="row">
                                    <div className="col-md-4 pe-sm-4">
                                        <ul className='m-0'>
                                            <li>Html5 & Css3 : پیشرفته</li>
                                            <li>Recat Js : متوسط</li>
                                            <li>Redux js : متوسط</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul className='m-0'>
                                            <li>Bootstrap : پیشرفته</li>
                                            <li>React-Router-Dom : پیشرفته</li>
                                            <li>Axios : متوسط</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4">
                                        <ul className='m-0'>
                                            <li>Next Js : آشنایی</li>
                                            <li>Git : آشنایی</li>
                                            <li>Sass : آشنایی</li>
                                        </ul>
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
