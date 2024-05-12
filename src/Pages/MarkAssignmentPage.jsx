/** @format */

import axios from "axios";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";

const MarkAssignmentPage = () => {
   const {user} = UseAuth()
   const assignment = useLoaderData() || {};
   const navigate = useNavigate()

   const handleMarkingForm = async (e) => {
      e.preventDefault();
      const form = e.target;
      const obtained_mark = form.obtained_mark.value;
      const examiner_feedback = form.examiner_feedback.value;
      const status = "Completed";
      const examiner_email = user?.email;
      // alert( assignment.marks)

      if(obtained_mark > assignment?.marks) return Swal.fire({
         title: "Wrong Input",
         text: `Maximum mark is ${assignment.marks}`,
         icon: "error"
       });

      if(assignment.examineeMail === examiner_email) return Swal.fire({
         title: "Not Allowed",
         text: "You submitted the assignment, You can not mark yourself",
         icon: "error"
       });

      const MarkingData = {
         obtained_mark,
         examiner_feedback,
         status,
      };
     
      try {
         const { data } = await axios.put(
            `${import.meta.env.VITE_API_URL}/pending/${assignment._id}`,
            MarkingData
         );
         Swal.fire({
            title: "Successful",
            text: "Marking is Successful",
            icon: "success",
         });
         navigate('/pending-assignment')
      } catch (err) {
         console.log(err.message);
      }
   };

   return (
      <div>
         
         <div className="w-full md:w-1/2 mx-auto my-5 border-2 px-8 bg-base-200 py-5 rounded-xl">
         <h2 className="text-center text-2xl my-6 font-bold">
            {" "}
            Make this Assignment{" "} 
            {assignment.marks}
         </h2>
            <form onSubmit={handleMarkingForm}>
               <div>
                  <label className=" font-bold " htmlFor="min_price">
                     Submitted doc link
                  </label>
                  <input
                     required
                     defaultValue={assignment.doc}
                     disabled
                     id="min_price"
                     name="doc"
                     type="text"
                     className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
               </div>
               <div className="flex flex-col gap-2 mt-4">
                  <label className="font-bold " htmlFor="description">
                    Examinee Note
                  </label>
                  <textarea
                     className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                     required
                     disabled
                     defaultValue={assignment.note}
                     name="note"
                     id="description"
                  ></textarea>
               </div>
               <div>
                  <label className=" font-bold " htmlFor="min_price">
                   Add  Mark : Maximum Mark Ceiling: {assignment.marks}
                  </label>
                  <input
                     required
                 
                
                     name="obtained_mark"
                     type="number"
                     placeholder="provide mark here"
                     className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
               </div>
               <div className="flex flex-col gap-2 mt-4">
                  <label className="font-bold " htmlFor="description">
                    Examiner Feedback
                  </label>
                  <textarea
                     className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                     required
                     // defaultValue={description}
                     name="examiner_feedback"
                     id="description"
                  ></textarea>
               </div>
               <div className="">
                  
                  <button className="btn w-full btn-primary">Add Mark</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default MarkAssignmentPage;
