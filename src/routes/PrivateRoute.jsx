
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const location = useLocation()
    if(loading) return  <div className="flex flex-col justify-center items-center"> <span className="loading loading-dots loading-lg"></span></div>
    
    

    if (user) return children;


    return <Navigate  to={'/login'} state={location.pathname} replace={true}  ></Navigate>
};

export default PrivateRoute;