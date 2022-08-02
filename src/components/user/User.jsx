import {useState} from 'react'
import './User.css'
import collegelogo from '../../images/collegelogo.png'
import {Link} from 'react-router-dom'


const User = () => {
    const [uname,setUname] = useState('');
    const [fname,setFname] = useState('');
    const [pwd,setPwd] = useState('');
    const [cpwd,setCpwd] = useState('');
    const [role,setRole] = useState('');
    const handleCreate = () => {
        console.log('hello');
        
    }

    return (
        <div className="user">
            <div className="u-wrapper">
                <div className="u-home">Que<br/>GEN</div>
                <div className="u-logo"><img src={collegelogo} alt = 'not found '/></div>
            </div>

            <div className="u-create">
                <div className="u-user">Create User</div><br/><br/>
                <div className="u-details">
                    <div className="u-name">
                        <div className="u-uname">
                            <form>
                                <label  >Username</label><br />
                                    <input type ='text' 
                                    required
                                    value = {uname}
                                    onChange = {(e) => setUname(e.target.value)}>
                                        
                                    </input>
                                
                                
                            </form>
                        </div>
                        <div className="u-fname">
                            <form>
                                <label  >Fullname</label><br />
                                    <input type ='text' 
                                    required
                                    value = {fname}
                                    onChange = {(e) => setFname(e.target.value)}> 
                                    </input>
                                
                                
                            </form>
                        </div>
                    </div><br/>
                    <div className="u-Pwd">
                        <div className="u-pwd">
                            <form>
                                <label  >Password</label><br />
                                    <input type ='password' 
                                    required
                                    value = {pwd}
                                    onChange = {(e) => setPwd(e.target.value)}>
                                        
                                    </input>
                                
                                
                            </form>
                        </div>
                        <div className="u-cpwd">
                            <form>
                                <label  >Confirm Password</label><br />
                                    <input type ='password' 
                                    required
                                    value = {cpwd}
                                    onChange = {(e) => setCpwd(e.target.value)}>
                                        
                                    </input>
                                
                                
                            </form>
                        </div>
                    </div><br/>
                    <div className="u-role">
                        <label>Role</label><br/>
                        <select className='custom-select'
                        onChange={(e) => {
                            const role = e.target.value ;
                            setRole(role);
                        }}
                        >
                            <option value="admin">Admin</option>
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                        </select>
                    </div><br/>
                    <div className="u-buttons">
                        <Link to = '/Home'>
                            <div className="b-discard">
                                <button className='discard'>Discard</button>
                            </div>
                        </Link>
                        <div className="b-create">
                            <button className='create' onClick = {handleCreate}>Create</button>
                        </div>
                    </div>
                </div>
                <p>
                    {uname}
                    {fname}
                    {pwd}
                    {cpwd}
                    {role}
                </p>
            </div>
        </div>
        
    )
}

export default User