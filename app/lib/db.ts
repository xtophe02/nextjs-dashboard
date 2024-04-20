const { Pool } = require('pg');

export const pool = new Pool({
  user: 'admin',
  host: 'db',
  database: 'nextjs_tutorial',
  password: 'admin',
  port: 5432,
});
