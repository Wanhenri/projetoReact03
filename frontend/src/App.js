import React, { useState, useEffect } from 'react';
import data from './assents/data.json'
import JobBoardComponent from './components/JobBoardComponent';


function App() {
  const [ jobs, setJobs] = useState([]);

  useEffect(() => setJobs(data), [] );

  return (
    <div>
      <header className='bg-teal-500 mb-12'>
        <img src='/images/header-background.png' alt="bg-image" width={2600} />
      </header>
      {jobs.length === 0 ? (
        <p>Jobs are fetching...</p>
      ) : (
        jobs.map((job) => <JobBoardComponent  job={job} key={job.id}/>)
      )}      
    </div>
  );
}

export default App;
