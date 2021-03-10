const User = require("../models/User");

class UserController {
  static async getUsers(req, res) {
    try {
      const dataUsers = await User.find();
      res.status(200).json(dataUsers);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async getAccountNumber(req, res) {
    const { accountNumber } = req.params;
    try {
      const dataUsers = await User.findOne({ accountNumber });
      res.status(200).json(dataUsers);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async getIdentityNumber(req, res) {
    const { identityNumber } = req.params;
    console.log(req.params);
    try {
      const dataUsers = await User.findOne({ identityNumber });
      res.status(200).json(dataUsers);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async createUser(req, res) {
    const newDataUser = new User({
      userName: req.body.userName,
      accountNumber: req.body.accountNumber,
      emailAddress: req.body.emailAddress,
      identityNumber: req.body.identityNumber,
    });
    try {
      const dataUsers = await newDataUser.save();
      res.status(201).json(dataUsers);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async updateUser(req, res) {
    const { _id } = req.params;
    const updatedDataUser = {
      userName: req.body.userName,
      accountNumber: req.body.accountNumber,
      emailAddress: req.body.emailAddress,
      identityNumber: req.body.identityNumber,
    };
    try {
      const dataUsers = await User.findByIdAndUpdate(_id, updatedDataUser, {
        new: true,
        runValidators: true,
      });
      res.status(200).json(dataUsers);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async removeUser(req, res) {
    const { _id } = req.params;
    try {
      const dataUsers = await User.findByIdAndRemove(_id);
      res.status(200).json(dataUsers);
      console.log(dataUsers);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
