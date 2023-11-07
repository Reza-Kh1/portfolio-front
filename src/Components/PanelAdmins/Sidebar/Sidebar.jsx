import './Sidebar.css'

import { MdDashboardCustomize } from 'react-icons/md'
import { RiUserLine } from 'react-icons/ri'
import { GiShoppingCart } from 'react-icons/gi'
import { CgNotes } from 'react-icons/cg'
import { VscCommentDiscussion } from 'react-icons/vsc'
import { TbCurrencyDollarOff } from 'react-icons/tb'
import { VscSettings } from 'react-icons/vsc'
import { GiEntryDoor } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

export default function Sidebar({ name1, url1, name2, url2, name3, url3, name4, url4, name5, url5, name6, url6, name7, url7, name8 }) {

    return (
        <>
            <div className="sidebar-panel">
                {name1 && <NavLink to={url1}><i><MdDashboardCustomize /></i>{name1}</NavLink>}
                {name2 && <NavLink to={url2}><i><RiUserLine /></i>{name2}</NavLink>}
                {name3 && <NavLink to={url3}><i><GiShoppingCart /></i> {name3}</NavLink>}
                {name4 && <NavLink to={url4}><i><CgNotes /></i> {name4}</NavLink>}
                {name5 && <NavLink to={url5}><i><VscCommentDiscussion /></i>{name5}</NavLink>}
                {name6 && <NavLink to={url6}><i><TbCurrencyDollarOff /></i>{name6}</NavLink>}
                {name7 && <NavLink to={url7}><i><VscSettings /></i>{name7}</NavLink>}
                <div className="spacial-a">
                    <NavLink to={'/'}  className='a-space'>
                        <span className="position-absolute w-100"></span>
                        <span className="position-absolute h-100"></span>
                        <span className="position-absolute w-100"></span>
                        <span className="position-absolute h-100"></span>
                        <i><GiEntryDoor /></i> {name8}
                    </NavLink>
                </div>

            </div >
        </>
    )
}
