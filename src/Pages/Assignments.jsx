import React, { useEffect, useState } from 'react';
import axios from "axios";
import AssignmentCard from '../Components/AssignmentCard';

const Assignments = () => {
const [assignments, setAssignments] = useState([]) || [];

useEffect(()=>{
    getData();
},[assignments])

const getData = async () => {
    try{
       const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/assignments`);
       setAssignments(data);
   
    } catch(err) {
        console.log(err.message);
    }
    
}




    return (
        <div>
            <h2>See all the assignments</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    assignments.map(assignment => <AssignmentCard assignment={assignment} key={assignment._id}> </AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;