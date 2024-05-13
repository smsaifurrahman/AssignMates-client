/** @format */

import React, { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const MySubmission = () => {
   const { user } = UseAuth() || {};
   const axiosSecure = UseAxiosSecure();
   const [assignments, setAssignments] = useState([]) || [];

   useEffect(() => {
      getData();
   }, []);
   const getData = async () => {
      try {
         const { data } = await axiosSecure.get(`/pending/${user?.email}`);
         setAssignments(data);
      } catch (err) {
         console.log(err.message);
      }
   };

   return (
      <div>
         my submission {assignments.length}
         <h2 className="text-center text-2xl my-6 font-bold">
            My Submission List
         </h2>
         <div className="">
            {assignments.map((assignment, idx) => (
               <div
                  key={assignment._id}
                  className="card mb-4 bg-base-100 shadow-xl"
               >
                  <div className=" my-6 mx-5">
                     <p>{idx + 1}</p>
                     <h2 className="card-title">
                        {" "}
                        {assignment.assignment_title}{" "}
                     </h2>
                     <p className="">
                        {" "}
                        Status:{" "}
                        <span
                           className={
                              assignment.status === "pending"
                                 ? "text-orange-500"
                                 : "text-green-500"
                           }
                        >
                           {" "}
                           {assignment.status}{" "}
                        </span>{" "}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default MySubmission;
