const { Router } = require("express");
const router = Router();
const UserController = require("../controllers/UserController");

router.get("/", UserController.getUsers);
router.get("/account/:accountNumber", UserController.getAccountNumber);
router.get("/identity/:identityNumber", UserController.getIdentityNumber);
router.post("/", UserController.createUser);
router.put("/:_id", UserController.updateUser);
router.delete("/:_id", UserController.removeUser);

module.exports = router;
