import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import UseAxiosSecure from "../Hooks/UseAxiosSecure";

const UpdateAssignment = () => {
    const assignment = useLoaderData() || {};
    const axiosSecure = UseAxiosSecure();
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const {
      
        assignment_title,
        marks,
        thumbnail_image,
        difficulty_level,
        _id,
        deadline,
        user_email,
        description
     } = assignment;
     const handleUpdateForm = async (e) => {
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
         
        };
        console.log(assignmentData);
        try {
           const {data} = await axiosSecure.patch(`/update/${_id}`,assignmentData);
              toast.success("updated successfully");
              navigate('/assignments')
          
        } catch (err) {
           console.log(err.message);
        }
     };



     useEffect(() => {
        if (deadline) {
            setStartDate(new Date(deadline));
        }
    }, [deadline]);

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-6">
        <section className=" mx-auto w-full md:w-2/3 p-2 md:p-6 bg-white rounded-md shadow-md ">
           <h2 className="text-2xl mb-8 text-center   font-semibold text-blue-700 capitalize ">
              Update this assignment
           </h2>

           <form onSubmit={handleUpdateForm} >
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                 <div>
                    <label className="text-gray-700 " htmlFor="job_title">
                       Assignment Title
                    </label>
                    <input
                       required
                       defaultValue={assignment_title}
                       name="assignment_title"
                       type="text"
                       className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                 </div>

                 <div>
                    <label className="text-gray-700 " htmlFor="emailAddress">
                       Marks
                    </label>
                    <input
                      defaultValue={marks}
                       required
                       type="number"
                       name="marks"
                       className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                 </div>

                 <div className="flex flex-col gap-2 ">
                    <label className="text-gray-700 " htmlFor="category">
                       Difficulty Level
                    </label>
                    <select
                       required
                       defaultValue={difficulty_level}
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
                    <label className="text-gray-700 " htmlFor="min_price">
                       Thumbnail Image URL
                    </label>
                    <input
                       required
                       defaultValue={thumbnail_image}
                       id="min_price"
                       name="image"
                       type="text"
                       className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                 </div>

                 <div>
                    <label className="text-gray-700 " htmlFor="max_price">
                       Email
                    </label>
                    <input
                      defaultValue={user_email}
                       disabled
                       required
                       id="max_price"
                       name="email"
                       type="email"
                       className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                 </div>
                 <div className="flex flex-col gap-2 ">
                    <label className="text-gray-700">Deadline</label>

                    {/* Date Picker Input Field */}
                    <DatePicker
                      defaultValue={new Date(deadline)}
                       className="border p-2 rounded-md"
                       selected={startDate}
                       onChange={(date) => setStartDate(date)}
                    />
                 </div>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                 <label className="text-gray-700 " htmlFor="description">
                    Description
                 </label>
                 <textarea
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    required
                    defaultValue={description}
                    name="description"
                    id="description"
                 ></textarea>
              </div>
              <div className="flex justify-center mt-6">
                 <button className="px-8 py-2.5 btn bg-green-400 ">
                    Update Assignment
                 </button>
              </div>
           </form>
        </section>
     </div>
    );
};

export default UpdateAssignment;