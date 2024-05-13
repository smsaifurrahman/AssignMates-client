/** @format */

import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import UseAuth from "../Hooks/UseAuth";



const ViewDetails = () => {
   const {user} = UseAuth() || {};
   const navigate = useNavigate()
   const assignment = useLoaderData() || {};
   const {
      assignment_title,
      marks,
      thumbnail_image,
      difficulty_level,
      _id,
      deadline,
      doc,
      description,
      user_email
   } = assignment;

   const handleSubmitAssignment = async (e) => {
      e.preventDefault();
      const form = e.target;
      const doc = form.doc.value;
      const note = form.note.value;
      const status= 'pending';
      const examineeMail = user?.email;
      const examineeName = user?.displayName;

      if(examineeMail === user_email) return Swal.fire({
         title: "Forbidden",
         text: "You can not take the test",
         icon: "error"
       });

      const submissionData ={
         assignment_title,marks,examineeName,examineeMail,
         doc,note,status
      }
      console.log(submissionData);
      // navigate('/view-details')
      try {
         const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/submit`,submissionData);
         Swal.fire({
            title: "Submitted",
            text: "Your assignment submitted",
            icon: "success"
          });
      } catch(err) {
         console.log(err.message);
      }


      
   };

   return (
      <div className=" card bg-base-100 shadow-xl flex ">
         <figure className="">
            <img className="h-[400px] w-full" src={thumbnail_image} alt="Movie" />
         </figure>
         <div className="card-body ">
            <h2 className="card-title text-3xl text-sky-500 font-serif">{assignment_title}</h2>
            <p className=" text-xl"> <span className="text-xl font-serif font-bold ">Description: <br /></span> {description} </p>
            <h2> <span className="text-xl font-bold font-serif " >Total Marks:</span> {marks} </h2>
            <h2> <span className="text-xl font-bold font-serif " >Difficulty Level:</span> {difficulty_level} </h2>
            <h2> <span className="text-xl font-bold font-serif " >Deadline</span> {deadline} </h2>
            <div className="card-actions justify-end">
               {/* <button  href="#my_modal_8" className="btn btn-primary">Take Task</button> */}
               <a href="#my_modal_8" className="btn btn-secondary">
                  Take Assignment
               </a>
            </div>
         </div>
         {/* Put this part before </body> tag */}
         <div className="modal" role="dialog" id="my_modal_8">
            <div className="modal-box">
               <h3 className="font-bold text-lg my-4 text-secondary text-center">Summit your assignment Here</h3>
               <form onSubmit={handleSubmitAssignment}>
                  <div>
                     <label className="text-gray-700 " htmlFor="min_price">
                        Submission doc
                     </label>
                     <input
                        required
                        // defaultValue={doc}
                        id="min_price"
                        name="doc"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                     />
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                     <label className="text-gray-700 " htmlFor="description">
                        Note
                     </label>
                     <textarea
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                        required
                        // defaultValue={description}
                        name="note"
                        id="description"
                     ></textarea>
                  </div>
                  <div className="modal-action">
                     <a href="#" type="sub" className="btn">
                     close
                     </a>
                <button className="btn btn-primary">Submit</button>
                  </div>
                  
               </form>
              
            </div>
         </div>
      </div>
   );
};

export default ViewDetails;
