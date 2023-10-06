import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/pages/Home/Home";
import Root from "../Root/Root";
import Wedding from "../Components/pages/wedding/Wedding";
import SpecialEvent from "../Components/pages/SpecialEvent/SpecialEvent";
import Register from "../Components/pages/Register/Register";
import Login from "../Components/pages/Login/Login";
import ViewDetail from './../Components/pages/detail/ViewDetail';

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
                path:'/specialEvent',
                element:<SpecialEvent></SpecialEvent>
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