import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useContextApiHook = () => {
    const dataFromAuthProvider=useContext(AuthContext)
    return dataFromAuthProvider;
};

export default useContextApiHook;