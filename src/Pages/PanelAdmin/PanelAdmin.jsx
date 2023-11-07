import { useEffect, useRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/PanelAdmins/Sidebar/Sidebar'
import './PanelAdmin.css'
import { massageAdmin } from '../../server'
import { VscCommentDiscussion } from 'react-icons/vsc'
import { FaSearchPlus } from 'react-icons/fa'
import { FaSearchMinus } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa'
import ImgTag from '../../Components/ImgTag/ImgTag'

export default function PanelAdmin() {
  const [boxNotif, setBoxNotif] = useState([])
  const [search, setSearch] = useState(false)
  const [time, setTime] = useState({})
  const [showBell, setShowBell] = useState(false)
  const [readingAll, setReadingAll] = useState(true)
  const gogda = useRef(null)
  const nav = useNavigate()

  useEffect(() => {
    const times = new Date()
    let kol = {
      year: times.getFullYear(),
      month: times.getMonth(),
      day: times.getDate(),
      week: times.getDay()
    }
    switch (kol.week) {
      case 1:
        kol.week = '(دوشنبه)MON'
        break
      case 2:
        kol.week = '(سه شنبه)TUE'
        break
      case 3:
        kol.week = '(چهارشنبه)WED'
        break
      case 4:
        kol.week = '(پنج شنبه)THU'
        break
      case 5:
        kol.week = '(جمعه)FRI'
        break
      case 6:
        kol.week = '(شنبه)SAT'
        break
      case 0:
        kol.week = '(یکشنبه)SUN'
        break
      default:
    }
    setBoxNotif(massageAdmin)
    setTime(kol)
  }, [])

  const clickSearch = (e) => {
    e.prevendDefault
    setSearch(prev => !prev)
    gogda.current.focus()
    gogda.current.value = ''
  }
  const readingMassage = (i) => {
    const newBox = [...boxNotif]
    newBox.filter((f) => {
      if (f.id === i) {
        f.compelete = !f.compelete
      }
    })
    checkCom(newBox)
    setBoxNotif(newBox)
  }
  const checkCom = (data) => {
    const gg = data.filter(f => {
      return f.compelete === false
    })
    if (gg.length === 0) {
      setReadingAll(false)
    } else {
      setReadingAll(true)
    }
  }
  const deleteMassage = (i) => {
    const newBox = [...boxNotif]
    const deletes = newBox.filter((f) => {
      return f.id !== i
    })
    setBoxNotif(deletes)
    checkCom(deletes)
  }
  return (
    <>
      <section className='panel-admin'>
        <div className="container-fluid" style={{ background: "#1e1e1e", minHeight: '100vh', height: '100%' }}>
          <div className="row">
            <div className="col-md-2">
              <Sidebar name1={'داشبورد'} name2={'کاربران'} name3={'محصولات'} name5={'کامنت ها'} name6={'تخفیف'} name7={'حساب کاربری'}
                name8={'خروج از سیستم'} url1={'dashboard'} url2={'users'} url3={'products'} url5={'comments'} url6={'offs'} url7={'setting'} />
            </div>
            <div className="col-md-10 ">
              <div className="outlet-admin">
                <div className="profile-admin">
                  <div className="row w-100 align-items-center">
                    <div className="col-md-3  d-flex">
                      <span className='mt-1'>{time.week}</span>
                      <span className='me-2 mt-1'>
                        {time.year}/
                        {time.month < 10 ? '0' + time.month : time.month}/
                        {time.day < 10 ? '0' + time.day : time.day}</span>
                      <span className='me-5 fs-5 notif-admin' onClick={() => nav('comments')}><VscCommentDiscussion /></span>
                      <div className='me-3 fs-5 bell-admin'>
                        <i className=' notif-admin' onClick={() => setShowBell(true)}><FaBell />
                          {boxNotif.length !== 0 && readingAll && (
                            <span className='have-notif-admin'>!</span>
                          )}
                        </i>
                        {boxNotif.length !== 0 && (

                          <div className={`bell-hover-admin ${showBell && 'bell-show'}`}>
                            <table>
                              <thead></thead>
                              <tbody>
                                {boxNotif.map((i) => (
                                  <tr key={i.id} className='pb-3'>
                                    <td className='massage-admin'><p style={{ color: "aquamarine" }} className={i.compelete ? 'compelete-massage' : ''}>{i.user} : {i.title} </p></td>
                                    <td onClick={() => readingMassage(i.id)}><span className='massage-click'>خوانده شد</span></td>
                                    <td onClick={() => deleteMassage(i.id)}><span className='massage-click'>حذف شود</span></td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            <span className='close-notif' onClick={() => setShowBell(false)}>فهمیدم</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6  d-flex justify-content-center">
                      <input type="search" ref={gogda} className={`search-admin ${search && 'clik-search'}`} placeholder='جستجو کنید' />
                      <button className='button-admin' onClick={e => clickSearch(e)}>{search ? <FaSearchMinus /> : <FaSearchPlus />}</button>
                    </div>
                    <div className="col-md-3 d-flex justify-content-end align-items-center">
                      <span className='ms-3 fs-4'>رضا خانی</span>
                      <div className="img-admin">
                        <ImgTag src={"/img/profilea-dmin.webp"} />
                      </div>
                    </div>
                  </div>
                </div>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
