const { Pool } = require('pg');
const PG_URI =
  'postgres://arlsbfah:IbCjDRVwXzmgbLMkicKSVqNTUxzLWVk_@peanut.db.elephantsql.com/arlsbfah';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text: string, params: string) => {
    return pool.query(text, params);
  },
};
