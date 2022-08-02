import { useEffect, useState } from 'react'
import './Questions.css'

import user_icon from '../../images/user-icon.png'
import exam_icon from '../../images/exam-icon.png'
import mng_icon from '../../images/mng-icon.png'
import logout_icon from '../../images/logout-icon.png'

import notification from '../../images/notification.png'
import user from '../../images/user.png'
import collegelogo from '../../images/collegelogo.png'

import {Link} from 'react-router-dom'

const HomeTeachers = () =>{
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);
    let cTime = date.toLocaleTimeString();

    return(
        <div >
            <div className="side-bar">
                <div className="s-heading">
                    <h3>Que<br/>GEN</h3>
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
                        <img src={mng_icon} alt="not found"  name = 'mng'/>
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
            <div className = 'nav-wrapper'>
                <div className="nav-notification">
                    <img src={notification} alt = 'not found' />
                </div>
                <div className="nav-user">
                    <img src= {user} alt = 'not found'/>
                </div>
                <div className="nav-time">
                    <p>{cTime}</p>
                </div>
            </div>
            <div className="qn-based">
                <Link to = '/question-enter'>
                    <div className="qn-insert">
                        <p>Question Bank</p>
                    </div>
                </Link> 
                <Link to = '/question-generate'>
                    <div className="qn-generate">
                        <p>Click to Generate Question Paper</p>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default HomeTeachers