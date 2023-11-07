import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Address from '../PanelUsers/Address/Address'
import { IoWalletOutline } from 'react-icons/io5'
import { ImCreditCard } from 'react-icons/im'
import { TbCurrencyDollarOff } from 'react-icons/tb'
import { IoWarningOutline } from 'react-icons/io5'
import './BuyProduct.css'
import { Accordion, Table } from 'react-bootstrap'
import swal from 'sweetalert'
import { useSelector } from 'react-redux'
import { restartArray } from '../../redux'
import { useDispatch } from 'react-redux'
export default function BuyProduct() {
    const [week, setWeek] = useState(Number)
    const [payPal, setPayPal] = useState(false)
    const [payTransit, setPayTransit] = useState(Number)
    const nav = useNavigate()
    const [isShowInternet, setIsShowInternet] = useState(false)
    const [sidebarPrice, setSidebarPrice] = useState(null)
    const [tedad, setTedad] = useState(null)
    const [transitPos, settransitPos] = useState('')
    const [rule, setRule] = useState(false)
    const selectData = useSelector(s => s.shopping)
    const dis = useDispatch()
    useEffect(() => {
        const times = new Date()
        setWeek(times.getDay())
        let kol = {
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
            default: kol.week = '(یکشنبه)SUN'
        }
        setPayTransit(35000)
        settransitPos("پست ملی")
        const gog = []
        const num = []
        selectData.forEach(element => {
            gog.push(element.complus * element.price)
            num.push(element.complus)
        })
        const number = num.reduce((a, b) => a + b)
        const hol = gog.reduce((a, b) => a + b)
        setTedad(number)
        setSidebarPrice(hol)

    }, [])
    const ruleSite = () => {
        swal({ title: 'این بخش هنوز تکمیل نشده', icon: 'error', text: 'قوانین خاصی وجود نداره سایت واقعی نیست!' })
        setRule(true)
    }
    const checkSite = () => {
        if (rule && payPal) {
            swal({
                title: 'اتمام پرداخت',
                text: 'پرداخت انجام شده و به صفحه پیشخوان کاربر هدابت میشوید',
                icon: 'success',
                buttons: ['بازگشت', 'حساب کاربری']
            }).then((good) => {
                if (good) {
                    nav('/dashboard/my-account')
                    dis(restartArray())
                }
            })
        } else {
            if (rule) {
                return swal({ icon: 'info', text: 'روش پرداخت را انتخاب کنید' })
            }
            if (payPal) {
                return swal({ icon: 'info', text: 'قوانین سایت رو مطالعه کرده و تیک آن را بزنید' })
            }
            swal({ text: 'یکی از روش های پرداخت رو انتخاب کنید و تیک قوانین سایت رو که در پایین در بخش قوانین قرار دارد رو بزنید', icon: 'warning' })
        }

    }
    const payHandler = (e) => {
        setPayTransit(Number(e.target.value))
        const name = e.target.id
        if (name === 'پست ملی' || name === 'تیپاکس' || name === 'اکسپرس') {
            settransitPos(e.target.id)
        } else {
            settransitPos('پیشتاز ' + e.target.id)
        }
    }
    const offHandler = () => {
        swal({ title: 'هنوز این بخش تکمیل نشده', icon: 'warning' })
    }
    return (
        <>
            <Header />
            <section className='buy-product py-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="pay-box bg-pay mb-3">
                                        <h5 className='text-info mb-3'>روش پرداخت خود را انتخاب کنید :</h5>
                                        <div className="box-pay-choose">
                                            <input onClick={() => setIsShowInternet(true)} type="radio" name="flexRadioDefault1" className="form-check-input ms-2 mt-2" id='darmahal' />
                                            <i className='mx-2'><ImCreditCard /></i>
                                            <label style={{ cursor: 'pointer' }} htmlFor='darmahal' >پرداخت اینترنتی</label>
                                            <span>به صورت انلاین با تمامی کارت های بانکی</span>
                                        </div>
                                        <div className={`box-pay-internet ${isShowInternet && 'box-pay-internet-show'}`}>
                                            <div className='my-3'>
                                                <input onClick={() => setPayPal(true)} className="form-check-input ms-2" type="radio" name="flexRadioDefault" id="saman"></input>
                                                <label style={{ cursor: 'pointer' }} htmlFor='saman'>بانک سامان</label>
                                            </div>
                                            <div className='my-3'>
                                                <input onClick={() => setPayPal(true)} className="form-check-input ms-2" type="radio" name="flexRadioDefault" id="zarin"></input>
                                                <label style={{ cursor: 'pointer' }} htmlFor='zarin'>زرین پرداخت (پیشنهادی)</label>
                                            </div>
                                            <div className='my-3'>
                                                <input onClick={() => setPayPal(true)} className="form-check-input ms-2" type="radio" name="flexRadioDefault" id="melat"></input>
                                                <label style={{ cursor: 'pointer' }} htmlFor='melat'>بانک ملت</label>
                                            </div>
                                        </div>
                                        <div className="box-pay-choose">
                                            <input onClick={() => { setIsShowInternet(false), setPayPal(true) }} type="radio" name="flexRadioDefault1" className="form-check-input ms-2 mt-2" id='internety' />
                                            <i className='mx-2'><IoWalletOutline /></i>
                                            <label style={{ cursor: 'pointer' }} htmlFor='internety' >پرداخت در محل</label>
                                            <span>پرداخت پس از دریافت سفارش با تمامی کارت های بانکی</span>
                                        </div>
                                        <div className="off-pay mt-5">
                                            <label className='d-block fs-5'>اگر کد تخفیف دارید وارد کنید : </label>
                                            <input type="text" className="user-input me-3 mt-2 w-50" placeholder='کد تخفیف...' />
                                            <button className='button me-sm-3 m-0' onClick={() => offHandler()}> ثبت کد <i className='fs-5'><TbCurrencyDollarOff /></i></button>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="desc-order bg-pay mb-3">
                                        <h5 className='text-info mb-3'>خلاصه سفارش</h5>
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>ردیف</th>
                                                    <th>سفارشات</th>
                                                    <th>قیمت</th>
                                                    <th>تعداد</th>
                                                    <th>رنگ</th>
                                                    <th>تخفیف</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {selectData && selectData.map((i) => (
                                                    <tr key={i.id}>
                                                        <td>1</td>
                                                        <td>{i.title}</td>
                                                        <td>{(i.price + 0).toLocaleString()}</td>
                                                        <td>{i.complus}</td>
                                                        <td>رنگ مشکی</td>
                                                        <td>{i.offer ? i.offer : "0"}%</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="adress-pay bg-pay mb-3">
                                        <div className="row">
                                            <h5 className='text-info mb-3'>آدرس</h5>
                                            <Address />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="time-pay bg-pay mb-3">
                                        <h5 className='text-info'>روش ارسال بسته </h5>
                                        <div className='my-3'>
                                            <input className="form-check-input ms-2" type="radio" name="flexRadioDefault5"
                                                id="پست ملی" onChange={payHandler} value={35000} checked={payTransit === 35000}></input>
                                            <label style={{ cursor: 'pointer' }} htmlFor='پست ملی'>شرکت ملی پست (ارسال کالا بین 7 تا 10 روز کاری) : {(35000).toLocaleString()} تومان</label>
                                        </div>
                                        <div className='my-3'>
                                            <input className="form-check-input ms-2" type="radio" name="flexRadioDefault5"
                                                id="تیپاکس" onChange={payHandler} value={90000}></input>
                                            <label style={{ cursor: 'pointer' }} htmlFor='تیپاکس'>تیپاکس (ارسال کالا بین 3 تا 5 روز کاری) : {(90000).toLocaleString()} تومان</label>
                                        </div>
                                        <div className='my-3'>
                                            <input className="form-check-input ms-2" type="radio" name="flexRadioDefault5"
                                                id="اکسپرس" onChange={payHandler} value={110000}></input>
                                            <label style={{ cursor: 'pointer' }} htmlFor='اکسپرس'>اکسپرس (ارسال کالا بین 3 تا 5 روز کاری) : {(110000).toLocaleString()} تومان</label>
                                        </div>
                                        <span className='mb-3 mt-5 d-block'> پست پیشتاز (ارسال کالا بین 1 تا 2 روز کاری) : {(150000).toLocaleString()} تومان</span>
                                        <Accordion>
                                            {week === 6 ? '' :
                                                (<Accordion.Item eventKey="6">
                                                    <Accordion.Header>شنبه</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className='my-3'>
                                                            <input className="form-check-input ms-2" type="radio" name="flexRadioDefault5"
                                                                value={150000} onChange={payHandler} id="شنبه (9 تا 12)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='شنبه (9 تا 12)'>ساعت 9 تا 12 (صبح)</label>
                                                        </div>
                                                        <div className='my-3'>
                                                            <input className="form-check-input ms-2" type="radio" name="flexRadioDefault5"
                                                                value={150000} onChange={payHandler} id="شنبه (12 تا 15)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='شنبه (12 تا 15)'>ساعت 12 تا 15 (عصر)</label>
                                                        </div>
                                                        <div className='my-3'>
                                                            <input className="form-check-input ms-2" type="radio" name="flexRadioDefault5"
                                                                value={150000} onChange={payHandler} id="شنبه (15 تا 18)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='شنبه (15 تا 18)'>ساعت 15 تا 18 (عصر)</label>
                                                        </div>
                                                        <div className='my-3'>
                                                            <input className="form-check-input ms-2" type="radio" name="flexRadioDefault5"
                                                                value={150000} onChange={payHandler} id="شنبه (18 تا 21)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='شنبه (18 تا 21)'>ساعت 18 تا 21 (شب)</label>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>)
                                            }
                                            {week === 0 ? '' :
                                                <Accordion.Item eventKey="7">
                                                    <Accordion.Header>یکشنبه</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="یکشنبه (9 تا 12)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='یکشنبه (9 تا 12)'>ساعت 9 تا 12 (صبح)</label>
                                                        </div>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="یکشنبه (12 تا 15)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='یکشنبه (12 تا 15)'>ساعت 12 تا 15 (عصر)</label>
                                                        </div>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="یکشنبه (15 تا 18)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='یکشنبه (15 تا 18)'>ساعت 15 تا 18 (عصر)</label>
                                                        </div>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="یکشنبه (18 تا 21)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='یکشنبه (18 تا 21)'>ساعت 18 تا 21 (شب)</label>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            }
                                            {week === 1 ? '' :
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header aria-disabled={true}>دوشنبه</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="دوشنبه (9 تا 12)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='دوشنبه (9 تا 12)'>ساعت 9 تا 12 (صبح)</label>
                                                        </div>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="دوشنبه (12 تا 15)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='دوشنبه (12 تا 15)'>ساعت 12 تا 15 (عصر)</label>
                                                        </div>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="دوشنبه (15 تا 18)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='دوشنبه (15 تا 18)'>ساعت 15 تا 18 (عصر)</label>
                                                        </div>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="دوشنبه (18 تا 21)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='دوشنبه (18 تا 21)'>ساعت 18 تا 21 (شب)</label>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            }
                                            {week === 2 ? '' :
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header aria-disabled={true}>سه شنبه</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="سه شنبه (9 تا 12)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='سه شنبه (9 تا 12)'>ساعت 9 تا 12 (صبح)</label>
                                                        </div>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="سه شنبه (12 تا 15)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='سه شنبه (12 تا 15)'>ساعت 12 تا 15 (عصر)</label>
                                                        </div>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="سه شنبه (15 تا 18)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='سه شنبه (15 تا 18)'>ساعت 15 تا 18 (عصر)</label>
                                                        </div>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="سه شنبه (18 تا 21)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='سه شنبه (18 تا 21)'>ساعت 18 تا 21 (شب)</label>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            }
                                            {week === 3 ? '' :
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header aria-disabled={true}>چهارشنبه</Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="چهارشنبه (9 تا 12)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='چهارشنبه (9 تا 12)'>ساعت 9 تا 12 (صبح)</label>
                                                        </div>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="چهارشنبه (12 تا 15)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='چهارشنبه (12 تا 15)'>ساعت 12 تا 15 (عصر)</label>
                                                        </div>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="چهارشنبه (15 تا 18)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='چهارشنبه (15 تا 18)'>ساعت 15 تا 18 (عصر)</label>
                                                        </div>
                                                        <div className='my-3'>
                                                            <input value={150000} onChange={payHandler} className="form-check-input ms-2" type="radio" name="flexRadioDefault5" id="چهارشنبه (18 تا 21)"></input>
                                                            <label style={{ cursor: 'pointer' }} htmlFor='چهارشنبه (18 تا 21)'>ساعت 18 تا 21 (شب)</label>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            }
                                        </Accordion>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="factore bg-pay">
                                        <h5 className='text-info'>قوانین سایت <IoWarningOutline /></h5>
                                        <div className='my-3 d-sm-flex d-inline align-items-center'>
                                            <input checked={rule} onChange={() => setRule(prev => !prev)} className=" ms-2" type="checkbox" id="rule" style={{ width: '1rem', height: '1rem' }}></input>
                                            <label className='d-inline' style={{ cursor: 'pointer' }} htmlFor='rule'>قوانین سایت رو مطالعه کردم و با آن موافقت میکنم.</label>
                                            <span className='text-warning me-2 mb-4 mb-sm-0 d-inline-block' onClick={ruleSite} style={{ cursor: 'pointer' }}>(مطالعه قوانین)</span>
                                        </div>
                                        <p>برای دریافت  فاکتور به حساب کاربری مراجعه کرده و در بخش سفارشات میتونید فاکتور خود را دریافت کنید.</p>
                                        <p>در صورتی مرجوعی محصولات پذیرفته میشود که پلمپ بسته آن ها باز نشده باشد و یا جعبه اصلی اسیب ندیده باشد !</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {selectData && (
                            <div className="col-md-4 mt-3 mt-sm-0">
                                <div className="sidebar-pay bg-pay">
                                    <h5 className='text-info'>تعداد کالا ها ({tedad})</h5>
                                    {selectData.map((i) => (<span className='d-block' key={Math.random(4)}>{i.title}</span>))}
                                    <div className='sidebar-post-pay'>
                                        <h5 className='text-info'>هزینه ارسال :  {payTransit.toLocaleString()} تومان</h5>
                                        <p> ارسال با : <span className='text-info'>{transitPos}</span></p>
                                        <p className='m-0'>هزینه ارسال شما نسبت به آدرس، زمان تحویل ، حجم و وزن بسته شما متغیر است!</p>
                                    </div>
                                    <div className="pay sidbar-cast">
                                        <h5 className='text-info'>محاسبه قیمت :</h5>
                                        <span className='d-block'>قیمت کالا ها ({tedad}) : {(sidebarPrice + 0).toLocaleString()} تومان</span>
                                    </div>
                                    <div className="sidebar-finish">
                                        <span>مبلغ قابل پرداخت : </span>
                                        <span>{(sidebarPrice + payTransit).toLocaleString()} تومان</span>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <button className='button w-50' onClick={checkSite}>پرداخت</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
