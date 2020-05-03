import React from 'react';



const JobBoardComponent = ({job}) => (
    <div className='flex bg-white shadow-md m-4 p-4'>
        <div>
            <img src={job.logo} alt={job.company} width={200} height={150}/>
        </div>
        <div className='ml-2'>
            <h3>{job.company}</h3>
            <h2>{job.position}</h2>
            <p>
                {job.postedAt} &#183; {job.contract} &#183; {job.location}
            </p>
        </div>
        <div></div>
    </div>
);

export default JobBoardComponent;