import { useState } from 'react'
import './HomeAdmin.css'
import notification from '../../images/notification.png'
import user from '../../images/user.png'
import collegelogo from '../../images/collegelogo.png'

// import teachers from './dummydata'
// import {useTable} from 'react-table'

import { Link } from 'react-router-dom'

import user_icon from '../../images/user-icon.png'
import exam_icon from '../../images/exam-icon.png'
import mng_icon from '../../images/mng-icon.png'
import logout_icon from '../../images/logout-icon.png'
import create_user from '../../images/create-user.png'
import Axios from 'axios'
import baseUrl from '../../Services/base'

const HomeAdmin = () => {
    const [teachers,setTeachers] = useState([])
    Axios.get( baseUrl + 'teachers',{}).then((response)=>{
        setTeachers(response.data)
        console.log(response.status)
    })

    return (
        <div >
            <div className="side-bar">
                <div className="s-heading">
                    <h3>Que<br />GEN</h3>
                </div>
                <div className="s-icons">
                    <div className="s-user">
                        <img src={user_icon} alt="not found" />
                        <p>User</p>
                    </div>
                    <div className="s-exam">
                        <img src={exam_icon} alt="not found" />
                        <p>Geak Exam</p>
                    </div>
                    <div className="s-mng">
                        <img src={mng_icon} alt="not found" name='mng' />
                        <p>Exam Management</p>
                    </div>
                    <div className="s-logout">
                        <img src={logout_icon} alt="not found" />
                        <p>Logout</p>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <div className="s-collegelogo">
                    <img src={collegelogo} alt="not found" />
                </div>
            </div>
            <div className='nav-wrapper'>
                <div className="nav-notification">
                    <img src={notification} alt='not found' />
                </div>
                <div className="nav-user">
                    <img src={user} alt='not found' />
                </div>
            </div>

            <Link to='/create'>
                <div className="create-user">
                    <img src={create_user} alt="create user" />
                    <div className="cu-text">
                        Create User
                    </div>
                </div>
            </Link>

            <div className="teachers-list">
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Dept</th>
                            <th>E-Mail</th>
                        </tr>
                        {
                            teachers.map((item,index) => {
                                return (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.dept}</td>
                                        <td>{item.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default HomeAdmin