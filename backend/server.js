const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// In-memory sample data
let jobs = [
  { id: '1', title: 'Frontend Developer', company: 'Acme Inc', location: 'Remote', type: 'Full-time', remote: true },
  { id: '2', title: 'Backend Engineer', company: 'Beta Labs', location: 'Bengaluru', type: 'Full-time', remote: false },
  { id: '3', title: 'Product Designer', company: 'DesignCo', location: 'Hyderabad', type: 'Contract', remote: true }
];

let applications = [];

// Serve API for frontend (when using dev proxy in Vite, requests to /api will be forwarded)
app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.post('/api/apply', (req, res) => {
  const { jobId, name, email, resume } = req.body;
  if(!jobId || !name || !email || !resume) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const job = jobs.find(j=>j.id===jobId);
  if(!job) return res.status(404).json({ message: 'Job not found' });
  const appEntry = { id: String(applications.length+1), jobId, name, email, resume, appliedAt: new Date().toISOString() };
  applications.push(appEntry);
  console.log('New application:', appEntry);
  res.json({ message: 'Application received', application: appEntry });
});

// Simple route to view applications (for dev testing)
app.get('/api/applications', (req, res) => {
  res.json(applications);
});

app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`));
