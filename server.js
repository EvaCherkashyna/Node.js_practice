const app = require('./app')
const mongoose = require("mongoose");
const {DB_HOST} = require('./config')

mongoose.set('strictQuery', true)

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3001, () => {
      console.log("Server running. Use our API on port: 3001")
    })
  })
  .catch(function (error) {
    console.log(error.message);
  });




