const { Router } = require("express");
const router = Router();
const userRoutes = require("./user");

router.get("/", (req, res) => {
  return res.status(200).json({ message: "Home User-Service API" });
});

router.use("/users", userRoutes);

module.exports = router;
