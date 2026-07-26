const Database = require('better-sqlite3');
const db = new Database('C:/Users/LENOVO/.local/share/mimocode/mimocode.db', {readonly: true});

const args = process.argv.slice(2);
const query = args[0] || 'SELECT name FROM sqlite_master WHERE type=\'table\' ORDER BY name';

try {
  const rows = db.prepare(query).all();
  console.log(JSON.stringify(rows, null, 2));
} catch (e) {
  console.error('Query error:', e.message);
}

db.close();
