const User = require("../model/User");

exports.getAllUser = async (req, res, next) => {
  try {
    console.log("started...!!");
    let users = await User.find();
    console.log("get all user", users);
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

exports.createUser = async (req, res) => {
  try {
    console.log("================ =");
    console.log(req.body);
    await User.create(req.body)
    // let { heading, body } = req.body;
    // let user = new User({ heading, body });
    // user = user.save();
    res.status(200).send({ status: true, message: "User saved successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.deleteOne(req.body)
    res.status(200).send({ status: true, message: "User Deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

exports.updateUser = async (req, res) => {
  try {
    console.log('=================',req.body)
    await User.findOneAndUpdate({_id: req.body._id},req.body)
    res.status(200).send({ status: true, message: "User Updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
exports.getUserByID = async (req, res) => {
  try {
    let user = await User.findById(req.body._id)
    if(!user) res.status(400).send({ status: false, message: "User not found!" });
    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
