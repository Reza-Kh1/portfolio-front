import { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { BsCheck2Circle } from 'react-icons/bs'
import './Comments.css'
export default function Comments() {

  const [allUser, setAllUser] = useState([])
  const [closeEdit, setCloseEdit] = useState(false)
  const [valueName, setValueName] = useState('')
  const [valuePass, setValuePass] = useState('')
  const [valueGmail, setValueGmail] = useState('')
  const [idEdit, setIdEdit] = useState(null)
  const [spanEror, setSpanEror] = useState('')
  const [showDelete, setShowDelete] = useState(false)
  const [valueResult, setValueResult] = useState('')

  useEffect(() => {
    import('../../../server').then(res => setAllUser(res.comments))
  }, [])

  const editBtn = (id) => {
    const user = [...allUser]
    user.forEach((filter) => {
      if (filter.id === id) {
        setValueName(filter.name1)
        setValuePass(filter.name2)
        setValueGmail(filter.name3)
      }
    })
    setIdEdit(id)
    setCloseEdit(true)
  }

  const sucessEdit = () => {
    if (valueResult && valueGmail) {
      allUser.forEach((i) => {
        if (i.id === idEdit) {
          i.name3 = valueGmail
          i.respawn = true
        }
        setCloseEdit(false)
        sucessModal()
        setSpanEror('')
        setValueResult('')
      })
    } else {
      setSpanEror('فیلد هارو پر کنید !')
    }
  }

  const deleteModal = (id) => {
    allUser.filter((f) => {
      if (f.id === id) {
        setValueGmail(f.name3)
        return
      }
    })
    setIdEdit(id)
    setShowDelete(true)
  }

  const deleteUser = () => {
    const gog = allUser.filter((fors) => {
      return fors.id !== idEdit
    })
    setShowDelete(false)
    setAllUser(gog)
    sucessModal()
  }

  const [showSuccess, setShowSuccess] = useState(false)
  const sucessModal = () => {
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
    }, 1500)
  }


  return (
    <>
      <div className={`success-notif ${showSuccess && 'success-show'}`}>
        <span className="text-info">عملیات با موفقیت انجام شد</span>
        <span><i className="text-info fs-3 me-3"><BsCheck2Circle /></i></span>
      </div>
      <div className="new-user">
        <h4 className="text-center text-info my-3">کامنت کاربران</h4>
        <div className={`delete-modal ${showDelete && 'show-delete'}`}>
          <h4 className="text-info mb-5">از حذف اطمینان دارید؟</h4>
          <Table className='my-5' striped bordered hover variant="dark">
            <thead>
              <tr>
                <td>نام کاربری</td>
                <td>موضوع</td>
                <td>کامنت</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{valueName}</td>
                <td>{valuePass}</td>
                <td>{valueGmail}</td>
              </tr>
            </tbody>
          </Table>
          <div className="button-edit">
            <button onClick={() => setShowDelete(false)}>خیر</button>
            <button onClick={() => deleteUser()}>بله</button>
          </div>
        </div>
        <div className={`edit-box ${closeEdit && 'close-edit'}`} style={{ width: '45%', left: '26%', top: '25%' }}>
          <span className="text-info text-center mb-3">ویرایش</span>
          <span className='text-info'>نام کاربری : {valueName}</span>
          <span className='text-info'>موضوع : {valuePass}</span>
          <div className="d-flex mt-3">
            <textarea onChange={(e) => setValueGmail(e.target.value)} value={valueGmail} className='result ms-3' placeholder={"موضوع"} cols="50" rows="10"></textarea>
            <textarea onChange={(e) => setValueResult(e.target.value)} value={valueResult} className='result' placeholder={"پاسخ خود را وارد کنید"} cols="50" rows="10"></textarea>

          </div>
          <span className="text-center text-info mt-3">{spanEror}</span>
          <div className="button-edit">
            <button onClick={() => setCloseEdit(false)}>کنسل</button>
            <button onClick={() => sucessEdit()}>تایید</button>
          </div>
        </div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr className="text-center">
              <th>نام کاربری</th>
              <th>موضوع</th>
              <th>کامنت</th>
              <th>عملیات ها</th>
            </tr>
          </thead>
          <tbody>{allUser && allUser.map((i) => (
            <tr key={i.id} className="text-center">
              <td>{i.name1}</td>
              <td>{i.name2}</td>
              <td>{(i.name3.split('')).length > 100 ? (i.name3.split('')).splice(0, 100).reduce((a, b) => a + b) + '...' : i.name3}</td>
              <td>
                <button className={`edit-btn ${i.respawn && 'respawn-comment'}`} onClick={() => editBtn(i.id)}>مشاهده</button>
                <button className="edit-btn" onClick={() => deleteModal(i.id)}>حذف</button>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}
