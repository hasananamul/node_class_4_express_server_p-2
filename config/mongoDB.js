const mongoose = require("mongoose");

const connectionDB = async () => {
      
      try{
            let = connect = await mongoose.connect("mongodb+srv://Hasan_anamul:Hasan_anamul@mongodbpractice.mvnqcze.mongodb.net/student_database?retryWrites=true&w=majority")
            console.log(` This serevr is connected to mongoDB database on url ${ connect.connection.host.blue }`);
      }
      catch(error){
            console.log(error);
      }
}
module.exports = connectionDB;