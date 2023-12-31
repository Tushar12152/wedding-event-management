import { useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import swal from 'sweetalert';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useContextApiHook from "../../../Custom Hooks/useContextApiHook";
import { FcGoogle } from 'react-icons/fc';
import {FaGithub } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";



const Login = () => {
  const location=useLocation()
  // console.log(location)
    const [showPassword,setShowPassword]=useState(true)
    const{login,googleSignUp,githubSignUp}=useContextApiHook()
  const navigate=useNavigate()
    

const handlePopUp=(item)=>{
  item()
  .then((result)=>{
    console.log(result.user)
    navigate(location?.state? location.state:'/')
    swal( "You are signed up! ", "success");
  })
  .catch(error=>{
    console.log(error.message)
    swal("Error!", `${error}`, "error");
  })
}

    const handleLogin=e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        if(/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)){
            console.log(email,password)
            login(email,password)
            .then(()=>{
              swal("WOW!", "You are Successfully login! ", "success");
              navigate(location?.state? location.state:'/')
            })
            .catch(error=>{
              swal("Error!", `${error}`, "error");
            })
        }
      else{
      toast('Password will be minimum 6 charecter ,munimum have 1 capital later and 1 special charecter')
      }
      
    }

    return (
        <div>
           <Helmet>
             <title>Login</title>
          </Helmet>
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
         <span className="absolute top-4 right-1" onClick={()=>setShowPassword(!showPassword)}>{showPassword?<AiFillEye></AiFillEye>:<AiFillEyeInvisible></AiFillEyeInvisible>}</span>
         </div>
          <label className="label">
            <p>New Here? please <Link className="text-blue-400" to='/register'>Register</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
             <p className="text-center font-semibold border-b-2 py-2">Sign Up with</p>
             <div>
                      <button onClick={()=>handlePopUp(googleSignUp)} className="p-2 text-2xl ml-16"><FcGoogle></FcGoogle></button>

                      <button onClick={()=>handlePopUp(githubSignUp)} className="p-2 text-2xl"><FaGithub></FaGithub></button>
             </div>
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