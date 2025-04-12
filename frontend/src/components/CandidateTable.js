import React from "react";
import "./CandidateTable.css";


const CandidateTable = ({ candidates, page, setPage }) => {
  return (
    <div className="candidate-table-container">
      <table className="candidate-table">
        <thead>
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Email</th>
            <th className="p-3">Gender</th>
            <th className="p-3">Experience</th>
            <th className="p-3">Skills</th>
          </tr>
        </thead>
        <tbody>
          {candidates.length > 0 ? (
            candidates.map((candidate, index) => (
              <tr key={index}>
                <td className="p-3" data-label="Name">{candidate.name}</td>
                <td className="p-3" data-label="Phone">{candidate.phone}</td>
                <td className="p-3" data-label="Email">{candidate.email}</td>
                <td className="p-3" data-label="Gender">{candidate.gender}</td>
                <td className="p-3" data-label="Experience">{candidate.experience}</td>
                <td className="p-3" data-label="Skills">{candidate.skills}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="no-data" colSpan="6">No candidates found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination-container">
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          className="px-4 py-1 text-sm"
        >
          Previous
        </button>
        <span className="text-sm">Page {page}</span>
        <button
          onClick={() => setPage(prev => prev + 1)}
          className="px-4 py-1 text-sm"
        >
          Next
        </button>
      </div>
    </div>

  );
};

export default CandidateTable;
