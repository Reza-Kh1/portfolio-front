import swal from 'sweetalert'
import './EditAccount.css'
import { useState } from 'react'
import Address from '../Address/Address'
export default function EditAccount() {
  const [value1, set1] = useState('')
  const [value2, set2] = useState('')
  const [value3, set3] = useState('')

  const changeinfo = () => {
    swal({
      title: 'مشخصات با موفقیت تغییر یافت !',
      icon: 'success',
      buttons: 'باشه'
    })
    set1('')
    set2('')
    set3('')
  }
  return (
    <>
      <div className="edit-account">

        <div className="row">
          <Address />
          <div className="col-md-12">
            <span className='change-pas'>تغییر گذرواژه</span>
            <label htmlFor="">گذرواژه قبلی :</label>
            <input onChange={(e) => set1(e.target.value)} value={value1} type="text" className='user-input' />
          </div>
          <div className="col-md-12">
            <label htmlFor="">گذرواژه جدید (درصورتی که قصد تغییر ندارید خالی بگذارید) :</label>
            <input onChange={(e) => set2(e.target.value)} value={value2} type="text" className='user-input' />
          </div>
          <div className="col-md-12">
            <label htmlFor="">تکرار گذرواژه (درصورتی که قصد تغییر ندارید خالی بگذارید) :</label>
            <input onChange={(e) => set3(e.target.value)} value={value3} type="text" className='user-input' />
            <button onClick={() => changeinfo()} className='button mt-3'>ذخیره تغییرات</button>
          </div>
        </div>
      </div>
    </>
  )
}
