// const { app, db, PORT } = require('./config/config');
// const { SERVER_DB_URI } = require('./constants/constants');
// const bootstrap = async () => {
//   try {
//     await db.connect(SERVER_DB_URI);
//     app.listen(PORT, async () => {});
//   } catch (error) {
//     console.log(error);
//   }
// };

// bootstrap();

require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
const app = express();

mongoose.connect(process.env.MONGODB_URL_LOCAL, {
  useNewUrlParser:  true
})
.then(() => console.log("MongoDB connected!"))
.catch((err) => console.log("Connection Failed"))

app.use(express.json())
app.use('/', require('./routes/router'))

app.listen(3000, () => {
  console.log('server runnning on port 3000')
})