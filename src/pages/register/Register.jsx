import { Password } from '@mui/icons-material'
import axios from 'axios'
import { useRef } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const history = useHistory()


    const handleClick = async(e) =>{
        e.preventDefault()
        if(passwordAgain.current.value !== password.current.value){
            password?.current.setCustomValidity("password dont match");
        }else{
            const user={
                username:username.current.value,
                email:email.current.value,
                password:password.current.value
            }
            try {
                await axios.post('/auth/register', user) 
                history.push('/login')
            } catch (error) {
                console.log(error,':user post error');
            }
           
        }
    
    }
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
                    <form className="loginBox" onSubmit={handleClick}>
                    <input ref={username} required placeholder="Username" className="loginInput" />
                    <input ref={email} required type='email' placeholder="Email" className="loginInput" />
                    <input ref={password} minLength='6' required type='password' placeholder="Password" className="loginInput" />
                    <input ref={passwordAgain} required type='password' placeholder="Conferm Password" className="loginInput" />
                    
                    <button className="loginForgot" type='submit'>Sign Up</button>
                    <Link to='/login'>
                    <button className="loginRegisterButton">Login to an Account</button>
                    </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
