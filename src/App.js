import React, { useState } from 'react';
import './App.css';

const dummyData = [
  { id: 1, agency: "CSIR-NCL", title: "Project Associate", eligibility: "M.Sc. Chemistry", status: "Ongoing" },
  { id: 2, agency: "UGC", title: "Research Fellowship", eligibility: "Post Graduate", status: "Archived" }
];

function App() {
  const [query, setQuery] = useState("");

  const filteredData = dummyData.filter(job =>
    job.agency.toLowerCase().includes(query.toLowerCase()) ||
    job.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Lookat – Job Updates</h1>
      <input
        type="text"
        placeholder="Search by agency or title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="job-list">
        {filteredData.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Agency:</strong> {job.agency}</p>
            <p><strong>Eligibility:</strong> {job.eligibility}</p>
            <p><strong>Status:</strong> {job.status}</p>
            <button>View/Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;