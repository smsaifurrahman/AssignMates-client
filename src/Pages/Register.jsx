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
      if(pass.length < 6) return toast.error('Password Should be at least 6 character')
      // console.log({ email, pass, name, photo });
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
         toast.error('User Already Exits');
      }
   };

   return (
     <div className="flex flex-col items-center ">
       <div className=" w-full md:w-1/2 pb-4 my-6 px-6 my md:px-8 lg:w-1/2 border-2 rounded-2xl">
               <div className="flex justify-center mx-auto">
                  <img className="w-auto h-7 sm:h-8" src="" alt="" />
               </div>

               <p className="mt-3 text-2xl font-bold text-center '' ">
                  Register Free Account Now.
               </p>


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
                        required
                        autoComplete="name"
                        name="name"
                        className="block w-full px-4 py-2  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
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
                        required
                        autoComplete="photo"
                        name="photo"
                        className="block w-full px-4 py-2 ''  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
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
                        required
                        autoComplete="email"
                        name="email"
                        className="block w-full px-4 py-2 ''  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
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
                        required
                        autoComplete="current-password"
                        name="password"
                        className="block w-full px-4 py-2 ''  border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                        type="text"
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
