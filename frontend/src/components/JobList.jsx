import React from 'react'

export default function JobList({jobs, onSelect}){
  if(!jobs || jobs.length===0) return <div className="panel"><p>No job listings available.</p></div>
  return (
    <div className="panel">
      <h2>Open Positions</h2>
      {jobs.map(job=>(
        <div key={job.id} className="job" onClick={()=>onSelect(job)}>
          <h3>{job.title}</h3>
          <div style={{fontSize:13,color:'#94a3b8'}}>{job.company} • {job.location}</div>
          <p style={{marginTop:6,fontSize:13,color:'#9fb3d1'}}>{job.remote ? 'Remote' : 'On-site'} • {job.type}</p>
        </div>
      ))}
    </div>
  )
}
