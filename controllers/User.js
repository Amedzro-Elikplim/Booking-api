const User = require("../models/User");
const Booking = require("../models/Book");
// const isEmpty = require("lodash/isEmpty");
const _ = require("lodash");
const { validateRegistrationInputs } = require("../validators/validators");
const Book = require("../models/Book");
const Register = async (req, res) => {
  try {
    console.log("runing");
        // const result = await validateRegistrationInputs.validateAsync(req.body);
        const { first_name, last_name, email, password } = req.body;
        
        const isUserAvailable = await User.findOne({ email });
        if (isUserAvailable) return res.status(405)
            .send({ errored: "error", message: "user with email already exist" });
        
        const user = await User.create({
          first_name,
          last_name,
          email,
          password,
        });

         return res
           .status(201)
           .send(user)
    } catch (error) {
    res.status(404).send(error);
    }
};

const Login = async (req, res) => {
  try {
    const { email } = req.body;

    const isUserAvailable = await User.findOne({ email });
    if (isUserAvailable) {
      res.status(201).send("Login successful");
      
    } else {
      res.status(404).send({ errored: "error" , message: "User not found" });
    }

  } catch (error) {
    return res.status(404).send(error);
  }
};


const saveBooking = async (req, res) => {
  try {
    const { firstname, lastname, email, time, date, restaurant, table, phone } = req.body;
     
    const booking = await Book.create({
      firstname,
      lastname,
      email,
      time,
      date,
      restaurant,
      table, 
      phone
    });

    if (booking) {
      return res.status(201).send(booking);
    }

    return res.status(401).send({message: "Not created"})
  } catch (error) {
    return res.status(404).send(error)
  }
}





module.exports= {
  Register,
  Login,
  saveBooking
}