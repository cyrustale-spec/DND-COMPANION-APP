const path = require('path');
const { app } = require('electron');
const Database = require('better-sqlite3');

// Get the user data path and create a database file there.
// This ensures the data is stored in the correct location for the user's OS.
const dbPath = path.join(app.getPath('userData'), 'dnd-companion.db');
const db = new Database(dbPath);

// Create the initial schema if it doesn't exist.
const createSchema = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS tabs (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      type TEXT NOT NULL,
      content TEXT
    );
  `);
};

// Initialize the database
createSchema();

console.log('Database initialized at:', dbPath);

// --- Database API ---

function getTabs() {
  const stmt = db.prepare('SELECT * FROM tabs');
  return stmt.all();
}

function saveTab(tab) {
  const stmt = db.prepare(`
    INSERT INTO tabs (id, title, type, content)
    VALUES (@id, @title, @type, @content)
    ON CONFLICT(id) DO UPDATE SET
      title = excluded.title,
      type = excluded.type,
      content = excluded.content;
  `);
  stmt.run(tab);
}

function deleteTab(id) {
  const stmt = db.prepare('DELETE FROM tabs WHERE id = ?');
  stmt.run(id);
}

module.exports = {
  db,
  getTabs,
  saveTab,
  deleteTab,
};
