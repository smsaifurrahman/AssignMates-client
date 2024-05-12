/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import PendingCard from "../Components/PendingCard";
import { Link } from "react-router-dom";

const PendingAssignment = () => {
   const [assignments, setAssignments] = useState([]);

   useEffect(() => {
      getData();
   }, []);

   const getData = async () => {
      try {
         const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/pending`
         );
         setAssignments(data);
      } catch (err) {
         console.log(err.message);
      }
   };

   return (
      <div className="">
         pending {assignments.length}
         <h2 className="text-center text-2xl font-bold">
            {" "}
            You can mark these assignments{" "}
         </h2>
         <div className=" ">
            <div className="overflow-x-auto w-full border-2 ">
               <table className="table ">
                
                 <thead>
                     <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Marks</th>
                        <th>Name</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {assignments.map((assignment, idx) => (
                        <tr key={assignment._id}>
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
