import axios from "axios";
import React, {useState} from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password, passwordConfirmation);

        axios.post('http://localhost:8000/api/register', {
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <h1>Sign Up</h1>
                <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type={"text"} onChange={(e) => setName(e.target.value)} value={name} className={"form-control"}/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type={"email"} onChange={(e) => setEmail(e.target.value)} value={email} className={"form-control"}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type={"password"} onChange={(e) => setPassword(e.target.value)} value={password} className={"form-control"}/>
                </div>
                <div className="form-group">
                    <label>Password Confirmation</label>
                    <input type={"password"} onChange={(e) => setPasswordConfirmation(e.target.value)} value={passwordConfirmation} className={"form-control"}/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-info">Sign Up</button>
                </div>
            </form>
                    <div>
                        <Link to="/login">Sign In</Link>
                    </div>
                </div>
            </div>
            </div>
    );
}

export default Register;
