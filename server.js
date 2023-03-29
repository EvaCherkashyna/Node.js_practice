const app = require('./app')
const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://Yeva:B8meSk1qdCkXnrJO@cluster0.6s7uqrd.mongodb.net/contacts_base?retryWrites=true&w=majority"

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




