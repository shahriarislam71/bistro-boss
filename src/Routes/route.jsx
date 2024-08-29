import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import OurMenu from "../pages/ourMenuPage/OurMenu/OurMenu";
import OrderComponents from "../pages/orderPage/storedComponent/OrderComponents";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Secret from "../pages/secret/Secret";
import ExclusiveRoute from "./ExclusiveRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/dashboard/Mycart/MyCart";
import AdminHome from "../pages/dashboard/adminHome/AdminHome";
import AllUsers from "../pages/dashboard/Allusers/AllUsers";
import AddItems from "../pages/dashboard/Additems/AddItems";
import ManageItems from "../pages/dashboard/manageItems/ManageItems";
import Payment from "../pages/dashboard/payment/Payment";
import UserHome from "../pages/dashboard/userhome/UserHome";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "ourmenu",
                element : <OurMenu></OurMenu>
            },
            {
                path : "shop/:type",
                element : <OrderComponents></OrderComponents>
            },
            {
                path : "secret",
                element : <ExclusiveRoute><Secret></Secret></ExclusiveRoute>
            }
        ]
    },
    {
        path : "login",
        element : <Login></Login>
    },
    {
        path : "register",
        element : <Register></Register>
    },
    {
        path : "dashboard",
        element : <ExclusiveRoute><Dashboard></Dashboard></ExclusiveRoute>,
        children : [
            {
                path : 'userhome',
                element : <UserHome></UserHome>
            },
            {
                path : "mycart",
                element : <MyCart></MyCart>
            },
            {
                path : "payment",
                element : <Payment></Payment>
            },
            {
                path : "adminHome",
                element : <AdminHome></AdminHome>
            },
            {
                path : 'allUsers',
                element : <AllUsers></AllUsers>
            },
            {
                path : "additems",
                element : <AddItems></AddItems>
            },
            {
                path : "manageitems",
                element : <ManageItems></ManageItems>
            }
        ]

    }
]);