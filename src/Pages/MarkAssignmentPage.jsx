import axios from "axios";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const MarkAssignmentPage = () => {
    const location = useLocation();
   console.log(location.state.assignment);
    // const {
    //     assignment_title,
    //     marks,
    //     thumbnail_image,
    //     difficulty_level,
    //     _id,
    //     deadline,
    //     user_email
    //  } = assignment;
  


    const handleMarkingForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const doc = form.doc.value;
        const note = form.note.value;
        const status= 'pending';
       
        // if(examineeMail === user_email) return Swal.fire({
        //    title: "Forbidden",
        //    text: "You can not take the text",
        //    icon: "error"
        //  });
    
        const submissionData ={
          
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
        <div>
            <form onSubmit={handleMarkingForm}>
                  <div>
                     <label className="text-gray-700 " htmlFor="min_price">
                        Submission doc
                     </label>
                     <input
                        required
                        // defaultValue={thumbnail_image}
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
    );
};

export default MarkAssignmentPage;