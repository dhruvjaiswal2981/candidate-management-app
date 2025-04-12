import React, { useState } from "react";
import "./FilterBar.css";


const skillsOptions = ["JavaScript", "Python", "React", "Node.js", "SQL", "CSS", "MongoDB", "Java", "Vue.js"];

const FilterBar = ({ setFilters }) => {
  const [gender, setGender] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState([]);

  const handleSkillToggle = skill => {
    setSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const applyFilters = () => {
    setFilters({
      gender: gender || undefined,
      experience: experience || undefined,
      skills: skills.length > 0 ? skills.join(",") : undefined
    });
  };

  return (
    <div>
      <div className="filter-grid">
        <select
          value={gender}
          onChange={e => setGender(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Filter by Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <select
          value={experience}
          onChange={e => setExperience(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">Filter by Experience</option>
          <option>1 Year</option>
          <option>2 Years</option>
          <option>3 Years</option>
        </select>

        <div className="filter-skills">
          <label className="block text-sm mb-1">Filter by Skills:</label>
          <div className="flex flex-wrap gap-2">
            {skillsOptions.map(skill => (
              <label key={skill} className="text-sm">
                <input
                  type="checkbox"
                  checked={skills.includes(skill)}
                  onChange={() => handleSkillToggle(skill)}
                  className="mr-1"
                />
                {skill}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-2">
        <button
          onClick={applyFilters}
          className="filter-bar-button"
        >
          Apply Filters
        </button>
      </div>
    </div>

  );
};

export default FilterBar;
