import {useState} from 'react'

export default function Address() {
    const [valueName, setValueName] = useState('')
    const [valuePhone, setValuePhone] = useState('')
    const [valueEmail, setValueEmail] = useState('r.khani1385.66@gmail.com')
    const [valueN, setValueN] = useState('حسین')
    const [valueF, setValueF] = useState('')
    const [valueT, setValueT] = useState('-')
    const [valueK, setValueK] = useState('981917356')
    return (
        <>
            <div className="col-md-6">
                <label htmlFor="">نام کاربری :</label>
                <input onChange={(e) => setValueName(e.target.value)} type="text" value={valueName} className='user-input' />
            </div>
            <div className="col-md-6">
                <label htmlFor="">شماره موبایل :</label>
                <input onChange={(e) => setValuePhone(e.target.value)} type="text" value={valuePhone} className='user-input' />
            </div>
            <div className="col-md-12 mb-3">
                <label htmlFor="">ایمیل :</label>
                <input onChange={(e) => setValueEmail(e.target.value)} type="text" value={valueEmail} className='user-input' />
            </div>
            <div className="col-md-6">
                <label htmlFor="">نام  :</label>
                <input onChange={(e) => setValueN(e.target.value)} type="text" value={valueN} className='user-input' />
            </div>
            <div className="col-md-6">
                <label htmlFor="">نام خانوادگی :</label>
                <input onChange={(e) => setValueF(e.target.value)} type="text" value={valueF} className='user-input' />
            </div>
            <div className="col-md-6">
                <label htmlFor="">محل سکونت :</label>
                <input onChange={(e) => setValueT(e.target.value)} type="text" value={valueT} className='user-input' />
            </div>
            <div className="col-md-6">
                <label htmlFor="">کد پستی :</label>
                <input onChange={(e) => setValueK(e.target.value)} type="text" value={valueK} className='user-input' />
            </div>
            <div className="col-md-12">
                <label htmlFor="">آدرس :</label>
                <textarea type="text" style={{ height: '120px', resize: 'none' }} placeholder='آدرس دقیق محل سکونت...' className='user-input' />
            </div>
        </>
    )
}
