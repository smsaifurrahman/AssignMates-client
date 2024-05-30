/** @format */

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const PendingAssignment = () => {
   const [assignments, setAssignments] = useState([]);
   const axiosSecure = UseAxiosSecure();

   useEffect(() => {
      getData();
   }, []);

   const getData = async () => {
      try {
         const { data } = await axiosSecure(`/pending`);
         setAssignments(data);
      } catch (err) {
         console.log(err.message);
      }
   };

   return (
      <div className="">
      
         <h2 className="text-center text-3xl my-6 font-serif font-bold">
           
            You can mark these assignments{" "}
         </h2>
         <div className=" ">
            <div className="overflow-x-auto w-full  ">
               <table className="table ">
                  <thead >
                     <tr className="text-xl font-bold">
                        <th className="font-bold">No</th>
                        <th>Title</th>
                        <th>Marks</th>
                        <th>Submitted by</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {assignments.map((assignment, idx) => (
                        <tr 
                        className="text-xl"
                        key={assignment._id}>
                           <th> {idx + 1} </th>
                           <td>{assignment.assignment_title}</td>
                           <td> {assignment.marks} </td>
                           <td>{assignment.examineeName}</td>
                           <td>
                              <Link
                                 to={`/marking-page/${assignment._id}`}
                                 className="btn btn-secondary"
                              >
                                 Give Mark
                              </Link>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default PendingAssignment;
