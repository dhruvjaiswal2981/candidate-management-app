import React, { useState } from "react";
import axios from "axios";
import "./CandidateForm.css";


const skillsOptions = ["JavaScript", "Python", "React", "Node.js", "SQL", "CSS", "MongoDB", "Java", "Vue.js"];

const CandidateForm = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", gender: "", experience: "", skills: []
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillToggle = skill => {
    setForm(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/candidates", form);
    onSubmit();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <form onSubmit={handleSubmit} className="candidate-form">
        <h2>Add New Candidate</h2>

        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" type="tel" onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required />

        <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <select name="experience" onChange={handleChange} required>
          <option value="">Select Experience</option>
          <option>1 Year</option>
          <option>2 Years</option>
          <option>3 Years</option>
        </select>

        <div className="skills-group">
          <label>Skills:</label>
          <div className="skills-options">
            {skillsOptions.map(skill => (
              <label key={skill}>
                <input
                  type="checkbox"
                  checked={form.skills.includes(skill)}
                  onChange={() => handleSkillToggle(skill)}
                />
                {skill}
              </label>
            ))}
          </div>
        </div>

        <div className="button-group">
          <button type="button" onClick={onClose} className="button-cancel">Cancel</button>
          <button type="submit" className="button-save">Save</button>
        </div>
      </form>
    </div>

  );
};

export default CandidateForm;
