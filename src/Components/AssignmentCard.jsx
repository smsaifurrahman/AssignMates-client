/** @format */


import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import UseAuth from "../Hooks/UseAuth";
import toast from "react-hot-toast";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const AssignmentCard = ({ assignment, onDelete }) => {
   const axiosSecure = UseAxiosSecure();
   const { user } = UseAuth();
   const {
      assignment_title,
      marks,
      thumbnail_image,
      difficulty_level,
      _id,
      deadline,
      user_email,
   } = assignment;

   const handleDelete = async () => {
      if(!user) return Swal.fire({
         title: "Unauthorized",
         text: "You need to login first",
         icon: "error",
      });
      if (user.email !== user_email)
         return Swal.fire({
            title: "Unauthorized",
            text: "You are not authorized to delete it",
            icon: "error",
         });

      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this data!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            try {
               const { data } = axiosSecure.delete(`/delete/${_id}`);
               Swal.fire({
                  title: "Deleted!",
                  text: "Assignment deleted.",
                  icon: "success",
               });
               onDelete(_id)
            } catch (err) {
               console.log(err.message);
            }
         }
      });
   };

   return (
      <div className="card  bg-base-100 shadow-xl   md:hover:scale-105 transition-transform duration-300">
         <figure className="relative">
            <img className="h-60 w-full" src={thumbnail_image} alt="Shoes" />
            <p className="absolute bg-orange-500 text-white font-bold px-4 py-2
              rounded-r left-0 bottom-0"> {difficulty_level} </p>
         </figure>
         <div className="card-body">
           <div className="flex items-center gap-8 mb-4 justify-between">
           <h2 className="card-title font-bold text-sky-500 italic">{assignment_title}</h2>
           
           <p className="text-xl "> Total Marks: {marks} </p>
           </div>
            <div className=" ">
               <Link to={`/view-details/${_id}`}>
                  <button className="btn bg-green-400 text-white">View Details</button>
               </Link>
               <Link to={`/update/${_id}`}>
                  <button className="btn   mx-1 btn-secondary">Update</button>
               </Link>
               <button onClick={handleDelete} className="btn btn-error text-white">
                  Delete
               </button>
            </div>
         </div>
      </div>
   );
};

export default AssignmentCard;
