const { Router } = require("express");
const router = Router();
const userRoutes = require("./user");
const { authorization } = require("../middlewares/auth");

router.get("/", (req, res) => {
  return res.status(200).json({ message: "Home User-Service API" });
});

router.use(authorization);
router.use("/users", userRoutes);

module.exports = router;
