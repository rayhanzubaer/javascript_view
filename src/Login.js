import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
import { useStateValue } from './StateProvider';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [state, dispatch] = useStateValue();
console.log(state);
    const userAuthenticated = (user, access_token) => {
        dispatch({
            type: 'USER_AUTHENTICATED',
            item: {
                userInfo: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                },
                access_token: access_token
            }
        });
    }

    const handleSignInClick = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/login', {
            email: email,
            password: password
        })
        .then((response) => {
            const {user, access_token} = response.data;
            userAuthenticated(user, access_token);
        })
        .then((error)=>{
            console.log(error);
        });
    }

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-6"}>
                    <h2>Sign In</h2>
                    <form>
                        <div className={"form-group"}>
                            <label>Email</label>
                            <input className={"form-control"} type={"email"} value={email}
                                   onChange={(e) => setEmail(e.target.value)} placeholder={"Enter Email"}/>
                        </div>
                        <div className={"form-group"}>
                            <label>Password</label>
                            <input className={"form-control"} type={"password"} value={password}
                                   onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
                        </div>
                        <div className={"form-group"}>
                            <button className={"btn btn-primary"} type={"submit"} onClick={handleSignInClick}>Sign In
                            </button>
                        </div>
                    </form>
                    <Link to={"/register"}>Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
