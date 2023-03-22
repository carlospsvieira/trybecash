const app = require('./app');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`API TrybeCash running on port ${PORT}`);
});

// IT TESTS MYSQL CONNECTION TO EXPRESS //
// const connection = require('./db/connection');
// app.listen(PORT, async () => {
//   const [result] = await connection.execute('SELECT 1');
//   if (result) {
//     console.log('MySQL connection OK');
//   }
// });