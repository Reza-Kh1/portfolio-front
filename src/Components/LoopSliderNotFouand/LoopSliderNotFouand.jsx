import { BsGem } from 'react-icons/bs'
import { AiTwotoneHeart } from 'react-icons/ai'
import { FiLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { VscCheck } from "react-icons/vsc"
import "./LoopSliderNotFound.css"
import ImgTag from '../ImgTag/ImgTag'
export default function LoopSliderNotFouand({ title, img, url, useLess }) {
    return (
        <>
            <div className="col-md-4 mt-4 mb-2">
                <div className="box-page-404">
                    <figure>
                        <Link to={url}>
                            <ImgTag src={img} />
                        </Link>
                        <figcaption className='fig-404'>
                            <span className='my-2'><i><AiTwotoneHeart /></i></span>
                            <span className='my-2'><i><BsGem /></i></span>
                            <span className='my-2'><i><FiLink /></i></span>
                        </figcaption>
                    </figure>
                    <p className='mt-4'>{title}</p>
                    {useLess ? useLess.map(i => (
                        <span className='my-2 d-block me-2' key={i.id}><i className='ms-2'><VscCheck /></i>{i.title}</span>
                    )) : ''}
                    <Link to={url}>
                        <button>دیدن صفحه</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
