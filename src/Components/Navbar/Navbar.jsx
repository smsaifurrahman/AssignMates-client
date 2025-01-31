/** @format */

import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.png";
import UseAuth from "../../Hooks/UseAuth";

const Navbar = () => {
   const { user, logOut } = UseAuth();
   const navigate = useNavigate();
   const handleLogout = () => {
    logOut();
    navigate('/') 
   }
   const navLinks = (
      <>
         <NavLink
            to={"/"}
            className={({ isActive }) =>
               isActive
                  ? " font-bold text-xl text-gray-500 p-2 text-rounded-xl "
                  : "font-bold p-2 text-xl text-sky-500 rounded-xl "
            }
         >
            Home
         </NavLink>
         <NavLink
            to={"/assignments"}
            className={({ isActive }) =>
               isActive
                  ? " font-bold text-xl text-gray-500 p-2 text-rounded-xl "
                  : "font-bold p-2 text-xl text-sky-500 rounded-xl "
            }
         >
            Assignments
         </NavLink>
         {
            user && <>
            <NavLink
            to={"/create-assignment"}
            className={({ isActive }) =>
               isActive
                  ? " font-bold text-xl text-gray-500 text-gray-500text-rounded-xl p-2 "
                  : "font-bold p-2 text-xl text-sky-500 rounded-xl "
            }
         >
            Create Assignments
         </NavLink>
         <NavLink
            to={"/pending-assignment"}
            className={({ isActive }) =>
               isActive
                  ? " font-bold text-xl text-gray-500  p-2  text-gray-500text-rounded-xl "
                  : "font-bold p-2 text-xl text-sky-500 rounded-xl "
            }
         >
            Pending Assignment
         </NavLink>
         <NavLink
            to={"/top-assignments"}
            className={({ isActive }) =>
               isActive
                  ? " font-bold text-xl text-gray-500  p-2  text-gray-500text-rounded-xl "
                  : "font-bold p-2 text-xl text-sky-500 rounded-xl "
            }
         >
            Top Assignments
         </NavLink>
            </>
         }
      </>
   );

   const [theme, setTheme] = useState("light");

   useEffect(() => {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme");
      document.querySelector("html").setAttribute("data-theme", localTheme);
   }, [theme]);

   const handleToggle = (e) => {
      if (e.target.checked) {
         setTheme("night");
      } else {
         setTheme("light");
      }
   };

   return (
      <div className="navbar bg-base-100 ">
         <div className="navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[5] p-2 shadow bg-base-100 rounded-box w-52"
               >
                  {navLinks}
               </ul>
            </div>
            <Link to={"/"}  className=" italic font-bold  cursor-pointer text-3xl">Assign<span className="text-sky-500 text-3xl md:text-5xl">M</span>ates

            </Link>
           

         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
         </div>
         <div className="navbar-end">
            {!user ? (
               <>
                  <NavLink
                     to={"/login"}
                     className={({ isActive }) =>
                        isActive
                           ? " font-bold text-xl text-gray-500  p-2  text-gray-500text-rounded-xl "
                           : "font-bold p-2 text-xl text-sky-500 rounded-xl "
                     }
                  >
                     Login
                  </NavLink>
                  <NavLink
                     to={"/register"}
                     className={({ isActive }) =>
                        isActive
                           ? " font-bold text-xl text-gray-500  p-2  text-gray-500text-rounded-xl "
                           : "font-bold p-2 text-xl text-sky-500 rounded-xl "
                     }
                  >
                     Register
                  </NavLink>
                  {/* theme toggle */}
                  <div className="mr-2">
                     <label className=" cursor-pointer grid place-items-center">
                        <input
                           onChange={handleToggle}
                           type="checkbox"
                           value=""
                           className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                        />
                        <svg
                           className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                           xmlns="http://www.w3.org/2000/svg"
                           width="14"
                           height="14"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <circle cx="12" cy="12" r="5" />
                           <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                           className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                           xmlns="http://www.w3.org/2000/svg"
                           width="14"
                           height="14"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                     </label>
                  </div>
               </>
            ) : (
               <>
                  <div className="mr-2">
                     <label className=" cursor-pointer grid place-items-center">
                        <input
                           onChange={handleToggle}
                           type="checkbox"
                           value=""
                           className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                        />
                        <svg
                           className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                           xmlns="http://www.w3.org/2000/svg"
                           width="14"
                           height="14"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <circle cx="12" cy="12" r="5" />
                           <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                           className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                           xmlns="http://www.w3.org/2000/svg"
                           width="14"
                           height="14"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        >
                           <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                     </label>
                  </div>

                  <div className="dropdown dropdown-end z-50">
                     <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                     >
                        <div className="w-10 rounded-full" title="">
                           <img
                              title={user?.displayName}
                              referrerPolicy="no-referrer"
                              alt="User Profile Photo"
                              src={user?.photoURL}
                           />
                        </div>
                     </div>
                     <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
                     >
                        <li>
                           <Link to={'/my-submission'}><div className="justify-between text-sky-500 font-bold">My Submission</div></Link>
                        </li>

                        <li className="mt-2">
                           <button
                              onClick={handleLogout}
                              className=" block text-sky-500 font-bold text-center"
                           >
                              Logout
                           </button>
                        </li>
                     </ul>
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default Navbar;
