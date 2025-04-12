const express = require("express");
const router = express.Router();
const db = require("../db");

// Get candidates with optional search/filter
router.get("/", (req, res) => {
  const { search = "", gender, experience, skills, page = 1, limit = 10 } = req.query;
  let filters = [];
  let params = [];

  if (search) {
    filters.push("(name LIKE ? OR phone LIKE ? OR email LIKE ?)");
    params.push(`%${search}%`, `%${search}%`, `%${search}%`);
  }

  if (gender) {
    filters.push("gender = ?");
    params.push(gender);
  }

  if (experience) {
    filters.push("experience = ?");
    params.push(experience);
  }

  if (skills) {
    const skillList = skills.split(",");
    filters.push(skillList.map(() => "skills LIKE ?").join(" OR "));
    skillList.forEach(skill => params.push(`%${skill}%`));
  }

  const offset = (page - 1) * limit;
  const whereClause = filters.length ? `WHERE ${filters.join(" AND ")}` : "";

  db.all(`SELECT * FROM candidates ${whereClause} LIMIT ? OFFSET ?`, [...params, limit, offset], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add candidate
router.post("/", (req, res) => {
  const { name, phone, email, gender, experience, skills } = req.body;
  db.run(
    `INSERT INTO candidates (name, phone, email, gender, experience, skills)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [name, phone, email, gender, experience, skills.join(",")],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

module.exports = router;
