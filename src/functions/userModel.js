const mongoose = require("mongoose");

//Creating a user schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, min: 7, max: 120 },
});

const User = mongoose.model("User", userSchema);

//Controller function for user creation object
 const createUser = async (firstName, email, password, age) => {
  try {
    const user = new User({firstName, email, password, age });
    await user.save();
    return user;
  } catch (error) { 
    throw new Error('Something went wrong with creating a new user.');
  }
};

module.exports = { createUser, User };
