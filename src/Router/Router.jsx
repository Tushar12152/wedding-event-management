import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/pages/Home/Home";
import Root from "../Root/Root";
import Wedding from "../Components/pages/wedding/Wedding";

import Register from "../Components/pages/Register/Register";
import Login from "../Components/pages/Login/Login";
import ViewDetail from './../Components/pages/detail/ViewDetail';
import Purchase from "../Components/pages/Purchase/purchase";

const Router =createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('/service.json')

            },
            {
                path:'/wedding',
                element:<Wedding></Wedding>
            },
            {
                path:'/purchase',
                element:<Purchase></Purchase>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:'/detail/:id',
                element:<ViewDetail></ViewDetail>,
                loader:()=>fetch('/service.json')

            }

        ]
    }
])

export default Router;