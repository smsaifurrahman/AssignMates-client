/** @format */

import React, { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const MySubmission = () => {
   const { user } = UseAuth() || {};
   const axiosSecure = UseAxiosSecure();
   const [assignments, setAssignments] = useState([]) || [];
   const [preview, setPreview] = useState("");

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
    
         <h2 className="text-center text-2xl my-6 font-bold">
            My Submission List
         </h2>
         <div className="">
            {assignments.map((assignment, idx) => (
               <div
                  key={assignment._id}
                  className="card mb-4 border-green-300 border-2"
               >
                  <div className=" my-6 mx-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-6">
                     <div className="flex items-center gap-2 ">
                        <p className=" text-2xl font-bold"> {idx + 1}: </p>
                        <div>
                           <h2 className="card-title text-2xl font-bold ">
                              {assignment.assignment_title}
                           </h2>
                           <p className=" text-xl font-bold">
                              Status:
                              <span
                                 className={
                                    assignment.status === "Pending"
                                       ? "text-orange-500 ml-2"
                                       : "text-green-500 ml-2"
                                 }
                              >
                                 {assignment.status}
                              </span>
                           </p>
                        </div>
                     </div>
                     <div>
                        <p className="text-xl font-bold">
                           <span>Total Marks: </span> {assignment.marks}
                        </p>
                        <p >
                           <span className="text-xl font-bold"> Your Marks: </span>
                           {assignment.obtained_mark
                              ? assignment.obtained_mark
                              : "Pending"}
                        </p>
                     </div>
                     <div>
                        <p className="text-xl font-bold mr-3">
                           Feedback:
                        </p>
                        <p>
                           {assignment.examiner_feedback
                              ? assignment.examiner_feedback
                              : "Pending"}
                        </p>
                     </div>
                     <div>
                        <button
                           className="btn btn-secondary"
                           onClick={() => {
                              document.getElementById("my_modal_4").showModal();
                              setPreview(assignment.doc);
                           }}
                        >
                           Preview submitted doc
                        </button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         {/* Open the modal using document.getElementById('ID').showModal() method */}
         {/* You can open the modal using document.getElementById('ID').showModal() method */}
         <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-2xl">
               <h3 className="font-bold text-lg">Submitted doc preview</h3>

               <div className="modal-action ">
                  <iframe
                     src={preview}
                     className="w-full"
                     title="Preview"
                  ></iframe>
                  <form className="flex " method="dialog">
                     {/* if there is a button, it will close the modal */}
                     <div className="flex flex-col justify-end">
                        <button className="btn btn-primary">Close</button>
                     </div>
                  </form>
               </div>
            </div>
         </dialog>
      </div>
   );
};

export default MySubmission;
