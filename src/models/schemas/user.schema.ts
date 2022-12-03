import mongoose from "mongoose";

const userSchemas = new mongoose.Schema({
  name: String,
  age: String,
  address: String,
  email: String,
  password : String
});

const Users = mongoose.model("Users", userSchemas);

export default Users;
