/** @format */

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UseAuth from "../Hooks/UseAuth";
import axios from "axios";
import toast from "react-hot-toast";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";
const CreateAssignment = () => {
   const axiosSecure = UseAxiosSecure();
   const [startDate, setStartDate] = useState(new Date());

   const { user } = UseAuth() || {};

   const handleAssignmentForm = async (e) => {
      e.preventDefault();
      const form = e.target;
      const assignment_title = form.assignment_title.value;
      const deadline = startDate;
      const user_email = form.email.value;
      const thumbnail_image = form.image.value;
      const marks = form.marks.value;
      const description = form.description.value;
      const difficulty_level = form.difficulty_level.value;

      const assignmentData = {
         assignment_title,
         description,
         deadline,
         thumbnail_image,
         difficulty_level,
         marks,
         user_email,
      };
      console.log(assignmentData);
      try {
         const { data } = await axiosSecure.post(
            `/add-assignment`,
            assignmentData,
            { withCredentials: true }
         );
         toast.success("Assignment created successfully");
         form.reset();
      } catch (err) {
         // console.log(err.message);
      }
   };
   return (
      <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-6">
         <section className=" mx-auto w-full md:w-2/3 p-2 md:p-6 rounded-md shadow-md ">
            <h2 className="text-2xl mb-8 text-center   font-semibold text-blue-700 capitalize ">
               Create a Assignment
            </h2>

            <form 
            className="border-2 p-6 rounded-xl bg-base-200"
            onSubmit={handleAssignmentForm}>
               <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                     <label className="'' " htmlFor="job_title">
                        Assignment Title
                     </label>
                     <input
                        required
                        name="assignment_title"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 ''  border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                     />
                  </div>

                  <div>
                     <label className="'' " htmlFor="emailAddress">
                        Marks
                     </label>
                     <input
                        required
                        type="number"
                        name="marks"
                        className="w-full  px-4 py-2 mt-2 ''  border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                     />
                  </div>

                  <div className="flex flex-col gap-2 ">
                     <label className="'' " htmlFor="category">
                        Difficulty Level
                     </label>
                     <select
                        required
                        name="difficulty_level"
                        id="category"
                        className="border p-2 rounded-md"
                     >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                     </select>
                  </div>
                  <div>
                     <label className="'' " htmlFor="min_price">
                        Thumbnail Image URL
                     </label>
                     <input
                        required
                        id="min_price"
                        name="image"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 ''  border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                     />
                  </div>

                  <div>
                     <label className="'' " htmlFor="max_price">
                        Email
                     </label>
                     <input
                        defaultValue={user?.email}
                        disabled
                        required
                        id="max_price"
                        name="email"
                        type="email"
                        className="block w-full px-4 py-2 mt-2 ''  border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                     />
                  </div>
                  <div className="flex flex-col gap-2 ">
                     <label className="''">Deadline</label>

                     {/* Date Picker Input Field */}
                     <DatePicker
                        className="border p-2 rounded-md"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                     />
                  </div>
               </div>
               <div className="flex flex-col gap-2 mt-4">
                  <label className="'' " htmlFor="description">
                     Description
                  </label>
                  <textarea
                     className="block w-full px-4 py-2 mt-2 ''  border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                     required
                     name="description"
                     id="description"
                  ></textarea>
               </div>
               <div className="flex justify-center mt-6">
                  <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                     Create Assignment
                  </button>
               </div>
            </form>
         </section>
      </div>
   );
};

export default CreateAssignment;
