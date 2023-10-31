import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Cars from "../pages/Cars/Cars/Cars";
import CarCategories from "../pages/Cars/CarCategories/CarCategories";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import MakeAdmin from "../pages/Dashboard/MakeAdmin/MakeAdmin";
import Blog from "../pages/Blog/Blog";
import Payment from "../pages/Dashboard/Payment/Payment";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'carCategories',
            element: <CarCategories></CarCategories>
        },
        {
          path: 'cars/:category',
          element:<Cars></Cars>
        },
        {
          path: 'login',
          element:<Login></Login>
        },
        {
          path: 'signup',
          element:<SignUp></SignUp>
        },
        {
          path: 'blogs',
          element:<Blog></Blog>
        },
        {
          path: 'payment',
          element:<Payment></Payment>
        }
      ],
    },
    {
      path: "dashboard",
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'allusers',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'makeAdmin',
          element: <MakeAdmin></MakeAdmin>
        }
      ]
    }
  ]);