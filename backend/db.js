const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./sample.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS candidates (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    phone TEXT,
    email TEXT,
    gender TEXT,
    experience TEXT,
    skills TEXT
  )`);
});

module.exports = db;
