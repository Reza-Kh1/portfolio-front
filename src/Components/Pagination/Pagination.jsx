import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import "./Pagination.css"
export default function Pagination(all) {
    const { pagination } = useParams()
    const [page, setPage] = useState([])
    const nav = useNavigate()
    const pageShow = (n) => {
        const koll = all.data.slice((n * all.num - all.num), (n * all.num))
        all.clicker(koll)
    }
    useEffect(() => {
        const pages = Math.ceil(all.data.length / all.num)
        const gog = Array.from(Array(pages).keys())
        setPage(gog)
        pageShow(pagination)
    }, [all.data, pagination])
    const pageHandler = (i) => {
        nav(`/estate/page/${i}`)
        pageShow(i)
    }
    return (
        <>
            <div className="d-flex justify-content-center pagination-button">
                {pagination > 1 && <button className="ms-2" onClick={() => nav(`/estate/page/${Number(pagination) - 1}`)}><FaArrowRight /></button>}
                {page.map((i) => (
                    <button key={Math.random(4)} className={Number(pagination) === i + 1 ? "page-active ms-1" : "ms-1"} onClick={() => pageHandler(i + 1)}>
                        {i + 1}
                    </button>
                ))}
                {pagination < page.length  && <button className="me-2" onClick={() => nav(`/estate/page/${Number(pagination) + 1}`)}><FaArrowLeft /></button>}
            </div>
        </>
    )
}