/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import AssignmentCard from "../Components/AssignmentCard";

const Assignments = () => {
   const [assignments, setAssignments] = useState([]) || [];

   useEffect(() => {
      if (assignments.length === 0) {
         getData();
      }
   }, [assignments]);
// getData()

   const getData = async (event) => {
    const level = event?.target?.value;
    console.log(level);
      try {
         const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/assignments${level ? `?sortBy=${level}` : ''}`
         );
         console.log(data);
         setAssignments(data);
      } catch (err) {
         console.log(err.message);
      }
      
      // try {
      //    const { data } = await axios.get(
      //       `${import.meta.env.VITE_API_URL}/assignments`
      //    );
      //   //  console.log(data);
      //    setAssignments(data);
      // } catch (err) {
      //    console.log(err.message);
      // }
   };

   // const handleFilter = async (event) => {
   //  const selectedDifficulty = event.target.value;
   //  try {
   //      const { data } = await axios.get(
   //         `${import.meta.env.VITE_API_URL}/assignments/filtered/${selectedDifficulty}`
   //      );
   //      console.log(data);
   //      setAssignments(data);
   //   } catch (err) {
   //      console.log(err.message);
   //   }
   //    console.log(selectedDifficulty);
   // };

   return (
      <div>
         <h2>See all the assignments</h2>
         {/* Filter section */}
         <div className="flex flex-col items-center my-6">
    <div className="flex flex-col gap-2">
        <label className="text-gray-700" htmlFor="category">
            Difficulty Level
        </label>
        <select
            name="difficulty_level"
            id="category"
            className="border p-2 rounded-md"
            onChange={(event) => getData(event)} // Pass event to handleFilter
        >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
        </select>
    </div>
</div>


         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignments.map((assignment) => (
               <AssignmentCard assignment={assignment} key={assignment._id}>
                  {" "}
               </AssignmentCard>
            ))}
         </div>
      </div>
   );
};

export default Assignments;
