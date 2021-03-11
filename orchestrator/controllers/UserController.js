const axios = require("axios");
const generateUrl = require("../helpers/api");
const redis = require("../helpers/redis");

class UserController {
  static async getUsers(req, res) {
    const options = {
      method: "GET",
      url: `${generateUrl()}/users`,
      headers: { access_token: req.headers.access_token },
    };
    try {
      const cachedUsersData = await redis.get("users:data");
      if (cachedUsersData) {
        res.status(200).json(JSON.parse(cachedUsersData));
      } else {
        const response = await axios(options);
        await redis.set("users:data", JSON.stringify(response.data));
        res.status(response.status).json(response.data);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async getAccountNumber(req, res) {
    const { accountNumber } = req.params;
    const options = {
      method: "GET",
      url: `${generateUrl()}/users/account/${accountNumber}`,
      headers: { access_token: req.headers.access_token },
    };
    try {
      const response = await axios(options);
      res.status(response.status).json(response.data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async getIdentityNumber(req, res) {
    const { identityNumber } = req.params;
    const options = {
      method: "GET",
      url: `${generateUrl()}/users/identity/${identityNumber}`,
      headers: { access_token: req.headers.access_token },
    };
    try {
      const response = await axios(options);
      res.status(response.status).json(response.data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async createUser(req, res) {
    const options = {
      method: "POST",
      url: `${generateUrl()}/users`,
      headers: { access_token: req.headers.access_token },
      data: req.body,
    };
    try {
      const response = await axios(options);
      await redis.del("users:data");
      res.status(response.status).json(response.data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async updateUser(req, res) {
    const { _id } = req.params;
    const options = {
      method: "PUT",
      url: `${generateUrl()}/users/${_id}`,
      headers: { access_token: req.headers.access_token },
      data: req.body,
    };
    try {
      const response = await axios(options);
      await redis.del("users:data");
      res.status(response.status).json(response.data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

  static async removeUser(req, res) {
    const { _id } = req.params;
    const options = {
      method: "DELETE",
      url: `${generateUrl()}/users/${_id}`,
      headers: { access_token: req.headers.access_token },
    };
    try {
      const response = await axios(options);
      await redis.del("users:data");
      res.status(response.status).json(response.data);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
