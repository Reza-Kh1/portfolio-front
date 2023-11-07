import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer'
import "./Estate.css"
import { useEffect, useState } from 'react';
import LoopCartEstate from '../../Components/LoopCartEstate/LoopCartEstate';
import Pagination from '../../Components/Pagination/Pagination';
import ImgTag from '../../Components/ImgTag/ImgTag';
import { useNavigate, useParams } from 'react-router-dom';
export default function Estate() {
    const [dataCart, setDataCart] = useState([])
    const [allData, setAllData] = useState([])
    const [change, setChange] = useState([])
    const [isRadio, setIsRadio] = useState("")
    const [isFilter, setIsFilter] = useState("")
    const nav = useNavigate()
    const { pagination } = useParams()
    useEffect(() => {
        import('../../server').then(res => { setAllData(res.estateCart), setChange(res.estateCart) })
    }, [])
    const changeHandler = (e) => {
        switch (e) {
            case "new": {
                if (isRadio) {
                    if (isRadio === "sale") {
                        const allCart = [...change]
                        const gog = allCart.filter(i => i.forWhat === true)
                        const older = gog.sort((a, b) => {
                            return a.date - b.date
                        })
                        setIsFilter("new")
                        setAllData(older)
                        if (pagination != 1) {
                            nav("/estate/page/1")
                        }
                        break
                    } else {
                        const allCart = [...change]
                        const gog = allCart.filter(i => i.forWhat === false)
                        const older = gog.sort((a, b) => {
                            return a.date - b.date
                        })
                        setIsFilter("new")
                        setAllData(older)
                        if (pagination != 1) {
                            nav("/estate/page/1")
                        }
                        break
                    }
                }

                const allCart = [...change]
                const older = allCart.sort((a, b) => {
                    return a.date - b.date
                })
                setIsFilter("old")
                setAllData(older)
                if (pagination != 1) {
                    nav("/estate/page/1")
                    console.log("asd");
                }
                break
            }
            case "old": {
                if (isRadio) {
                    if (isRadio === "sale") {
                        const allCart = [...change]
                        const gog = allCart.filter(i => i.forWhat === true)
                        const older = gog.sort((a, b) => {
                            return b.date - a.date
                        })
                        setIsFilter("old")
                        setAllData(older)
                        if (pagination != 1) {
                            nav("/estate/page/1")
                        }
                        break
                    } else {
                        const allCart = [...change]
                        const gog = allCart.filter(i => i.forWhat === false)
                        const older = gog.sort((a, b) => {
                            return b.date - a.date
                        })
                        setIsFilter("old")
                        setAllData(older)
                        if (pagination != 1) {
                            nav("/estate/page/1")
                        }
                        break
                    }
                }
                const allCart = [...change]
                const older = allCart.sort((a, b) => {
                    return b.date - a.date
                })
                setIsFilter("old")
                setAllData(older)
                if (pagination != 1) {
                    nav("/estate/page/1")
                }
                break
            }
            case "sale": {
                if (isFilter) {
                    if (isFilter === "old") {
                        const allCart = [...change]
                        const gog = allCart.filter(i => i.forWhat === true)
                        const older = gog.sort((a, b) => {
                            return b.date - a.date
                        })
                        setAllData(older)
                        setIsRadio("sale")
                        setIsFilter("old")
                        if (pagination != 1) {
                            nav("/estate/page/1")
                        }
                        break
                    } else {
                        const allCart = [...change]
                        const gog = allCart.filter(i => i.forWhat === true)
                        const older = gog.sort((a, b) => {
                            return a.date - b.date
                        })
                        setAllData(older)
                        setIsRadio("sale")
                        setIsFilter("new")
                        if (pagination != 1) {
                            nav("/estate/page/1")
                        }
                        break
                    }
                }
                const allCart = [...change]
                const gog = allCart.filter(i => i.forWhat === true)
                setAllData(gog)
                setIsRadio("sale")
                if (pagination != 1) {
                    nav("/estate/page/1")
                }
                break
            }
            case "rahn": {
                if (isFilter) {
                    if (isFilter === "old") {
                        const allCart = [...change]
                        const gog = allCart.filter(i => i.forWhat === false)
                        const older = gog.sort((a, b) => {
                            return b.date - a.date
                        })
                        setAllData(older)
                        setIsRadio("rahn")
                        setIsFilter("old")
                        if (pagination != 1) {
                            nav("/estate/page/1")
                        }
                        break
                    } else {
                        const allCart = [...change]
                        const gog = allCart.filter(i => i.forWhat === false)
                        const older = gog.sort((a, b) => {
                            return a.date - b.date
                        })
                        setAllData(older)
                        setIsRadio("rahn")
                        setIsFilter("new")
                        if (pagination != 1) {
                            nav("/estate/page/1")
                        }
                        break
                    }
                }
                const allCart = [...change]
                const gog = allCart.filter(i => i.forWhat === false)
                setAllData(gog)
                setIsRadio("rahn")
                if (pagination != 1) {
                    nav("/estate/page/1")
                }
                break
            }
            // case "dear": {
            //     const allCart = [...change]
            //     const gog = allCart.sort((a, b) => {
            //         return 
            //     })
            //     setAllData(gog)
            //     break
            // }
            // case "cheap": {
            //     const allCart = [...change]
            //     const gog = allCart.sort((a, b) => {
            //         return a.priceAll - b.priceAll
            //     })
            //     setAllData(gog)
            //     break
            // }
            default: {
                setIsRadio("")
                setIsFilter("")
                import('../../server').then(res => { setAllData(res.estateCart) })
                if (pagination != 1) {
                    nav("/estate/page/1")
                }
            }
        }
    }
    return (
        <>
            <Header />
            <section className='estates-cart'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="estate-top response-top">
                            <figure>
                                <ImgTag src={"/img/artist3-dude-slider.png"} />
                            </figure>
                            <figcaption>
                                <div className="spannnn d-flex justify-content-between mb-2">
                                    <span style={{ color: "#808182" }} className='me-3'>تهران 2022</span>
                                    <span style={{ color: "#808182" }} className='ms-3'>شرکت آرکا</span>
                                </div>

                                <h3 className=' mb-4'>متخصصین ما با   <span style={{ fontWeight: "700" }} className='color-estate'>30 سال</span> تجربه سریع ترین راه برای <span className='color-estate' style={{ fontWeight: "700" }}>خریداران و فروشندگان </span> فراهم میکنند</h3>
                                <ImgTag src={"/img/artist3-about-artist-signature.png"} class={"emza"} />
                            </figcaption>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="filters">
                                <div className="row justify-content-between align-items-center">
                                    <div className="col-md-4 col-12">
                                        <h4 className='text-dark mb-2 m-0 fs-5'>فیلتر سایت</h4>
                                    </div>
                                    <div className="col-md-8 col-12">
                                        <div className="filter-box text-start">
                                            <label style={{ cursor: "pointer" }} htmlFor="sale">فروش</label>
                                            <input onChange={(e) => changeHandler(e.target.value)} value={"sale"} checked={isRadio === "sale"} type="radio" name='ggo' className="ms-3 me-1" id='sale' />
                                            <label style={{ cursor: "pointer" }} htmlFor="rahn">اجاره</label>
                                            <input onChange={(e) => changeHandler(e.target.value)} value={"rahn"} checked={isRadio === "rahn"} type="radio" name='ggo' id='rahn' className="ms-3 me-1" />
                                            <select className='select-estate' name="" id="" onChange={(e) => changeHandler(e.target.value)}>
                                                <option value="all" className='form-control'>پیش فرض</option>
                                                <option value="new">جدیدترین</option>
                                                <option value="old">قدیمی ترین</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {dataCart &&
                            dataCart.map((i) => (
                                <div className="col-md-4 p-4 pb-0 p-sm-3" key={i.id}>
                                    <LoopCartEstate key={i.id} {...i} />
                                </div>
                            ))
                        }
                        <div className="col-md-12">
                            <Pagination data={allData} clicker={setDataCart} num={4} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
