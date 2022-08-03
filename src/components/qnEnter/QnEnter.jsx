import { useEffect, useState } from 'react'
import './QnEnter.css'
import notification from '../../images/notification.png'
import user from '../../images/user.png'
import collegelogo from '../../images/collegelogo.png'

import user_icon from '../../images/user-icon.png'
import exam_icon from '../../images/exam-icon.png'
import mng_icon from '../../images/mng-icon.png'
import logout_icon from '../../images/logout-icon.png'

import {Link,useParams} from 'react-router-dom'
import Axios from 'axios'
import baseUrl from '../../Services/base'

const QnEnter = () => {
    const[cos,setCos] = useState([]);
    let subCode = useParams();
    useEffect(() => {
        Axios.get(baseUrl + 'subjects/' + subCode.code,{} ).then((response) => {
            const subject = response.data
            setCos(subject.courseOutcomes);
        });
      }, [subCode]);
    

    const [date, setDate] = useState(new Date());
    const[que,setQue] = useState('');

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
        if(que && type && marks){
            console.log(type)
            console.log(marks)
            Axios.put(baseUrl + 'questionBank/' + subCode.code,{que:que,courseOutcome:type,mark:marks}).then((response) => {
                console.log(response.data)
            })
        }else{
            alert('insert all fields')
        }
        
    }


    // const[sem,setSem] = useState('');
    // const[sub,setSub] = useState('');
    const[type,setType] = useState();
    // const[difficulty,setDifficulty] = useState('');
    const[marks,setMarks] = useState();

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
                        <label>C.O</label>
                        <select className='select-type'
                        onChange={(e) => {
                            const type = e.target.value ;
                            setType(cos.indexOf(type) + 1);
                        }}
                        >
                            {
                                cos.map((item) => {
                                    return(
                                        <option value={item}>{item}</option>
                                    )
                                })
                                
                            }
                            
                        </select>
                    </div>
                    {/* <div className="qn-difficulty">
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
                    </div> */}
                    <div className="qn-marks">
                        <label >Marks</label>
                        <input type ='text' 
                                required
                                value = {marks}
                                onChange = {(e) => setMarks(parseInt(e.target.value))}>
                                    
                        </input>
                    </div>
                </div>
                <div className="qn-insertion">
                    <textarea name="qn-insert" id="" cols="80" rows="15" placeholder = 'Type your Question'
                    required
                    value = {que}
                    onChange = {(e) => setQue(e.target.value)}>
                    
                    </textarea>
                </div><br /><br />
                <div className = 'question-enter'>
                <button type ='button' onClick = {handleCreate} className='qn-create'>Enter</button>
                </div>
                {/* <p>{sem}</p>
                <p>{sub}</p> */}
                <p>{type}</p>
                {/* <p>{difficulty}</p> */}
                <p>{marks}</p>
            </div>
            {/* <p>{que}</p> */}
        </div>
    )
}

export default QnEnter