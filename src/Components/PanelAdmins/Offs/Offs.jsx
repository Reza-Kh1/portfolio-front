import swal from "sweetalert"

export default function Offs() {
 const offShow =()=>{
  swal({
    title:"اطلاعات ارسال شد",
    icon:"success",
    buttons:"باشه"
  })
 }
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="new-user">
            <h3 className='text-info'>مدیریت تخفیف ها</h3>
            <div className="row">
            <div className="col-md-4 align-items-center d-flex">
                <select name="" id="" className='select-user w-100'>
                  <option value="">انتخاب دسته</option>
                  <option value="">گوشی های آیفون</option>
                  <option value="">گوشی های سامسونگ</option>
                  <option value="">گوشی های شیائومی</option>
                  <option value="">گوشی های هوآوی</option>
                  <option value="">گوشی های هانر</option>
                  <option value="">گوشی های نوکیا</option>
                  <option value="">گارد و گلس گوشی</option>
                  <option value="">شارژر و سیم شارژر ها</option>
                  <option value="">بقیه دسته بندی ها</option>
                </select>
              </div>
              <div className="col-md-8 d-flex justify-content-around align-items-center">
                <input type="text" className="input-text w-25 me-3" name="" placeholder="تخفیف وارد کنید " id="" />
                <input type="number" className="input-text w-25 me-3" name="" placeholder="تعداد روز تخفیف " id="" />
              </div>
              <div className="col-md-12">
              <button className="button mt-3" onClick={()=>offShow()}>ثبت اطلاعات</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
