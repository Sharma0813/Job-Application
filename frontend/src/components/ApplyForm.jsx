import React, {useState} from 'react'

export default function ApplyForm({jobId, onSuccess}){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [resume,setResume]=useState('')
  const [status,setStatus]=useState('')

  const submit = async (e)=>{
    e.preventDefault()
    setStatus('Sending...')
    try{
      const res = await fetch('/api/apply', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({jobId,name,email,resume})
      })
      const data = await res.json()
      if(res.ok){
        onSuccess && onSuccess('Application submitted successfully!')
        setName(''); setEmail(''); setResume('')
      } else {
        onSuccess && onSuccess(data.message || 'Failed to submit.')
      }
    }catch(err){
      onSuccess && onSuccess('Could not reach server.')
    }finally{setStatus('')}
  }

  return (
    <form onSubmit={submit}>
      <label>Name<input value={name} onChange={e=>setName(e.target.value)} required /></label>
      <label>Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required /></label>
      <label>Resume (paste text)<textarea value={resume} onChange={e=>setResume(e.target.value)} rows="6" required /></label>
      <button type="submit">{status || 'Apply'}</button>
    </form>
  )
}
