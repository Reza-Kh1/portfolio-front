import './SuccessNotif.css'
import { BsCheck2Circle } from 'react-icons/bs'
import {  useState } from 'react'
export default function SuccessNotif(props) {
console.log(props);
    return (
        <>
            <div className={`success-notif ${showSuccess && 'success-show'}`}>
                <span className="text-info">عملیات با موفقیت انجام شد</span>
                <span><i className="text-info fs-3 me-3"><BsCheck2Circle /></i></span>
            </div>
        </>
    )
}
