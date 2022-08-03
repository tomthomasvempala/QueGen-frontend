import { useEffect, useState } from 'react'
import './HomeTeachers.css'

import user_icon from '../../images/user-icon.png'
import exam_icon from '../../images/exam-icon.png'
import mng_icon from '../../images/mng-icon.png'
import logout_icon from '../../images/logout-icon.png'

import notification from '../../images/notification.png'
import user from '../../images/user.png'
import collegelogo from '../../images/collegelogo.png'

import subjects from './dummydata'
import Axios from 'axios';
import { Link, useParams } from 'react-router-dom'

const HomeTeachers = () => {
    const [date, setDate] = useState(new Date());
    const [subs,setSubs] = useState([])
    const teacherId = useParams().id
    function refreshClock() {
        setDate(new Date());
    }
    // useEffect(() => {
    //     const timerId = setInterval(refreshClock, 1000);
    //     return function cleanup() {
    //         clearInterval(timerId);
    //     };
    // }, []);
    // let cTime = date.toLocaleTimeString();

    Axios.get('http://192.168.1.40:3001'+'/teachers/'+teacherId+'/subjects').then((response)=>{
        setSubs(response.data)
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
                <div className="nav-time">
                    {/* <p>{cTime}</p> */}
                </div>
            </div>
            <div className="subjects">

                {
                    subs.map((item) => {
                        return (
                            <Link to ={'/questions/'+item.code}>
                            <div className="s-list" >
                                <p className='sub-text'><b>{item.code}</b></p>
                                <p>{item.name}</p>
                            </div>
                            </Link>
                        )
                    })

                }
            </div>

        </div>
    )   
}

export default HomeTeachers