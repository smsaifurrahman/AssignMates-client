/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import UseAuth from "../Hooks/UseAuth";
import toast from "react-hot-toast";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const AssignmentCard = ({ assignment }) => {
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
      if (user.email !== user_email)
         return Swal.fire({
            title: "Unauthorized",
            text: "You are not authorized to delete",
            icon: "error",
         });

      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
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
            } catch (err) {
               console.log(err.message);
            }
         }
      });
   };

   return (
      <div className="card  bg-base-100 shadow-xl hover:">
         <figure>
            <img className="h-60 w-full" src={thumbnail_image} alt="Shoes" />
         </figure>
         <div className="card-body">
            <h2 className="card-title">{assignment_title}</h2>
            <p> {difficulty_level} </p>
            <p> </p>
            <div className=" ">
               <Link to={`/view-details/${_id}`}>
                  <button className="btn btn-primary">View Details</button>
               </Link>
               <Link to={`/update/${_id}`}>
                  <button className="btn   mx-1 btn-primary">Update</button>
               </Link>
               <button onClick={handleDelete} className="btn btn-primary">
                  Delete
               </button>
            </div>
         </div>
      </div>
   );
};

export default AssignmentCard;
