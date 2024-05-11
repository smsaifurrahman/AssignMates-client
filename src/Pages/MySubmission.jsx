import React, { useEffect, useState } from 'react';
import axios from "axios";
import UseAuth from '../Hooks/UseAuth';

const MySubmission = () => {
    const {user} = UseAuth() || {};
    const [assignments, setAssignments] = useState([]) || [];


    useEffect(()=>{
        getData();
    },[])
   const getData = async () =>{
    try {
        const { data } = await axios.get(
           `${import.meta.env.VITE_API_URL}/pending/${user?.email}` );
           setAssignments(data);
           
     } catch (err) {
        console.log(err.message);
     }

   }


    return (
        <div>
            my submission {assignments.length}
        </div>
    );
};

export default MySubmission;