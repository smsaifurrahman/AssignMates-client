
import axios from 'axios'
import UseAuth from './UseAuth';
import { useNavigate } from 'react-router-dom';
const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials:true
}) 


const UseAxiosSecure = () => {
    const {logOut} = UseAuth();
    const navigate = useNavigate()
   
    axiosSecure.interceptors.response.use(res =>{
        // console.log('response from axios ');
        return res
    }, 
   async error => {
        console.log('error from axios interceptor', error.response);
        if(error.response.status === 401 || error.response.status ===403) {
           await logOut();
            navigate('/login')
        }
        return Promise.reject(error)

    }
)


    // axios.interceptors.request

    return axiosSecure;
    
};

export default UseAxiosSecure;