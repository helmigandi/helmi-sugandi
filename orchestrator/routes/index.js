const { Router } = require("express");
const router = Router();
const userRoutes = require("./user");
const TokenController = require("../controllers/TokenController");

router.get("/", (req, res) => {
  return res.status(200).json({ message: "Home Orchestrator" });
});

router.get("/getToken", TokenController.generateToken);
router.use("/users", userRoutes);

module.exports = router;
