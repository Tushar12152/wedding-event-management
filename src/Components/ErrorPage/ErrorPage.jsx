import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
             <h1 className="text-center text-red-700 font-bold text-4xl mt-28">404</h1>
             <h2  className="text-center text-red-500 font-bold text-4xl mt-2">Page Not Found</h2>
             <Link to='/' className="btn bg-pink-200 ml-[650px] mt-4">Go Home</Link>
        </div>
    );
};

export default ErrorPage;