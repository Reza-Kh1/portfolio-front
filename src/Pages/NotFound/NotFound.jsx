import Footer from '../../Components/Footer/Footer'
import { useEffect, useState } from 'react'
import { BiAtom } from 'react-icons/bi'
import LoopSliderNotFouand from '../../Components/LoopSliderNotFouand/LoopSliderNotFouand'
import Header from '../../Components/Header/Header'
import ImgTag from '../../Components/ImgTag/ImgTag'
import "./NotFound.css"
export default function NotFound() {
    const [loopData, setLoopData] = useState([])
    useEffect(() => {
        import("../../server").then(res => setLoopData(res.notFoundPage))
    }, [])
    return (
        <>
            <Header />
            <section className='sec-404-page'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div className="not-found response-top ">
                                <figure>
                                    <ImgTag src={"/img/astro-main-bg.jpg"} class={"img-not-found-cat"} />
                                    <ImgTag src={"/img/2488756_prev_ui.png"} class={"img-not-found"} />
                                </figure>
                                <span>
                                    <ImgTag src={"/img/astro-home-clouds.png"} class={"bt-img"} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="subject-404-page text-center mt-5">
                                <figure >
                                    <ImgTag src={"/img/astro-home-moon-cycle.png"} />
                                </figure>
                                <h3 className='subject-404-page text-dark'>صفحه 404  (notFound)</h3>
                            </div>

                        </div>
                        <div className="col-md-12 p-3">

                            <div className="descrpi-p mt-3">
                                <i className='text-info'><BiAtom /></i>
                                <span className='me-2 text-dark'>شما در اینجا تمامیه صفحاتی که در رابطه با خطای 404 طراحی شده اند رو میتونید مشاهده کنید...</span>
                            </div>
                        </div>
                        {loopData.map((data) => (
                            <LoopSliderNotFouand key={data.id} {...data} />
                        ))}
                    </div>
                </div >
            </section>
            <Footer />
        </>
    )
}

