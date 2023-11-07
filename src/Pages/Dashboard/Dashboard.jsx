import { MdDashboardCustomize } from 'react-icons/md'
import { GiShoppingCart } from 'react-icons/gi'
import { VscCommentDiscussion } from 'react-icons/vsc'
import { VscSettings } from 'react-icons/vsc'
import { GiEntryDoor } from 'react-icons/gi'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { CgNotes } from 'react-icons/cg'
import './Dashboard.css'
import { useEffect } from 'react'

export default function Dashboard() {
  const kol = useParams()
  useEffect(() => {
  }, [kol])
  return (
    <>
      <Header />
      <section className='dashboard'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="head-dashboard text-center text-sm-end">
                <h3 className='text-light'>
                  حساب کاربری من
                </h3>
                <h5 className='text-light'>
                  پیشخوان
                </h5>
              </div>
            </div>
            <div className="col-md-3">
              <div className="sidebar-user">
                <NavLink to={'my-account'}><i><MdDashboardCustomize /></i>پیشخوان</NavLink>
                <NavLink to={'edit-account'}><i><VscSettings /></i>جزئیات حساب کاربری</NavLink>
                <NavLink to={'orders'}><i><CgNotes /></i>سفارشات</NavLink>
                <NavLink to={'cart'}><i><GiShoppingCart /></i>سبد خرید</NavLink>
                <NavLink to={'tikets'}><i><VscCommentDiscussion /></i>پشتیبانی</NavLink>
                <NavLink to={'/'} ><i><GiEntryDoor /></i> خروج</NavLink>
              </div>
            </div>
            <div className="col-md-9 p-0 pt-3">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}
