import { Table } from "react-bootstrap";
import './Orders.css'
import swal from "sweetalert";
export default function Orders() {
  const showBuy = () => {
    swal({
      title: 'متاسفانه هنوز این بخش رو تکمیل نکردم  :(',
      icon: 'warning',
      text: 'به زودی امادش میکنم !',
      buttons: 'باشه'
    })
  }
  const kol = [
    { id: 180, name: 'کاور samsung A53', time: '1402/02/30', position: true, off: 15, cast: 250000 },
    { id: 182, name: 'گلس samsung A53', time: '1402/02/25', position: true, off: 0, cast: 160000 },
    { id: 181, name: 'گوشی samsung A53', time: '1402/02/25', position: true, off: 3, cast: 18700000 },
    { id: 183, name: 'گوشی samsung S20 FE', time: '1402/02/20', position: false, off: 0, cast: 19500000 },
    { id: 185, name: 'هنذفری baseus E9', time: '1401/06/14', position: true, off: 15, cast: 1650000 },
    { id: 186, name: 'ساعت هوشمند watch3', time: '1401/04/09', position: false, off: 7, cast: 7600000 },
    { id: 187, name: 'Xiaomi note 9 pro', time: '1400/03/17', position: false, off: 13, cast: 8500000 },
    { id: 188, name: 'گلس samsung A50', time: '1399/07/25', position: true, off: 0, cast: 35000 },
  ]
  return (
    <>
      <div className="order-panel-users">
        <Table className="table-user" responsive>
          <thead>
            <tr>
              <th>سفارش</th>
              <th>تاریخ</th>
              <th>وضعیت</th>
              <th>کد تخفیف</th>
              <th>مجموع</th>
              <th>فاکتور خرید</th>
            </tr>
          </thead>
          <tbody>
            {kol.map((i) => (
              <tr key={i.id}>
                <td>{i.name}</td>
                <td>{i.time}</td>
                <td>{i.position ? 'پرداخت شده' : 'لغو شده'}</td>
                <td>%{i.off}</td>
                <td>{(i.cast).toLocaleString()}</td>
                <td><button className="button" onClick={() => showBuy()}>مشاهده</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}
