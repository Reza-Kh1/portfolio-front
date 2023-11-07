import { BsCartCheckFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { setName } from '../../redux';
import { changeNumber } from '../../redux';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteName } from '../../redux';
import ImgTag from '../ImgTag/ImgTag';
import "./ButtonBuy.css";
import { Link } from 'react-router-dom';
export default function ButtonBuy(data) {
    const dispatch = useDispatch()
    const deleteHandler = (id) => {
        dispatch(deleteName(id))
    }
    const select = useSelector(s => s.shopping)
    const shopping = (i) => {
        if (i.id) {
            const dataSel = [...select]
            const gog = dataSel.some((s) => s.id === i.id.id)

            if (gog) {
                dispatch(changeNumber(i.id.id))
            } else {
                dispatch(setName(i.id.id))
            }
        }
        setShow(true)
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <>
            <button className='asly' onClick={() => { data ? shopping(data) : shopping() }}>{data.title && data.title} <BsCartCheckFill style={{color:"#54aed6"}} /></button>
            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>سبد خرید</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {select && select.map((sel) => (
                        <div key={sel.id} className="body-basket">
                            <h5 className='mb-3 d-block'>{sel.title}</h5>
                            <figure>
                                <ImgTag src={sel.images[0].original} />
                            </figure>
                            <figcaption className='d-flex justify-content-between'>
                                <span>رنگ : مشکی</span>
                                <span>تعداد : {sel.complus}</span>
                            </figcaption>
                            <h5 className='text-center mb-0 mt-3'>{(sel.price).toLocaleString()} تومان</h5>
                            <div className="button-cart-shop mt-3 d-flex justify-content-between">
                                <Link to={'/dashboard/cart'}><button >پرداخت</button></Link>
                                <button onClick={() => deleteHandler(sel.id)}>حذف</button>
                            </div>
                        </div>
                    ))}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
