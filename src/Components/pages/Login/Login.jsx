import { useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [showPassword,setShowPassword]=useState(true)
    
    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        if(/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)){
            console.log(email,password)
        }
      else{
      toast('Password will be minimum 6 charecter ,munimum have 1 capital later and 1 special charecter')
      }
      
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold pb-4">Login now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
         <div className="relative">
         <input type={showPassword?"text":"password"} name="password" placeholder="password" className="input input-bordered w-full" required />
         <span className="absolute top-4 right-1" onClick={()=>setShowPassword(!showPassword)}>{showPassword?<AiFillEyeInvisible></AiFillEyeInvisible>:<AiFillEye></AiFillEye>}</span>
         </div>
          <label className="label">
            <p>New Here? please <Link className="text-blue-400" to='/register'>Register</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;