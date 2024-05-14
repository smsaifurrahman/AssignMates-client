import AssignmentCard from "./AssignmentCard";


const Feature = ({assignments}) => {
    return (
        <div className=" my-6 rounded-xl ">
            <h1 className="text-center text-4xl my-10 text-sky-500 font-bold"> Want to take challenge: Dive In </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    assignments?.map(assignment => <AssignmentCard 
                        key={assignment._id}
                        assignment={assignment}></AssignmentCard> )
                }
            </div>
        </div>
    );
};

export default Feature;