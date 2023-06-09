const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgres://postgres:reitmanz@localhost:5432/products",
});
// mysql://user:password@hostname:port/database

const fetchOne = async (SQL, ...values) => {
  const client = await pool.connect();

  try {
    const {
      rows: [row],
    } = await client.query(SQL, values.length ? values : null);

    return row;
  } catch (error) {
    console.log(error.message);
  } finally {
    client.release();
  }
};

const fetch = async (Sql, ...values) => {
  const client = await pool.connect();

  try {
    const { rows } = await client.query(Sql, values.length ? values : null);
    return rows;
  } catch (error) {
    console.log(error.message);
  } finally {
    client.release();
  }
};

module.exports = {
  fetchOne,
  fetch,
};
