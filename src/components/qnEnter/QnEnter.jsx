import {useState} from 'react'
import './QnEnter.css'
import notification from '../../images/notification.png'
import user from '../../images/user.png'
import collegelogo from '../../images/collegelogo.png'

import user_icon from '../../images/user-icon.png'
import exam_icon from '../../images/exam-icon.png'
import mng_icon from '../../images/mng-icon.png'
import qn_icon from '../../images/qn-icon.png'
import logout_icon from '../../images/logout-icon.png'

import {Link} from 'react-router-dom'


const QnEnter = () => {
    // let time = new Date.toLocaleTimeString();
    // const[cTime,setCtime] = useState(time);

    // const updateTime = () => {
    //     time = Date.toLocaleTimeString();
    //     setCtime(time);
    // };
    // setInterval(updateTime,1000);
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
                    <div className="s-qn">
                        <img src={qn_icon} alt="not found" />
                        <p>Question</p>
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
                    <p>cTime</p>
                </div>
            </div>

            <div className="qn-enter">
                <div className="qn-conditions">

                    {/* <div className="qn-sem">
                        <label>Sem</label>
                        <select className='select-sem'
                        onChange={(e) => {
                            const sem = e.target.value ;
                            setSem(sem);
                        }}
                        >
                            <option value="S1">S1</option>
                            <option value="S2">S2</option>
                            <option value="S3">S3</option>
                            <option value="S4">S4</option>
                            <option value="S5">S5</option>
                            <option value="s6">S6</option>
                            <option value="S7">S7</option>
                            <option value="S8">S8</option>
                        </select>
                    </div> */}
                    {/* <div className="qn-sub">
                        <label>Sub</label>
                        <select className='select-sub'
                        onChange={(e) => {
                            const sub = e.target.value ;
                            setSub(sub);
                        }}
                        >
                            <option value="SS">SS</option>
                            <option value="COA">COA</option>
                            <option value="MM">MM</option>
                            <option value="IEFT">IEFT</option>
                            <option value="Python">Python</option>
                            <option value="AAD">AAD</option>
                            <option value="Mech">Mech</option>
                            <option value="Civil">Civil</option>
                        </select>
                    </div> */}
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