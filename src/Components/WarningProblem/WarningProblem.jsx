import { useState } from 'react'
import './WarningProblem.css'
import { VscWarning } from 'react-icons/vsc'
import { AiOutlineClose } from 'react-icons/ai'

export default function WarningProblem() {
    const [showNotif, setShowNotif] = useState(false)
    const [showMassage, setShowMassage] = useState(false)
    const [showLastMassage, setShowLastMassage] = useState(false)
    const [showBack, setShowBack] = useState(false)
    const [massage, setMassage] = useState('')
    const [textarea, setTextarea] = useState('')

    const showLastModal = () => {
        if (textarea.trim()) {
            setShowMassage(false)
            setShowLastMassage(true)
            setTextarea('')
            setShowBack(false)
            setTimeout(() => {
                setShowLastMassage(false)
            }, 3000)
        }

    }
    const showText = () => {
        if (massage) {
            setShowNotif(false)
            setShowMassage(true)
        }

    }
    return (
        <>
            <div className="warning-problems-notif">
                <div className='warning-proplem' onClick={() => { setShowNotif(true), setShowBack(true) }}>
                    <span>گزارش آگهی <VscWarning /></span>
                </div>
                <div className={`notif-warning ${showNotif && 'notif-warning-show'}`}>
                    <div className="header-notif">
                        <span>ثبت تخلف در آگهی</span>
                        <span className='close-notif-problems' style={{ cursor: 'pointer' }} onClick={() => { setShowNotif(false), setShowBack(false) }}><AiOutlineClose /></span>
                    </div>
                    <div className="title-notife">
                        <span className='fs-5'>مشکل آگهی چیست؟</span>
                        <span>نزدیک ترین گزینه رو انتخاب کنید تا به ما در بازبینی دوباره کمک کند</span>
                    </div>

                    <div className="desc-problems me-2 mt-3 mb-2">
                        <input className="form-check-input ms-2" type="radio" name="flexRadioDefault" id="nags"
                            onClick={() => setMassage('کلاهبرداری و نقض قانون')} />
                        <label htmlFor='nags'>کلاهبرداری و نقض قانون</label>
                    </div>
                    <div className="desc-problems me-2  mb-2">
                        <input className="form-check-input ms-2" type="radio" name="flexRadioDefault" id="mohtava"
                            onClick={() => setMassage('محتوای آگهی')} />
                        <label htmlFor='mohtava'>محتوای آگهی</label>
                    </div>
                    <div className="desc-problems me-2  mb-2">
                        <input className="form-check-input ms-2" type="radio" name="flexRadioDefault" id="saheb"
                            onClick={() => setMassage('مشکل با صاحب آگهی')} />
                        <label htmlFor='saheb'>مشکل با صاحب آگهی</label>
                    </div>
                    <div className="desc-problems me-2  mb-2">
                        <input className="form-check-input ms-2" type="radio" name="flexRadioDefault" id="sayer"
                            onClick={() => setMassage('سایر')} />
                        <label htmlFor='sayer'>سایر...</label>
                    </div>
                    <div className="footer-notif">
                        <span onClick={() => showText()}>تایید</span>
                        <span onClick={() => { setShowNotif(false), setShowBack(false) }}>انصراف</span>
                    </div>

                </div>
                <div className={`text-warning ${showMassage && 'show-notif-massage'}`}>
                    <div className="kool">
                        <div className="header-notif">
                            <span>گزارش در دسته : {massage}</span>
                            <span style={{ cursor: 'pointer' }} onClick={() => { setShowMassage(false), setShowBack(false) }}><AiOutlineClose /></span>
                        </div>
                        <input type="textarea" className='w-100' style={{ height: '9rem', resize: 'none' }} onChange={(event) => setTextarea(event.target.value)} value={textarea} placeholder='توضیحات خود را حتما یادداشت کنید ' />
                        <div className="footer-notif">
                            <span onClick={() => showLastModal()}>تایید</span>
                            <span onClick={() => { setShowMassage(false), setShowBack(false) }}>انصراف</span>
                        </div>
                    </div>

                </div>
                <div className={`last-notif-massage ${showLastMassage && 'show-last-massage'}`}>
                    <span>گزارش شما به مدیر سایت ارسال شد به زودی با فرد متخلف برخورد میکنیم !</span>
                </div>

            </div>
            <div className={`back-filter ${showBack && 'show-back-filter'}`}>
            </div>
        </>
    )
}
