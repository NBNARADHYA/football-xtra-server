const { Pool } = require('pg');

module.exports = new Pool({
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: 5432,
});
