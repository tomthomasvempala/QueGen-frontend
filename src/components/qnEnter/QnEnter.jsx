import { useEffect, useState } from 'react'
import './QnEnter.css'
import notification from '../../images/notification.png'
import user from '../../images/user.png'
import collegelogo from '../../images/collegelogo.png'

import user_icon from '../../images/user-icon.png'
import exam_icon from '../../images/exam-icon.png'
import mng_icon from '../../images/mng-icon.png'
import logout_icon from '../../images/logout-icon.png'

import {Link} from 'react-router-dom'


const QnEnter = () => {
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

    const handleCreate = () => {
        console.log('hello')
    }


    // const[sem,setSem] = useState('');
    // const[sub,setSub] = useState('');
    const[type,setType] = useState('');
    const[difficulty,setDifficulty] = useState('');
    const[marks,setMarks] = useState('');

    return (
        <div >
            <div className="side-bar">
                <Link to = './HomeTeachers'>
                    <div className="s-heading">
                        <h3>Que<br/>GEN</h3>
                    </div>
                </Link>
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

            <div className="qn-enter">
                <div className="qn-conditions">
                    <div className="qn-type">
                        <label>Type</label>
                        <select className='select-type'
                        onChange={(e) => {
                            const type = e.target.value ;
                            setType(type);
                        }}
                        >
                            <option value="CO1">CO1</option>
                            <option value="CO2">CO2</option>
                            <option value="CO3">CO3</option>
                            <option value="CO4">CO4</option>
                            <option value="CO5">CO5</option>
                            <option value="CO6">CO6</option>
                            
                        </select>
                    </div>
                    <div className="qn-difficulty">
                        <label>Level of Difficulty</label>
                        <select className='select-difficulty'
                        onChange={(e) => {
                            const difficulty = e.target.value ;
                            setDifficulty(difficulty);
                        }}
                        >
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div className="qn-marks">
                        <label >Marks</label>
                        <input type ='text' 
                                required
                                value = {marks}
                                onChange = {(e) => setMarks(e.target.value)}>
                                    
                        </input>
                    </div>
                </div>
                <div className="qn-insertion">
                    <textarea name="qn-insert" id="" cols="80" rows="15" placeholder = 'Type your Question'>
                    
                    </textarea>
                </div><br /><br />
                <button onClick = {handleCreate} className='qn-create'>Enter</button>
                {/* <p>{sem}</p>
                <p>{sub}</p> */}
                <p>{type}</p>
                <p>{difficulty}</p>
                <p>{marks}</p>
            </div>
            
        </div>
    )
}

export default QnEnter