import swal from 'sweetalert'
import './Tickets.css'
import { Table } from 'react-bootstrap'
import { BsEye } from 'react-icons/bs'
export default function Tickets() {
  const handler = () => {
    swal({ title: 'درخواست شما ارسال شد', icon: 'success', text: 'میدونم هنوز کامل نشده !' })
  }
  const clickHandler = () => {
    swal({title:"هنوز تکمیل نشده",icon:"warning"})
  }
  return (
    <>
      <section className='tickets'>
        <div className="row align-items-center">
          <div className="col-md-6">
            <label htmlFor="">موضوع پشتیبانی :</label>
            <input type="text" className='input-text' />
          </div>
          <div className="col-md-6 text-start score-num my-4 my-0">
            <span>سطح اهمیت درخواست خود را  وارد کنید</span>
            <select name="" id="" className='select-tickets me-3'>
              <option value="">کم</option>
              <option value="">متوسط</option>
              <option value="">زیاد</option>
            </select>
          </div>
          <div className="col-md-12">
            <label htmlFor="">متن درخواست خود را وارد کنید : </label>
            <textarea name="" id="" cols="30" rows="10" className='input-text'></textarea>
            <button className='button mt-3' onClick={handler}>ثبت درخواست</button>
          </div>
          <div className="col-md-12">
            <h4 className='text-info mt-5 mb-3'>درخواست های پاسخ داده شده</h4>
            <Table>
              <thead>
                <tr>
                  <th>ردیف</th>
                  <th>موضوع</th>
                  <th>تاریخ</th>
                  <th>نمایش</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>زمان ارسال</td>
                  <td>1402/3</td>
                  <td><button className='button' onClick={clickHandler}>نمایش <BsEye className='me-1' /></button></td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="col-md-12">
            <h4 className='text-info mt-5 mb-3'>درخواست های پاسخ داده نشده</h4>
            <Table>
              <thead>
                <tr>
                  <th>ردیف</th>
                  <th>موضوع</th>
                  <th>تاریخ</th>
                  <th>نمایش</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>زمان ارسال</td>
                  <td>1402/3</td>
                  <td><button className='button' onClick={clickHandler}>نمایش <BsEye className='me-1' /></button></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    </>
  )
}
