import UserTable from "../UserTable/UserTable";
import { newUser } from "../../../server";
import Recharts2 from "../../Recharts/Recharts2";
import { BsFillEyeSlashFill } from 'react-icons/bs'
import { IoEyeSharp } from 'react-icons/io5'
import './Users.css';
import { useEffect, useState } from "react";
import swal from "sweetalert";
export default function Users() {
  const [chart, setChart] = useState(null)
  const [valueName, setValueName] = useState('')
  const [valuePass, setValuePass] = useState('')
  const [isPass, setPassShow] = useState(false)
  const [valueEmail, setValueEmail] = useState('')
  const [valuePhone, setValuePhone] = useState('')
  const [select, setSelect] = useState('')

  useEffect(() => {
    import('../../../server').then(res => setChart(res.xAxisUser))
  }, [])
  const showNewUser = () => {
    if (valueName && valuePass && valueEmail && valuePhone) {
      const kol = `
   } = const newUser
      ,name: ${valueName}
      ,pasword: ${valuePass}
      ,email: ${valueEmail}
      ,phoneNumber: ${valuePhone}
      user: ${select}
      {
    
      } , 'fetch('http/localhost/newuser 
    , ' method: 'POST
    } : headers 
       , 'Content-Type' : 'application/json'
        'Authorization' : 'Bearer 45a45d6a5dwqd'
     , {
      body: JSON.stringify(newUser)
    { ( `
      swal({
        title: 'اطلاعات ارسال شد',
        text: kol,
        icon: 'success',
        buttons: "فهمیدم"
      })
    }
  }
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="new-user mb-4">
            <h3 className="text-info">ثبت نام</h3>
            <div className="row">
              <div className="col-md-6"><input className="input-text"
                onChange={(e) => setValueName(e.target.value)} value={valueName} type="text" placeholder="نام کاربری" />
              </div>
              <div className="col-md-6">
                <span className='position-relative'>
                  <span onClick={() => setPassShow(prev => !prev)} className='change-pass'>
                    <i className='text-info'> {isPass ? <BsFillEyeSlashFill /> : <IoEyeSharp />} </i>
                  </span>
                  <input type={isPass ? 'password' : 'text'} placeholder="پسورد" onChange={(e) => setValuePass(e.target.value)} value={valuePass} className="input-text" />
                </span>
              </div>
              <div className="col-md-6"><input className="input-text"
                onChange={(e) => setValueEmail(e.target.value)} value={valueEmail} type="gamil" placeholder="ایمیل" /></div>
              <div className="col-md-6"><input className="input-text"
                onChange={(e) => setValuePhone(e.target.value)} value={valuePhone} type="number" placeholder="شماره تلفن" /></div>
              <div className="col-md-6 mt-3">
                <select onChange={(e) => setSelect(e.target.value)} name="" id="" className="select-user">
                  <option value="User">کاربر</option>
                  <option value="Author">نویسنده</option>
                  <option value="Admin">ادمین</option>
                  <option value="Manager">مدیر</option>
                </select>
              </div>
              <div className="col-md-6 mt-3">
                <button className="button" onClick={() => showNewUser()}>ثبت اطلاعات</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="recharts-box new-user" style={{ height: '500px' }}>
            <Recharts2 title={"وضعیت ثبت نامی کاربران"} data={chart} dataKesy={"ثبت نام"} />
          </div>
        </div>
        <div className="col-md-12 mt-3">
          <UserTable name1={"نام کاربری"} name2={"پسورد"} name3={"ایمیل"} name4={'شماره تلفن'} data={newUser} title={'کاربران ثبت شده در سایت'} />
        </div>
      </div>
    </>
  )
}
