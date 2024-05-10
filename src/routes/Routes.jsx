import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Assignments from "../Pages/Assignments";
import CreateAssignment from "../Pages/CreateAssignment";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import PendingAssignment from "../Pages/PendingAssignment";


  export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>

        },
        {
            path: '/assignments',
            element: <Assignments></Assignments>
        },
        {
            path: '/create-assignment',
            element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
        },
        {
            path: '/pending-assignment',
            element: <PrivateRoute><PendingAssignment></PendingAssignment></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);