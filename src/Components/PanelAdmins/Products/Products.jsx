import Recharts from "../../Recharts/Recharts";
import { useEffect, useState } from "react";
import UserTable from "../UserTable/UserTable";
import Accordion from 'react-bootstrap/Accordion';
import { Table } from "react-bootstrap";
import './Products.css'
import swal from "sweetalert";
export default function Products() {
  const [chart, setChart] = useState(null)
  const [valueName, setValueName] = useState('')
  const [valueEmail, setValueEmail] = useState('')
  const [valuePhone, setValuePhone] = useState('')
  const products = [
    { id: 430, name1: 'Black shark 5 pro', name2: 'شیائومی', name3: 35000000, name4: 24 },
    { id: 431, name1: '14 pro max', name2: 'آیفون', name3: 95000000, name4: 17 },
    { id: 432, name1: 'Galaxy S21 FE 5G', name2: 'سامسونگ', name3: 19800000, name4: 45 },
    { id: 433, name1: 'Honor 50', name2: 'آنر', name3: 15000000, name4: 40 },
    { id: 434, name1: 'Galaxy S23 Ultra', name2: 'سامسونگ', name3: 35000000, name4: 30 },
    { id: 435, name1: 'Redmi note 12 pro', name2: 'شیائومی', name3: 21000000, name4: 20 },
  ]
  useEffect(() => {
    import('../../../server').then(res => setChart(res.xAxisProduct))
  }, [])
  const showNewUser = () => {
    if (valueName && valueEmail && valuePhone) {
      swal({
        title: 'اطلاعات به سمت بک اند ارسال شد',
        icon: 'success',
        buttons: 'اوکی'
      })
    } else {
      swal({
        title: "فیلد های لازم رو پرکن",
        icon: 'warning'
        , buttons: 'باشه'
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
              <div className="col-md-6">
                <input className="input-text"
                  onChange={(e) => setValueName(e.target.value)} value={valueName} type="text" placeholder="نام محصول" /></div>

              <div className="col-md-6">
                <input className="input-text"
                  onChange={(e) => setValuePhone(e.target.value)} value={`${(valuePhone).toLocaleString()}`} type="text" placeholder="قیمت" />
              </div>
              <div className="col-md-2">
                <input className="input-text"
                  onChange={(e) => setValueEmail(e.target.value)} minLength={0} value={valueEmail} type="number" placeholder="تعداد" />
              </div>
              <div className="col-md-8 d-flex justify-content-around align-items-center">
                <input type="text" className="input-text w-25 me-3" name="" placeholder="تخفیف دارین وارد کنید " id="" />
                <input type="number" className="input-text w-25 me-3" name="" placeholder="تعداد روز تخفیف " id="" />
                <input type="file" className="uploader" />
              </div>
              <div className="col-md-2 d-flex align-items-center">
                <select name="" id="" className="select-user w-100">
                  <option value="User">دسته بندی</option>
                  <option value="Author">شیائومی</option>
                  <option value="Admin">سامسونگ</option>
                  <option value="Manager">آیفون</option>
                  <option value="Manager">هوآوی</option>
                  <option value="Manager">آنر</option>
                  <option value="Manager">ریلمی</option>
                </select>
              </div>
              <div className="col-md-6 mt-3">
                <h4 className="text-info mb-3">مشخصات</h4>
                <div className="accordion-product">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>مشخصات کلی</Accordion.Header>
                      <Accordion.Body>
                        <Table>
                          <thead className="table table-striped table-bordered table-hover table-dark">
                            <tr><th>پردازنده گرافیکی</th><th><input type="text" className="input-text" /></th></tr>
                            <tr><th>پشتیبانی از سیم کارت</th><th><input type="text" className="input-text" /></th></tr>
                            <tr><th>جنس بدنه</th><th><input type="text" className="input-text" /></th></tr>
                          </thead>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>صفحه نمایش</Accordion.Header>
                      <Accordion.Body>
                        <Table>
                          <thead className="table table-striped table-bordered table-hover table-dark">
                            <tr><th>نوع صفحه نمایش</th><th><input type="text" className="input-text" /></th></tr>
                            <tr><th> رزولوشن</th><th><input type="text" className="input-text" /></th></tr>
                            <tr><th>تراکم پیکسل</th><th><input type="text" className="input-text" /></th></tr>
                            <tr><th>درصد نسبت صفحه نمایش به بدنه</th><th><input type="text" className="input-text" /></th></tr>
                            <tr><th>ویژگی‌ های مهم صفحه نمایش</th><th><input type="text" className="input-text" /></th></tr>
                          </thead>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>دوربین</Accordion.Header>
                      <Accordion.Body>
                        <Table>
                          <thead className="table table-striped table-bordered table-hover table-dark">
                            <tr><th>کیفیت دوربین</th><th><input type="text" className="input-text" /></th></tr>
                            <tr><th>دوربین جلو</th><th><input type="text" className="input-text" /></th></tr>
                            <tr><th>مشخصات سخت‌ افزاری دوربین</th><th><input type="text" className="input-text" /></th></tr>
                            <tr><th>سایر ویژگی‌ های مهم دوربین</th><th><input type="text" className="input-text" /></th></tr>
                          </thead>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>حافظه</Accordion.Header>
                      <Accordion.Body>
                        <Table>
                          <thead className="table table-striped table-bordered table-hover table-dark">
                            <tr><th>حافظه داخلی</th><th><input type="text" className="input-text" /></th></tr>
                            <tr><th>حافظه RAM</th><th><input type="text" className="input-text" /></th></tr>
                          </thead>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>سایر قابلیت ها</Accordion.Header>
                      <Accordion.Body>
                        <Table>
                          <thead className="table table-striped table-bordered table-hover table-dark">
                            <tr><th>ظرفیت باتری</th><th><input type="text" className="input-text" /></th></tr>
                            <tr><th>نوع باتری</th><th><input type="text" className="input-text" /></th></tr>
                            <tr><th>سایر مشخصات مهم</th><th><input type="text" className="input-text" /></th></tr>
                          </thead>
                        </Table>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>

              </div>
              <div className="col-md-6 mt-3">
                <h4 className="text-info mb-3">توضیحات تکمیلی</h4>
                <textarea name="" placeholder="توضیحات بیشتر..." className="textareass" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="col-md-12 mt-3">
                <button className="button" onClick={() => showNewUser()}>ثبت اطلاعات</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="rechartBg">
            <Recharts grid title="محصولات پر فروش" dataKesy='فروش' dataKesy3="قیمت" color3={'#1a6db6'} dataKesy2="بازدید" data={chart} />
          </div>
        </div>
        <div className="col-md-12">
          <UserTable data={products} title={'محصولات'} name1={'نام محصول'} name2={'دسته بندی'} name3={'قیمت'} name4={'تعداد باقی مانده'} />
        </div>
      </div>
    </>
  )
}
