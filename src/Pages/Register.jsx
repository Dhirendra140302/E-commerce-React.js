import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  let navigate=useNavigate();
   const [formData, setFormData] = useState({ name: "", email: "", phone: "", gender: "",
     dob: "", password: "", confirmPassword: "", terms: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,[name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.phone || !formData.gender
       || !formData.dob || !formData.password || !formData.confirmPassword || !formData.terms){
      alert("All Fields are Mandatory");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try{
       let res= await axios.get(`http://localhost:3000/users?email=${formData.email}`);
       console.log(res)
       if(res.data.length>0){
        alert("User Already Exists");
        return;
       }
       await axios.post("http://localhost:3000/users", formData);
       alert("Registration Successfull");
       navigate("/login");
    }
    catch(err){console.log(err)}
    console.log(formData);
  };

  return (
    <div className="register-body">
      <div className="register-wrapper">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="register-title">Create Account</h2>

          <div className="register-input-field">
            <input type="text" name="name" placeholder="Full Name"
              className="register-input" onChange={handleChange}/>
          </div>

          <div className="register-input-field">
            <input type="email" name="email" placeholder="Email Address"
              className="register-input" onChange={handleChange}/>
          </div>

          <div className="register-input-field">
            <input type="tel" name="phone" placeholder="Phone Number" 
              className="register-input" maxLength={10} onChange={handleChange}/>
          </div>

          {/* Gender */}
          <div className="register-gender">
            <label className="gender-label">Gender:</label>
            <label>
              <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="Other" onChange={handleChange} /> Other
            </label>
          </div>

          {/* DOB */}
          <div className="register-input-field">
            <input type="date" name="dob" className="register-input" onChange={handleChange}/>
          </div>

          <div className="register-input-field">
            <input type="password" name="password" placeholder="Create Password" className="register-input" onChange={handleChange}/>
          </div>

          <div className="register-input-field">
            <input type="password" name="confirmPassword" placeholder="Confirm Password" className="register-input" onChange={handleChange}/>
          </div>

          {/* Terms */}
          <div className="register-terms">
            <label>
              <input type="checkbox" name="terms" onChange={handleChange}/> I agree to Terms & Conditions
            </label>
          </div>

          <button className="register-btn">Register</button>

          <div className="register-login">
            Already have an account? 
            <Link to="/login" className="register-login-link"> Login</Link>
          </div>

        </form>
      </div>
    </div>
  );
}
export default Register;