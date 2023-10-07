import { useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import useContextApiHook from './../../../Custom Hooks/useContextApiHook';

const Register = () => {
    const [showPassword,setShowPassword]=useState(true)
    const {createUser}=useContextApiHook()
    
    const handleRegister=e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        if(/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)){
            // console.log(email,password)
            createUser(email,password)
            .then(()=>{
                    
                     swal("WOW!", "Your registration Successfully compleate! go to LogIn", "success");
            })
            .catch(error=>{
              // console.log(error)
              swal("Error!", `${error.message}`, "error");
            })
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
      <h1 className="text-5xl font-bold pb-4">Register now!</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
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
            <p>Already have an account? please <Link className="text-blue-400" to='/Login'>Login</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;