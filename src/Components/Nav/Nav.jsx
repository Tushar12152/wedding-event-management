import { Link, NavLink, useNavigate } from "react-router-dom";
import useContextApiHook from "../../Custom Hooks/useContextApiHook";
import swal from 'sweetalert';

const Nav = () => {
   const navigate=useNavigate()
  const {user,logOut}=useContextApiHook()
  
  // console.log(user)
 

  const signOut=()=>[
    logOut()
    .then(()=>{
       navigate('/login')
    })
    .catch(error=>{
      swal("Error!", `${error}`, "error");

    })
  ]

    const navlinks=<div className="flex  gap-6">
            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>HOME</NavLink>

            <NavLink to="/purchase" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>YOUR PURCHASE</NavLink>

            <NavLink to="/wedding" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>WEDDINGS</NavLink>

            <NavLink to="/register" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>REGISTER</NavLink>

            <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>LOGIN</NavLink>
       </div> 
    return (
       

        <div className="bg-base-300 py-5">
            <div className="navbar w-[98%] mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 w-52">
       {navlinks}
      </ul>
    </div>
     <img className="w-[120px]" src='https://i.ibb.co/fkVcLM4/New-Logo.webp'/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user?<div className="flex gap-1">
            {user?.photoURL&&  <img className="w-12 rounded-full"  src={user?.photoURL}  alt="" /> }
      
       <div  className="flex gap-2 items-center">
       <p className="bg-yellow-300 ">{user?.email}</p>
    
        <button onClick={signOut} className="btn bg-pink-200">LogOut</button>
       </div>

      </div>
      :<Link to='/login' className="btn bg-pink-200">LogIn</Link>
    }
  </div>
</div>
        </div>
    );
};

export default Nav;