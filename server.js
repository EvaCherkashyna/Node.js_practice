const app = require('./app')
const {DB_HOST, PORT = 3000} = process.env;

const mongoose = require("mongoose");

mongoose.set('strictQuery', true)

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running in port ${PORT}`)
    })
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });




