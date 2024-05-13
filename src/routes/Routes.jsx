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
import ViewDetails from "../Pages/ViewDetails";
import UpdateAssignment from "../Pages/UpdateAssignment";
import MySubmission from "../Pages/MySubmission";
import MarkAssignmentPage from "../Pages/MarkAssignmentPage";


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
          path: '/view-details/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/assignments/${params.id}`)
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/assignments/${params.id}`)
        },
        {
          path: '/my-submission',
          element: <PrivateRoute><MySubmission></MySubmission></PrivateRoute>
        },
        {
            path: '/pending-assignment',
            element: <PrivateRoute><PendingAssignment></PendingAssignment></PrivateRoute>
        },
        {
          path: '/marking-page/:id',
          element: <MarkAssignmentPage></MarkAssignmentPage>,
          loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/pending/mark/${params.id}`)

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