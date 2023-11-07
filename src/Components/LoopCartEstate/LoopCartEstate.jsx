import { FaBookmark } from "react-icons/fa"
import { BsFillShareFill } from "react-icons/bs"
import { BsBuildingExclamation } from "react-icons/bs"
import { MdLocationPin } from "react-icons/md"
import { BiDollar } from "react-icons/bi"
import { FaPuzzlePiece } from "react-icons/fa"
import { Link } from 'react-router-dom';
import ImgTag from "../ImgTag/ImgTag"
import './LoopCartEstate.css'
import swal from "sweetalert"
export default function LoopCartEstate(props) {
    const { priceAll, pricePiece, title, date, location, homeSize, forWhat, author, id, img, profImg } = props
    const alertHandler = () => {
        navigator.clipboard.writeText(`https://port.iran.liara.run/estate/id/${id}`)
        swal({ title: "لینک کپی شد", icon: "success" })
    }
    return (
        <>
            {props && (
                <div className="card-estates">
                    <figure className="mb-0 mb-sm-3">
                        <div className="img-estates">
                            <Link to={`/estate/single-page/id/${id}`}> <ImgTag src={img} /></Link>
                        </div>
                        <figcaption>
                            <div className="card-estates-descaption">
                                <div className="title-card-estate d-flex justify-content-between align-items-center">
                                    <h3 className='mt-2'>{title}</h3>
                                    <span>{date} روز قبل</span>
                                </div>

                                <p><MdLocationPin className='ms-2' />{location}</p>
                                <p><BiDollar className='ms-2' />{forWhat ? 'قیمت کامل' : 'رهن'} : {priceAll.toLocaleString()} </p>
                                <p><FaPuzzlePiece className='ms-2' />{forWhat ? 'قیمت هر متر' : 'اجاره ماهیانه'} : {pricePiece.toLocaleString()} میلیون </p>
                                <span><BsBuildingExclamation className='ms-2' />متراژ بنا : {homeSize}m </span>
                            </div>
                        </figcaption>
                        <figcaption>
                            <div className="desc-box-estate">
                                <div className="profile-box-estate">
                                    <ImgTag src={profImg} alt={"profile"} class={"ms-2"} />
                                    <span>{author}</span>
                                </div>
                                <div className="share-box-estate">
                                    <span className='ms-2' onClick={() => swal({ title: "هنوز تکمیل نشده", text: "بخش بوک مارک یا علاقه مندی ها هنوز تکمیل نشده" })}>
                                        <i><FaBookmark /></i>
                                    </span>
                                    <span onClick={alertHandler}>
                                        <i><BsFillShareFill /></i>
                                    </span>
                                </div>
                            </div>
                        </figcaption>
                        <span className={`notif-cart-estate ${forWhat ? 'for-buy' : 'اجاره'}`}>{forWhat ? 'فروشی' : 'اجاره'}</span>
                    </figure>
                </div>
            )}
        </>
    )
}
