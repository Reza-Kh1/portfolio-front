import "./SecondPage.css"
import Buttons from '../../Buttons/Buttons'
export default function SeconPage() {
    return (
        <>

            <section className="wrapper" style={{height:'100vh'}}>
                <div className="page-404">


                    <div className="container">

                        <div id="scene" className="scene" data-hover-only="false">


                            <div className="circle" data-depth="1.2"></div>

                            <div className="one" data-depth="0.9">
                                <div className="content">
                                    <span className="piece"></span>
                                    <span className="piece"></span>
                                    <span className="piece"></span>
                                </div>
                            </div>

                            <div className="two" data-depth="0.60">
                                <div className="content">
                                    <span className="piece"></span>
                                    <span className="piece"></span>
                                    <span className="piece"></span>
                                </div>
                            </div>

                            <div className="three" data-depth="0.40">
                                <div className="content">
                                    <span className="piece"></span>
                                    <span className="piece"></span>
                                    <span className="piece"></span>
                                </div>
                            </div>

                            {/* 
                            <p className="p404">404</p>
                            <p className="p404">404</p> */}

                        </div>

                        <div className="text">
                            <article>
                                <span style={{ fontSize: '12rem' }}>404</span>
                                <p>صفحه مورد نظر شما یافت نشد<br />برای بازگشت روی دکمه زیر کلیک کنید</p>
                                <Buttons go={"/landing"} title={"بازگشت"} classSpan={'ms-2'} bg={'#5f338d'} />
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
