import React, { useEffect, useState } from "react";
import axios from "axios";
import CandidateTable from "./components/CandidateTable";
import CandidateForm from "./components/CandidateForm";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import "./App.css"

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [filters, setFilters] = useState({});
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(false);

  const fetchCandidates = async () => {
    const res = await axios.get("https://candidate-management-app.onrender.com/api/candidates", {
      params: { ...filters, search, page },
    });
    setCandidates(res.data);
  };

  useEffect(() => {
    fetchCandidates();
  }, [filters, search, page]);

  const handleAddCandidate = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <div className="container">
      <h1>Candidate Management</h1>

      <div className="top-controls">
        <SearchBar onSearch={setSearch} />
        <button onClick={handleAddCandidate} className="primary-btn">Add Candidate</button>
      </div>

      <div className="filter-bar">
        <FilterBar setFilters={setFilters} />
      </div>

      <div className="table-wrapper">
        <CandidateTable candidates={candidates} page={page} setPage={setPage} />
      </div>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <CandidateForm onClose={handleCloseForm} onSubmit={fetchCandidates} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
