import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    let[form,setForm]=useState({ email:"", password:""})
    let navigate=useNavigate();
    let handleChange= (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    console.log(form);
    let handleSubmit = async (e) => {
        e.preventDefault();
        if(!form.email || !form.password){
            alert("All Fields are Mandatory...");
            return;
        }
        try{
            let res = await axios.get(`http://localhost:3000/users?email=${form.email}`)
            if(res.data.length===0){
                alert("User Not Registered");
                return;
            }
            let user= res.data[0]
            if(user.password!==form.password){
                alert("Invalid Password");
                return;
            }
            // console.log(form)
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
            setTimeout(() => {
                window.location.reload();
            }, 100);
            alert("Login Successfull");
        }
        catch(err){
            console.log(err);
        }
    }
    return(
    <div className="loginbody">
        <div className="wrapper">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="login-title">Login Form</h2>
                <div className="input-field">
                    <input type="email" placeholder="Enter Your Email" name="email"
                    className="login-input" onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Enter Your Password" name="password"
                    className="login-input" onChange={handleChange}/>
                </div>
                <div className="forget">
                    <label className="remember-label">
                        <input type="checkbox" className="remember-checkbox"/>
                        <p className="remember-text">Remember me</p>
                    </label>
                    <Link className="forget-link">Forget Password</Link>
                </div>
                <button className="login-btn">Log In</button>
                <div className="register">
                    <p>
                    Don't Have an account ? 
                    <Link to="/register" className="register-link"> register</Link>
                    </p>
                </div>
            </form>
        </div>
    </div>
    )
}
export default Login;