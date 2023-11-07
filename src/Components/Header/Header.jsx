import { useEffect, useRef, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiSun } from 'react-icons/bi'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'
import ImgTag from '../ImgTag/ImgTag';
import { darkTheme, lightTheme } from '../../reduxDark';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import ButtonBuy from '../ButtonBuy/ButtonBuy';
import { BsSearch } from "react-icons/bs";
import { RiMenu3Fill } from "react-icons/ri";
import { FcHome, FcShop, FcDepartment, FcManager, FcTemplate, FcMindMap, FcFinePrint, FcHighPriority } from "react-icons/fc"
import { FaSearchPlus, FaTelegram, FaSearchMinus, FaInstagram } from 'react-icons/fa'
import swal from 'sweetalert';
export default function Header() {
    const diss = useDispatch()
    const inputSearch = useRef(null)
    const select = useSelector(s => s.theme)
    const [scrollPage, setScollPage] = useState(0)
    const [scrollChange, setScrollChange] = useState(false)
    const [upperScroll, setUpperScoll] = useState(false)
    const [upMenu, setUpMenu] = useState(false)
    const [responsive, setResponsive] = useState(false)
    const [isSearchShow, setIsSearchShow] = useState(false)
    const copyLink = () => {
        navigator.clipboard.writeText(`@Reza_kh666`).then(swal({ title: "لینک تلگرام کپی شد", icon: "success" }))
    }
    const copyLink2 = () => {
        navigator.clipboard.writeText(`reza_kha.ni`).then(swal({ title: "لینک اینستاگرام کپی شد", icon: "success" }))
    }
    const ShowSearch = (i) => {
        setIsSearchShow(e => !e)
        if (!i) {
            const hol = setTimeout(() => {
                inputSearch.current.focus()
            }, 100)
            return () => clearTimeout(hol)
        }
    }
    const writeSearch = (e) => {
        if (e.keyCode === 13) {
            swal({ title: "در دسترس نیست !", text: "هنوز بخش سرچ رو انجام ندادم", icon: "warning" }).then(e.target.value = "").then(setIsSearchShow(e => !e))
        }
    }
    useEffect(() => {
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
        if ((window.innerHeight + scrollPage) < 1000) {
            return setScrollChange(false)
        }
        setScrollChange(true)
        if (upperScroll < upper) {
            setUpMenu(false)
        }
        if (upperScroll > upper) {
            setUpMenu(true)
        }
    }, [scrollPage])

    const changeTheme = () => {
        if (select.theme === "body-dark") {
            return diss(lightTheme())
        }
        if (select.theme === "body-light") {
            return diss(darkTheme())
        }
        return diss(darkTheme())
    }
    return (
        <>
            <section className="menu-top">
                <div className="container d-flex justify-content-center">
                    <div className={`menu-head ${upMenu && 'up-menu'} ${scrollChange && 'menu-head-scrool'}`}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="kol container">
                                    <div className="row">
                                        <div className="col-md-7 col-5 d-flex align-items-center">
                                            <div className="row position-relative ">
                                                <div className="after-rotate"></div>
                                                <div className="col-md-12" id="menu-1">
                                                    <div className={`menu-header align-items-center ${scrollChange && 'menu-header-hide'}`}>
                                                        <ul className="d-flex w-100 justify-content-between me-3 mb-0" style={{ marginLeft: '100px' }}>
                                                            <li><NavLink to={'/'}>خانه</NavLink></li>
                                                            <li><NavLink to={'/about-me'}>درباره من</NavLink></li>
                                                            <li><NavLink to={'/about-site'}>درباره سایت</NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-2 d-flex align-items-center hamberger p-0 " id="menu-2">
                                                    <div className="respons-menu">
                                                        <button className='asly' onClick={() => setResponsive(true)} style={{ fontSize: "1.5rem" }}><RiMenu3Fill /></button>
                                                        <Offcanvas placement='end' show={responsive} onHide={() => setResponsive(false)} >
                                                            <Offcanvas.Header closeButton>
                                                                <Offcanvas.Title>منو اصلی</Offcanvas.Title>
                                                            </Offcanvas.Header>
                                                            <Offcanvas.Body>
                                                                <div className="menu-berger">
                                                                    <ul className="p-0">
                                                                        <li><i className='ms-2'><FcHome /></i><NavLink to={'/'}>خانه</NavLink></li>
                                                                        <li><i className='ms-2'><FcShop /></i><NavLink to={'/shopping'}>فروشگاهی</NavLink></li>
                                                                        <li><i className='ms-2'><FcDepartment /></i><NavLink to={'/estate/page/1'}>املاک</NavLink></li>
                                                                        <li><i className='ms-2'><FcTemplate /></i><NavLink to={'/blog'}>وبلاگی</NavLink></li>
                                                                        <li><i className='ms-2'><FcHighPriority /></i><NavLink to={'/landing'}>لندینگ</NavLink></li>
                                                                        <li><i className='ms-2'><FcMindMap /></i><NavLink to={'/dashboard/my-account'}>داشبورد</NavLink></li>
                                                                        <li><i className='ms-2'><FcManager /></i><NavLink to={'/about-me'}>درباره من</NavLink></li>
                                                                        <li><i className='ms-2'><FcFinePrint /></i><NavLink to={'/about-site'}>درباره سایت</NavLink></li>
                                                                    </ul>
                                                                    <div className="d-flex justify-content-evenly">
                                                                        <span className='fs-3 text-dark' onClick={copyLink}><FaTelegram /></span>
                                                                        <span className='fs-3 text-dark' onClick={copyLink2}><FaInstagram /></span>
                                                                    </div>

                                                                </div>
                                                            </Offcanvas.Body>
                                                        </Offcanvas>
                                                    </div>
                                                    <div className={`switch me-sm-1 me-0 ${select.theme === 'body-dark' ? '' : 'dark'}`} onClick={changeTheme}>
                                                        <span className="starping"><i><BiSun className='text-light' /></i></span>
                                                        <div className="flicker"></div>
                                                        <div className="moon text-info"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-10 order-3 menu-bottom" id="noneDisplay">
                                                    <div className="menu-header align-items-center d-flex justify-content-center">
                                                        <ul className="d-flex w-100 justify-content-between m-0">
                                                            <li><NavLink to={'/landing'}>لندینگ
                                                            </NavLink></li>
                                                            <li><NavLink to={'/blog'}>وبلاگی</NavLink></li>
                                                            <li><NavLink to={'/shopping'}>فروشگاهی</NavLink></li>
                                                            <li><NavLink to={'/estate/page/1'}>املاک</NavLink></li>
                                                            <li><NavLink to={'/panel-admin/dashboard'}>پنل ادمین</NavLink></li>
                                                            <li><NavLink to={'/dashboard/my-account'}>داشبورد</NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5 col-7 d-flex align-items-center p-0">
                                            <div className="row left-menu align-items-center w-100">
                                                <div className="col-md-8 col-9 d-flex justify-content-evenly">
                                                    <i><ButtonBuy /></i>
                                                    <div className={`search-form-box m-0 me-md-3 ${isSearchShow ? 'search-show' : ''}`}>
                                                        <input className="input-seacrh-box" onKeyDown={writeSearch} ref={inputSearch} placeholder="جستجو" />
                                                        <button className="btn-form-search"><BsSearch /></button>
                                                    </div>
                                                    <button className='isShow-search' onClick={() => ShowSearch(isSearchShow)}>{!isSearchShow ? <FaSearchPlus /> : <FaSearchMinus />}</button>
                                                </div>
                                                <div className="col-md-4 col-3 p-0"><Link to={'/'}>
                                                    <ImgTag src={"/brand.png"} alt={"brandSite"} />
                                                </Link></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}