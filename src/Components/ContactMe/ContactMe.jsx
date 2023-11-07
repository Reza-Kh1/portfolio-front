import React from 'react'
import { FaPhone } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import { FiMapPin } from "react-icons/fi"
export default function ContactMe() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 px-4">
                        <div className="row contect-me">
                            <div className="col-md-4 col-12 content-box">
                                <i><FaPhone /></i>
                                <span className='me-3'>شماره تماس: 09390199977</span>
                            </div>
                            <div className="col-md-4 col-12 content-box">
                                <i><FaTelegramPlane /></i><span className='me-3'>آیدی تلگرام : Reza_kh666@</span>
                            </div>
                            <div className="col-md-4 col-12 content-box">
                                <i><FiMapPin /></i><span className='me-3'>محل سکونت : تهران -فرحزاد</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
