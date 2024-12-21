const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async() => {
    try{ await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to MongoDB ${mongoose.connection.host}`)
         }
         catch(error){
            console.log(`Mongodb Database Error ${error}`);

        }

    };
    module.exports = connectDB;
