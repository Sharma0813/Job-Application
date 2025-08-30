import React, {useEffect, useState} from 'react'
import JobList from './components/JobList'
import ApplyForm from './components/ApplyForm'

export default function App(){
  const [jobs, setJobs] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)
  const [message, setMessage] = useState('')

  useEffect(()=>{
    fetch('/api/jobs').then(r=>r.json()).then(setJobs).catch(()=>setMessage('Could not fetch jobs. Make sure backend is running.'))
  },[])

  return (
    <div className="container">
      <header>
        <h1>Job Portal</h1>
        <p>A minimal job application platform (React + Node/Express)</p>
      </header>
      <main>
        <JobList jobs={jobs} onSelect={setSelectedJob} />
        <div className="panel">
          { message && <div className="error">{message}</div> }
          { selectedJob ? (
            <>
              <h2>Apply for: {selectedJob.title}</h2>
              <ApplyForm jobId={selectedJob.id} onSuccess={(m)=>setMessage(m)} />
            </>
          ) : (
            <p>Select a job to apply.</p>
          )}
        </div>
      </main>
      <footer>Job Application Project</footer>
    </div>
  )
}
