

import { Navigate, useLocation } from "react-router-dom";
import useContextApiHook from "../Custom Hooks/useContextApiHook";
import PropTypes from 'prop-types'

const PrivateRoute = ({children}) => {
    const location=useLocation()
    console.log(location.pathname)
   
    const {user,loading}=useContextApiHook()
    if(loading){
     
     return  <span className="loading loading-spinner text-accent lg:ml-[600px] lg:mt-36"></span>
      
    }
    else{
        if(user){

            return  children;
        }
        return <Navigate state={location.pathname} to="/login"></Navigate>
    }

   
};

PrivateRoute.propTypes={
    children:PropTypes.node,
}

export default PrivateRoute;