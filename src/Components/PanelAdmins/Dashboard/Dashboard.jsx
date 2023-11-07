import Recharts from "../../Recharts/Recharts";
import UserTable from "../UserTable/UserTable";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
export default function DashboardComponent() {
  const [newUse, setNewUser] = useState(null)
  const [chartBig, setChartBig] = useState(null)
  const [chart, setChart] = useState(null)
  const blog = [
    { id: 420, title: 'ترفندهای React js', category: 'فرانت اند', arthor: 'علی رحیمی' },
    { id: 421, title: 'کاربرد Next js در سئو', category: 'سئو', arthor: 'کیمیا بشیری' },
    { id: 422, title: 'Chat GPT', category: 'هوش مصنوعی', arthor: 'سامان قدیری' },
    { id: 423, title: 'فواید Redux در پروژه ها', category: 'فرانت اند', arthor: 'علی رحیمی' },
    { id: 424, title: 'نقشه راه برنامه نویسی وب (فرانت اند)', category: 'فرانت اند', arthor: 'علی رحیمی' },
    { id: 425, title: 'تکنیکال سئو', category: 'سئو', arthor: 'کیمیا بشیری' },
  ]
  const products = [
    { id: 430, title: 'Black shark 5 pro', category: 'شیائومی', cast: 35000000 },
    { id: 431, title: '14 pro max', category: 'آیفون', cast: 95000000 },
    { id: 432, title: 'Galaxy S21 FE 5G', category: 'سامسونگ', cast: 19800000 },
    { id: 433, title: 'Honor 50', category: 'آنر', cast: 15000000 },
    { id: 434, title: 'Galaxy S23 Ultra', category: 'سامسونگ', cast: 35000000 },
    { id: 435, title: 'Redmi note 12 pro', category: 'شیائومی', cast: 21000000 },
  ]
  useEffect(() => {
    import('../../../server').then(res => {
      setChartBig(res.xAxisData),
        setChart(res.xAxisProduct),
        setNewUser(res.newUser)
    })
  }, [])
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="rechartBg">
            <Recharts grid title="وضعیت فروش" dataKesy='فروش' dataKesy2="مرجوع" data={chartBig} />
          </div>
        </div>
        <div className="col-md-8">
          <UserTable name1={"نام کاربری"} name2={"پسورد"} name3={"ایمیل"} name4={'شماره تلفن'} data={newUse} title={'کاربرانی که به تازگی عضو شدند'} />
        </div>
        <div className="col-md-4">
          <div className="new-user">
            <h4 className="text-center text-info my-3">اخرین مقالات منتشر شده</h4>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr className="text-center">
                  <th>موضوع</th>
                  <th>دسته بندی</th>
                  <th>نویسنده</th>
                </tr>
              </thead>
              <tbody>
                {blog.map((i) => (
                  <tr key={i.id} className="text-center">
                    <td>{i.title}</td>
                    <td>{i.category}</td>
                    <td>{i.arthor}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div className="col-md-6">
          <div className="new-user mt-5">
            <h4 className="text-center text-info my-3">آخرین محصولاتی که افزوده شدن</h4>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr className="text-center">
                  <th>نام محصول</th>
                  <th>دسته بندی</th>
                  <th>قیمت</th>
                </tr>
              </thead>
              <tbody>
                {products.map((i) => (
                  <tr key={i.id} className="text-center">
                    <td>{i.title}</td>
                    <td>{i.category}</td>
                    <td>{(i.cast).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div className="col-md-6">
          <div className="new-user mt-5">
            <Recharts grid title="محصولات پر فروش" dataKesy='فروش' dataKesy3="قیمت" color3={'#1a6db6'} dataKesy2="بازدید" data={chart} />
          </div></div>
      </div>
    </>
  )
}
