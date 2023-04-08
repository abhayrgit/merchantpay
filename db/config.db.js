const mongoose = require('mongoose')



//Database Connection
const dbConnect = async(DATABASE_URL)=>{
    try {
        const dboptions = {
            dbName: 'merchantpay'
        }
        await mongoose.connect(DATABASE_URL,dboptions)
        console.log('Database Connected Succesfully')
    } catch (error) {
        console.log("Database not connected");
    }
}

module.exports = dbConnect