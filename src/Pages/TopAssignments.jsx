/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
import AssignmentCard from "../Components/AssignmentCard";
import { Link } from "react-router-dom";
import { addDoc } from "firebase/firestore/lite";

const TopAssignments = () => {
   const [assignments, setAssignments] = useState([]);
   const axiosSecure = UseAxiosSecure();

   useEffect(() => {
      axiosSecure
         .get("/top-assignments")
         .then((response) => {
            setAssignments(response.data);
         })
         .catch((error) => {
            console.error("Error fetching top assignments:", error);
         });
   }, []);

   return (
      <div>
         <h1 className="text-3xl text-center font-bold my-6"> Top 3 Most Attempted Assignments </h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {assignments.map((assignment, index) => (
               <div key={assignment._id}>
                <h1 className="text-2xl  text-center my-2 font-bold "> Total submission {assignment.count} times </h1>
                  <div className="card h-[500px]  bg-base-100 shadow-xl   md:hover:scale-105 transition-transform duration-300">
                     <figure className="relative h-60">
                        <img
                           className="h-full w-full"
                           src={assignment.assignment.thumbnail_image}
                           alt="Shoes"
                        />
                        <p
                           className="absolute bg-orange-500 text-white font-bold px-4 py-2
              rounded-r left-0 bottom-0"
                        >
                           {" "}
                           {assignment.assignment.difficulty_level}{" "}
                        </p>
                     </figure>
                     <div className="card-body">
                        <div className="flex items-center gap-8 mb-4 justify-between">
                           <h2 className="card-title font-bold text-sky-500 italic">
                              {assignment.assignment.assignment_title}
                           </h2>

                           <p className="text-xl "><span className="text-sky-500 text-xl font-bold">Total Marks: </span> {assignment.assignment.marks} </p>
                        </div>
                       <h2> <span className="text-sky-500 text-xl font-bold">Description: </span> {assignment.assignment.description} </h2>
                       <h2> <span className="text-sky-500 text-xl font-bold">Deadline: </span> {new Date(assignment.assignment.deadline).toLocaleDateString()} </h2>
                        <div className=" ">
                           {/* <Link to={`/view-details/${assignment.assignment_title._id}`}>
                              <button className="btn bg-green-400 text-white">
                                 View Details
                              </button>
                           </Link> */}
                           {/* <Link to={`/update/${_id}`}>
                              <button className="btn   mx-1 btn-secondary">
                                 Update
                              </button>
                           </Link>
                           <button
                              onClick={handleDelete}
                              className="btn btn-error text-white"
                           >
                              Delete
                           </button> */}
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default TopAssignments;
