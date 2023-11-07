import { useState } from 'react'
import './Setting.css'
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { IoEyeSharp } from 'react-icons/io5'
import swal from 'sweetalert'
export default function Setting() {
  const [isPass, setPassShow] = useState(false)
  const showNewUser =()=>{
    swal({
      title:"اطلاعات شما ثبت شد",
      icon:"success",
      buttons:"باشه"
    })
  }
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="new-user">
            <div className="row">
              <h3 className="text-info">اطلاعات حساب کاربری</h3>
              <div className="col-md-12">
                <form action="">
                  <span className="text-info">نام کاربری : </span>
                  <input type="text" className="input-text w-25" />
                  <span className='position-relative'>
                    <span className="text-info me-3">رمز عبور : </span>
                    <span onClick={() => setPassShow(prev => !prev)} className='change-pass'>
                      <i className='text-info'> {isPass ? <BsFillEyeSlashFill /> : <IoEyeSharp />} </i>
                    </span>
                    <input type={isPass ? 'password' : 'text'} className="input-text w-25" />
                  </span>
                  <span className="text-info me-3">عکس پروفایل : </span>
                  <input type="file" className="uploader" />
                </form>
                <button className="button mt-3" onClick={() => showNewUser()}>ثبت اطلاعات</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
