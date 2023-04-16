const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://medicheck:medicheck@cluster0.tfo2jps.mongodb.net/medicheck?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
const mongoDB = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true },async (err, result) => {
        if (err) {
            console.log('---', err);
        } else {
            console.log("connected");
            const fetched_data= await mongoose.connection.db.collection("doctors_list");
            fetched_data.find({}).toArray(async function(err, data){
                
                if(err){
                    console.log(err);
                }
                else{
                    global.doctors_list= data
                }
            })
        }
    });
}
module.exports = mongoDB;

