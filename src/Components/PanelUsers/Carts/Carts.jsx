import './Carts.css'
import { useNavigate } from 'react-router-dom'
import ImgTag from '../../ImgTag/ImgTag'
import { useDispatch, useSelector } from 'react-redux'
import { deleteName } from '../../../redux'
export default function Carts() {
  const nav = useNavigate()
  const select = useSelector(s => s.shopping)
  const dispatch = useDispatch()
  const deleteCart = (id) => {
    dispatch(deleteName(id))
  }

  const returnBuy = () => {
    nav(`/buy-product/page-puy`)
  }

  const showPage = (id) => {
    nav(`/shopping/${id}`)
  }

  return (
    <>
      {select && select.map((i) => (
        <div key={i.id} className="cart-user">
          <div className="row">
            <div className="col-md-6 col-6">
              <h4 className='text-info'>{i.title}</h4>
              <span className='d-block mt-3'>رنگ : مشکی</span>
              {i.offer && (<span className='d-block mt-2'>تخفیف : {i.offer} %</span>)}
              <span className='d-block mt-2'>قیمت : {(i.price + 0).toLocaleString()} تومان</span>
              <span className='d-block mt-2'>تعداد : {i.complus}</span>
            </div>
            <div className="col-md-6 col-6">
              <figure className='m-0 text-start'>
                <ImgTag src={i.images[0].original} />
              </figure>
            </div>
            <div className="col-md-12">
              <div className=" mt-4 button-users">
                <button onClick={() => showPage(i.id)} className='button d-block d-sm-inline mb-3 m-sm-0 mx-auto'>مشاهده صفحه محصول</button>
                <button onClick={() => returnBuy(i.id)} className='button mx-2'>ادامه خرید</button>
                <button onClick={() => deleteCart(i.id)} className='button mx-2'>حذف از سبد خرید</button></div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
