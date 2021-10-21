import { useContext, useRef } from 'react';
import './login.css'
import {loginCall} from '../../apiCalls'
import {AuthContext} from '../../context/AuthContext'
import { CircularProgress } from '@mui/material';

export default function Login() {
    const email = useRef()
    const password = useRef()
    const {user,isfetching,error,dispatch}= useContext(AuthContext)
    const handleClick = (e) =>{
        e.preventDefault()
        loginCall({email:email.current.value,password:password.current.value},dispatch)
    }
    console.log(user,'global user')
    return (
        <div className='login' >
            <div className="loginWrapper">
                <div className="loginLeft">
                   <h3 className="loginLogo">WeBook</h3> 
                   <span className="logingDes">
                       Lets get connected with friends <br /> and family with WeBook
                   </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick} >
                        <input required type='email' placeholder="Email" className="loginInput" ref={email} />
                        <input required type='password' placeholder="Password" className="loginInput" ref={password} />
                        <button disabled={isfetching} className="loginButton">{isfetching? <CircularProgress  sx={{ color: 'white', size:'20px' }} /> : 'Log In'}</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">{isfetching? <CircularProgress  sx={{ color: 'white', size:'20px' }} /> : 'Create An Account'}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
