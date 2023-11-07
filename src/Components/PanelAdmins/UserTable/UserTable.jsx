import { BsCheck2Circle } from 'react-icons/bs'
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import './UserTable.css'

export default function UserTable({ data, title, name1, name2, name3, name4 }) {

  const [valueNames, setValueNames] = useState('')
  const [valueGmails, setValuePhones] = useState('')
  const [valuePhones, setValueGmails] = useState('')

  const [allUser, setAllUser] = useState([])
  const [closeEdit, setCloseEdit] = useState(false)
  const [valueName, setValueName] = useState('')
  const [valuePass, setValuePass] = useState('')
  const [valueGmail, setValueGmail] = useState('')
  const [valuePhone, setValuePhone] = useState('')
  const [idEdit, setIdEdit] = useState(null)
  const [spanEror, setSpanEror] = useState('')
  const [showDelete, setShowDelete] = useState(false)
  useEffect(() => {
    setAllUser(data)
  }, [data])
  const editBtn = (id) => {
    const user = [...allUser]
    user.forEach((filter) => {
      if (filter.id === id) {
        setValueName(filter.name1)
        setValuePass(filter.name2)
        setValueGmail(filter.name3)
        setValuePhone(filter.name4)
      }
    })
    setIdEdit(id)
    setCloseEdit(true)
  }
  const sucessEdit = () => {
    if (valueName && valuePass && valueGmail && valuePhone) {
      allUser.forEach((i) => {
        if (i.id === idEdit) {
          i.name1 = valueName
          i.name2 = valuePass
          i.name3 = valueGmail
          i.name4 = valuePhone
        }
        setCloseEdit(false)
        sucessModal()
        setSpanEror('')
      })
    } else {
      setSpanEror('فیلد هارو پر کنید !')
    }
  }
  const deleteModal = (id) => {
    allUser.filter((f) => {
      if (f.id === id) {
        setValueNames(f.name1)
        setValuePhones(f.name2)
        setValueGmails(f.name3)
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
  useEffect(() => {
    setAllUser(data)
  }, [])
  return (
    <>
      <div className={`success-notif ${showSuccess && 'success-show'}`}>
        <span className="text-info">عملیات با موفقیت انجام شد</span>
        <span><i className="text-info fs-3 me-3"><BsCheck2Circle /></i></span>
      </div>
      <div className="new-user">
        <h4 className="text-center text-info my-3">{title}</h4>
        <div className={`delete-modal ${showDelete && 'show-delete'}`}>
          <h4 className="text-info mb-5">از حذف اطمینان دارید؟</h4>
          <Table className='my-5' striped bordered hover variant="dark">
            <thead>
              <tr>
                <td>{name1}</td>
                <td>{name2}</td>
                <td>{name3}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{valueNames}</td>
                <td>{valueGmails}</td>
                <td>{valuePhones}</td>
              </tr>
            </tbody>
          </Table>
          <div className="button-edit">
            <button onClick={() => setShowDelete(false)}>خیر</button>
            <button onClick={() => deleteUser()}>بله</button>
          </div>
        </div>
        <div className={`edit-box ${closeEdit && 'close-edit'}`}>
          <span className="text-info text-center mb-3">ویرایش</span>
          <input type="text" onChange={(e) => setValueName(e.target.value)} value={valueName} placeholder={name1} />
          <input type="text" onChange={(e) => setValuePass(e.target.value)} value={valuePass} placeholder={name2} />
          <input type="email" onChange={(e) => setValueGmail(e.target.value)} value={valueGmail} placeholder={name3} />
          <input type="number" onChange={(e) => setValuePhone(e.target.value)} value={valuePhone} placeholder={name4} />
          <span className="text-center text-info">{spanEror}</span>
          <div className="button-edit">
            <button onClick={() => setCloseEdit(false)}>کنسل</button>
            <button onClick={() => sucessEdit()}>تایید</button>
          </div>
        </div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr className="text-center">
              <th>{name1}</th>
              <th>{name2}</th>
              <th>{name3}</th>
              <th>{name4}</th>
              <th>عملیات ها</th>
            </tr>
          </thead>
          <tbody>{allUser && allUser.map((i) => (
            <tr key={i.id} className="text-center">
              <td>{i.name1}</td>
              <td>{i.name2}</td>
              <td>{i.name3}</td>
              <td>{i.name4}</td>
              <td>
                <button className="edit-btn" onClick={() => editBtn(i.id)}>ویرایش</button>
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