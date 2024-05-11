
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const assignment = useLoaderData() || {};
    const {
        assignment_title,
        marks,
        thumbnail_image,
        difficulty_level,
        _id,
        deadline,
     } = assignment;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img className='h-96 w-full' src={thumbnail_image} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{assignment_title}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Take Task</button>
          </div>
        </div>
      </div>
    );
};

export default ViewDetails;