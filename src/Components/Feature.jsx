import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";


const Feature = ({assignments}) => {
   const [loadedAssignments, setLoadedAssignments] = useState(assignments);

   useEffect(()=>{

   },[loadedAssignments])

   const handleDelete = async (id) => {
    console.log( 'from feature',id);
    try {
        setLoadedAssignments(loadedAssignments.filter(assignment => assignment._id !== id));
    } catch (err) {
       console.log(err.message);
    }
 };
  
    return (
        <div className=" my-6 rounded-xl ">
            <h1 className="text-center  text-4xl my-10 font-bold"> Want to take challenge: Dive In </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    loadedAssignments?.slice(0,6).map(assignment => <AssignmentCard 
                        key={assignment._id}
                        onDelete={handleDelete} 
                        assignment={assignment}></AssignmentCard> )
                }
            </div>
        </div>
    );
};

export default Feature;