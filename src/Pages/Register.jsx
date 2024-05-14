/** @format */

import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import sideImg from "../assets/register.jpg";

const Register = () => {
   const axiosSecure = UseAxiosSecure();
   const navigate = useNavigate();
   const {
      user,
      setUser,
      loading,
      setLoading,
      createUser,
      logOut,
      updateUserProfile,
   } = UseAuth();
   const location = useLocation();
   const from = location.state || "/";

   const handleRegister = async (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const name = form.name.value;
      const photo = form.photo.value;
      const pass = form.password.value;
      console.log({ email, pass, name, photo });
      try {
         //2. User Registration
         const result = await createUser(email, pass);
         const { data } = await axiosSecure.post(`/jwt`, {
            email: result?.user?.email,
         });
         // console.log(result);
         await updateUserProfile(name, photo);
         setUser({ ...result?.user, photoURL: photo, displayName: name });

         navigate(from, { replace: true });

         toast.success("Registration Successful");
      } catch (err) {
         console.log(err);
         toast.error(err?.message);
      }
   };

   return (
     <div className="flex flex-col items-center ">
       <div className=" w-full md:w-1/2 pb-4 my-6 px-6 my md:px-8 lg:w-1/2 border-2 rounded-2xl">
               <div className="flex justify-center mx-auto">
                  <img className="w-auto h-7 sm:h-8" src="" alt="" />
               </div>

               <p className="mt-3 text-xl text-center '' ">
                  Get Your Free Account Now.
               </p>

               {/* <div className='flex cursor-pointer items-center justify-center mt-4 '' transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
              <div className='px-4 py-2'>
                <svg className='w-6 h-6' viewBox='0 0 40 40'>
                  <path
                    d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                    fill='#FFC107'
                  />
                  <path
                    d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                    fill='#FF3D00'
                  />
                  <path
                    d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                    fill='#4CAF50'
                  />
                  <path
                    d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                    fill='#1976D2'
                  />
                </svg>
              </div>
  
              <span className='w-5/6 px-4 py-3 font-bold text-center'>
                Sign in with Google
              </span>
            </div> */}

               <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b  lg:w-1/4"></span>

                  <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
                     Register with email
                  </div>

                  <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
               </div>
               <form onSubmit={handleRegister}>
                  <div className="mt-4">
                     <label
                        className="block mb-2 text-sm font-medium '' "
                        htmlFor="name"
                     >
                        Username
                     </label>
                     <input
                        id="name"
                        autoComplete="name"
                        name="name"
                        className="block w-full px-4 py-2 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                        type="text"
                     />
                  </div>
                  <div className="mt-4">
                     <label
                        className="block mb-2 text-sm font-medium '' "
                        htmlFor="photo"
                     >
                        Photo URL
                     </label>
                     <input
                        id="photo"
                        autoComplete="photo"
                        name="photo"
                        className="block w-full px-4 py-2 '' bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                        type="text"
                     />
                  </div>
                  <div className="mt-4">
                     <label
                        className="block mb-2 text-sm font-medium '' "
                        htmlFor="LoggingEmailAddress"
                     >
                        Email Address
                     </label>
                     <input
                        id="LoggingEmailAddress"
                        autoComplete="email"
                        name="email"
                        className="block w-full px-4 py-2 '' bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                        type="email"
                     />
                  </div>

                  <div className="mt-4">
                     <div className="flex justify-between">
                        <label
                           className="block mb-2 text-sm font-medium '' "
                           htmlFor="loggingPassword"
                        >
                           Password
                        </label>
                     </div>

                     <input
                        id="loggingPassword"
                        autoComplete="current-password"
                        name="password"
                        className="block w-full px-4 py-2 '' bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                        type="password"
                     />
                  </div>
                  <div className="mt-6">
                     <button
                        type="submit"
                        className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-sky-500 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                     >
                        Register
                     </button>
                  </div>
               </form>

               <div className=" items-center text-center mt-4">
                  {/* <span className='w-1/5 border-b md:w-1/4'></span> */}
                  Already have an account?
                  <Link
                     to="/login"
                     className="text-xs text-green-500 font-bold uppercase hover:underline"
                  >
                     sign in here
                  </Link>
                  <span className="w-1/5 border-b  md:w-1/4"></span>
               </div>
            </div>
     </div>
   );
};

export default Register;
