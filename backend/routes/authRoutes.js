const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
  updateUserProfile,
} = require("../controllers/authController");
const {protect} = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.route("/me").get(protect,getMe).put(protect,updateUserProfile);
//router.route("/me")
// Creates a route handler for the endpoint /me.
// Instead of writing router.get("/me", ...) and router.put("/me", ...) separately, route() allows you to chain multiple HTTP methods for the same path.

module.exports=router;