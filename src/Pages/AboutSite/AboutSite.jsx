import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import TypewriterComponent from "typewriter-effect";
import { FaReact } from "react-icons/fa";
import "./AboutSite.css"
import AboutSiteBox from '../../Components/AboutSiteBox/AboutSiteBox';
import { useEffect, useState } from 'react';
export default function AboutSite() {
    const [data, setData] = useState([])
    useEffect(() => {
        import("../../server").then(res => setData(res.aboutSiteDesc))
    }, [])
    return (
        <>
            <Header />
            <section className="about-site">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div className="about-site-topbar">
                                <figcaption >
                                    <h3 className='text-light'>پکیج هایی که در ساخت سایت استفاده شده اند :
                                        <TypewriterComponent onInit={(type) => {
                                            type
                                                .typeString('<span style="color:#2075be;">Redux js</span>').start().pauseFor(2000).deleteAll()
                                                .typeString('<span style="color:#9a9a9a;">React-router-dom</span>').start().pauseFor(2000).deleteAll()
                                                .typeString('<span style="color:#a81f93;">Swiper</span>').start().pauseFor(2000).deleteAll()
                                                .typeString('<span style="color:#3ba81f;">Sweetalert</span>').start().pauseFor(2000).deleteAll()
                                                .typeString('<span style="color:#aa30b7;">React-image-gallery</span>').start().pauseFor(2000).deleteAll()
                                                .typeString('<span style="color:#aaa247;">typewriter-effect</span>').start().pauseFor(2000).deleteAll()
                                        }}
                                            options={{ loop: true }} />
                                    </h3>
                                    <span className='mt-5 d-block'>توی این صفحه اطلاعاتی درباره سایت و چگونگی ساخت و قابلیت هایی که داره نوشته شده <FaReact /></span>
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">{data.map((i) => (
                        <div className="col-md-12" key={i.id}>
                            <AboutSiteBox {...i} />
                        </div>
                    ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
