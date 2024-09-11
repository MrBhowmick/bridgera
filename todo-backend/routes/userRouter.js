const express = require("express");
const {
  getAllUser,
  createUser,
  deleteUser,
  updateUser,
  getUserByID
} = require("../controller/UserController");
const router = express.Router();

router.get("/", getAllUser);
router.post("/create", createUser);
router.post("/getByID", getUserByID);
router.delete("/delete", deleteUser);
router.put("/update", updateUser);

module.exports = router;
