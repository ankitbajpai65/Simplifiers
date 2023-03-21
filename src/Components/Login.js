import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
    const [visible, setVisible] = useState(true);
    const navigate = useNavigate();
    const loginClicked = () => {
        navigate('/signup');
    }
    const inputEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    }
    const visibleClicked = () => {
        setVisible(true);
    }
    const notVisibleClicked = () => {
        setVisible(false);
    }
    return (
        <div className="offset-2 col-10 login loginSec">
            <div className='loginDiv'>
                <div className="loginFormDiv">
                    <label>Email</label>
                    <input type="text" onChange={inputEvent} name="email" />
                    {/* <span className="errorMsg text-danger fw-semibold d-block">{invalidMail}</span> */}
                    <label>Password</label>
                    <input type={visible ? "text" : "password"} onChange={inputEvent} name="pass" className="password" />
                    {visible ?
                        <VisibilityOffIcon className="visibilityIcon" onClick={notVisibleClicked} />
                        :
                        <VisibilityIcon className="visibilityIcon" onClick={visibleClicked} />
                    }
                    {/* <span className="errorMsg text-danger fw-semibold d-block">{invalidPass}</span> */}
                    <button className="btn btn-success w-100 loginPageBtn">Login</button>
                    <div className="text-center not_has_account mt-2">
                        <span>Need an account? </span>
                        <button className="btn text-success mb-2" onClick={loginClicked} >Signup</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login