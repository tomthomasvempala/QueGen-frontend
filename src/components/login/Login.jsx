import {useState} from 'react'
import './Login.css'
import collegelogo from '../../images/collegelogo.png'

import {useNavigate } from 'react-router-dom'

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');



    let navigate = useNavigate()

    const handleLogin = ()=> {
        if (username && password) {
            navigate('/HomeTeachers')
            // HomeTeachers or HomeAdmin
        } else {
            alert('enter all the fields')
        }
    }

    return(

        <div className="login-container">
            <div className="u-wrapper">
                <div className="u-home">Que<br/>GEN</div>
                <div className="u-logo"><img src={collegelogo} alt = 'not found '/></div>
            </div>

            <div className='App-login'>
                    <h1 className='login-heading'>Login</h1>
                    <form>
                        <div className='input-container'>
                            <div className='label'>
                                <label>Username</label>
                            </div>
                            <input type="text" style={{width: "85%"}}
                            required
                            value = {username}
                            onChange = {(e) => setUsername(e.target.value)}>

                            </input>
                        </div>
                        <div className='input-container'>
                            <div className='label'>
                            <label>Password</label>
                            </div>
                            <input type = 'password' style={{width: "85%"}}
                            required
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}>

                            </input>
                        </div>
                        <button onClick={handleLogin} className='Button'>Login</button>    
                    </form>
                    <div className='forgot'>Forgot Password?</div>   
            
            </div>
            <p>{username}</p>
            <p>{password}</p>
        </div>
    )
}

export default Login