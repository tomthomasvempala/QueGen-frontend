import { useEffect, useState } from 'react'
import React  from 'react';
import './QnGenerate.css'
import notification from '../../images/notification.png'
import user from '../../images/user.png'
import collegelogo from '../../images/collegelogo.png'

import subjects from './dummydata'
import baseUrl from '../../Services/base'
// import questionPaper from '../questionPaper'

import user_icon from '../../images/user-icon.png'
// import exam_icon from '../../images/exam-icon.png'
// import mng_icon from '../../images/mng-icon.png'
// import qn_icon from '../../images/qn-icon.png'
import logout_icon from '../../images/logout-icon.png'

import { Link, useParams } from 'react-router-dom'
import Axios from 'axios'
import {useNavigate } from 'react-router-dom'



const QnGenerate = () => {
    const[cos,setCos] = useState([]);
    const[tempcos,setTempcos] = useState([]);
    let subCode = useParams();
    useEffect(() => {
        Axios.get(baseUrl + 'subjects/' + subCode.code,{} ).then((response) => {
            const subject = response.data
            console.log(subject.courseOutcomes)
            setCos(subject.courseOutcomes);
        });
      }, [subCode]);
    
      
    let navigate = useNavigate()


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


    

    // const[sem,setSem] = useState('');
    // const[sub,setSub] = useState('');
    // const[type,setType] = useState([]);
    // const [difficulty, setDifficulty] = useState('');
    const [marks, setMarks] = useState('');

        const handleGenerate = () => {
        if(tempcos.length !== 0 && marks){
            console.log(tempcos)
            localStorage.setItem("qpCOS", tempcos);
            navigate('/question-paper/'+subCode.code+'/'+parseInt(marks))
        }else{
            alert('enter all fields')
        }
        
    }

    return (
        <div>
            <div className="side-bar">
                <Link to='./HomeTeachers'>
                    <div className="s-heading">
                        <h3>Que<br />GEN</h3>
                    </div>
                </Link>
                <div className="s-icons">
                    <div className="s-user">
                        <img src={user_icon} alt="not found" />
                        <p>Questions</p>
                    </div>
                    {/* <div className="s-qn">
                        <img src={qn_icon} alt="not found" />
                        <p>Question</p>
                    </div>
                    <div className="s-exam">
                        <img src={exam_icon} alt="not found" />
                        <p>Geak Exam</p>
                    </div>
                    <div className="s-mng">
                        <img src={mng_icon} alt="not found" name='mng' />
                        <p>Exam Management</p>
                    </div> */}
                    <Link to = '/'>

                    
                    <div className="s-logout">
                        <img src={logout_icon} alt="not found" />
                        <p>Logout</p>
                    </div>
                    </Link>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <div className="s-collegelogo">
                    <img src={collegelogo} alt="not found" />
                </div>
            </div>
            <div className='nav-wrapper'>
                {/* <div className="nav-notification">
                    <img src={notification} alt='not found' />
                </div>
                <div className="nav-user">
                    <img src={user} alt='not found' />
                </div> */}
                <div className="nav-time">
                    <p>{cTime}</p>
                </div>
            </div>

            <div className="qn-generation">
                <div className="qn-conditions">
                    <div className="qn-type">
                        <label>Type</label>
                        {
                            cos.map((item, index) => {
                                return (
                                    <form>
                                        <input type="checkbox" value={item}
                                            onChange={(e) => {
                                                
                                                if (e.target.checked) {
                                                    tempcos.push(index + 1)
                                                    console.log(tempcos)
                                                    setTempcos(tempcos)
                                
                                                } else {
                                                    let i = tempcos.indexOf(index + 1)
                                                    // console.log(index)
                                                    tempcos.splice(i,1)
                                                    console.log(tempcos)
                                                    setTempcos(tempcos)
                                    
                                                }
                                                
                                        }
                                        }
                                        
                                        />
                                        <label>{item}</label>  <br />
                                    </form>
                                )
                            })
                        }

                    </div>
                    {/* <div className="qn-difficulty">
                        <label>Level of Difficulty</label>
                        <select className='select-difficulty'
                            onChange={(e) => {
                                const difficulty = e.target.value;
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
                        <input type='text'
                            required
                            value={marks}
                            onChange={(e) => setMarks(e.target.value)}>

                        </input>
                    </div>
                </div>
                <button type='button ' onClick={handleGenerate} className='qn-generatebutton'>Generate</button>
            </div>
            {/* <p>{type}</p> */}
            {/* <p>{difficulty}</p> */}
            {/* <p>{marks}</p> */}
            {/* <questionPaper/> */}

        </div>
    )

}

export default QnGenerate