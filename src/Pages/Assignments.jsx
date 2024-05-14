// /** @format */

// In Assignments.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import AssignmentCard from "../Components/AssignmentCard";
import { useLoaderData } from "react-router-dom";

const Assignments = () => {
   const loadedAssignments = useLoaderData() || [];
   const [assignments, setAssignments] = useState(loadedAssignments);

   useEffect(() => {
      // getData();
   }, [assignments]);

   const getData = async (level) => {
      try {
         const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/assignments${
               level ? `?sortBy=${level}` : ""
            }`
         );
         setAssignments(data);
      } catch (err) {
         console.log(err.message);
      }
   };

   const handleDelete = async (id) => {
      try {
         setAssignments(assignments.filter(assignment => assignment._id !== id));
      } catch (err) {
         console.log(err.message);
      }
   };

   return (
      <div>
         <h2 className="text-center text-3xl font-serif my-6 font-bold">Choose Your Challenge</h2>
         {/* Filter section */}
         <div className="flex flex-col items-center ">
            <div className="flex flex-col gap-2">
               <label className="font-bold" htmlFor="category">
                  Difficulty Level
               </label>
               <select
                  name="difficulty_level"
                  id="category"
                  className="border p-2 rounded-md"
                  onChange={(event) => getData(event.target.value)}
               >
                  <option value="All">All</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
               </select>
            </div>
         </div>

         <div className="grid grid-cols-1 my-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignments.map((assignment) => (
               <AssignmentCard assignment={assignment} key={assignment._id} onDelete={handleDelete} />
            ))}
         </div>
      </div>
   );
};

export default Assignments;








// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AssignmentCard from "../Components/AssignmentCard";
// import { useLoaderData } from "react-router-dom";

// const Assignments = () => {
//    const loadedAssignments = useLoaderData() || [];
//    const [assignments, setAssignments] = useState(loadedAssignments) || [];

//    useEffect(() => {
     
    
//    }, [assignments]);

//    const getData = async (event) => {
//       const level = event?.target?.value;

//       //  console.log(level);
//       try {
//          const { data } = await axios.get(
//             `${import.meta.env.VITE_API_URL}/assignments${
//                level ? `?sortBy=${level}` : ""
//             }`
//          );

//          setAssignments(data);
//       } catch (err) {
//          console.log(err.message);
//       }
//    };

   
//    return (
//       <div>
//          <h2 className="text-center text-3xl font-serif my-6 font-bold">
//             Choose Your Challenge
//          </h2>
//          {/* Filter section */}
//          <div className="flex flex-col items-center ">
//             <div className="flex flex-col gap-2">
//                <label className="font-bold" htmlFor="category">
//                   Difficulty Level
//                </label>
//                <select
//                   name="difficulty_level"
//                   id="category"
//                   className="border p-2 rounded-md"
//                   onChange={(event) => getData(event)} // Pass event to handleFilter
//                >
//                   <option value="All">All</option>
//                   <option value="Easy">Easy</option>
//                   <option value="Medium">Medium</option>
//                   <option value="Hard">Hard</option>
//                </select>
//             </div>
//          </div>

//          <div className="grid grid-cols-1 my-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {assignments.map((assignment) => (
//                <AssignmentCard setAssignments={setAssignments} assignment={assignment} key={assignment._id}>
//                   {" "}
//                </AssignmentCard>
//             ))}
//          </div>
//       </div>
//    );
// };

// export default Assignments;
