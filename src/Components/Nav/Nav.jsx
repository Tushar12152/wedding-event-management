import { NavLink } from "react-router-dom";

const Nav = () => {
    const navlinks=<div className="flex gap-6">
            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>HOME</NavLink>

            <NavLink to="/wedding" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>WEDDINGS</NavLink>

            <NavLink to="/specialEvent" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>SPECIAL EVENTS</NavLink>

            <NavLink to="/register" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>REGISTER</NavLink>

            <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-600 underline" : ""}>LOGIN</NavLink>
       </div> 
    return (
       

        <div>
            <div className="navbar w-[90%] mx-auto bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Nav;