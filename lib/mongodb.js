/* This is a database connection function*/
import mongoose from "mongoose";

const connection = {};
async function dbConnect() {
  /* check if we have connection to our databse*/
  if (connection.isConnected) {
    console.log("db connected")
    return
  }
  /* connecting to our database */
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log({dbCondition:db.connections[0].readyState})
  connection.isConnected = db.connections[0].readyState
  console.log({connection})
}

export default dbConnect