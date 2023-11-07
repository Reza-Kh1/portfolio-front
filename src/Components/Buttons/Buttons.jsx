import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineExport } from "react-icons/ai"
import "./Buttons.css"
export default function Buttons({ go, title, classSpan, bg }) {
  return (
    <>
      <Link to={go} className='get-out' style={{ backgroundColor:`${bg}` }}><span><i className={classSpan}><AiOutlineExport /></i>{title}</span></Link>
    </>
  )
}
