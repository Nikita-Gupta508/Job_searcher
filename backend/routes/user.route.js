import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/mutler.js";
 
const router = express.Router();

router.route("/register").post(singleUpload,register); // singleUpload-middleware
router.route("/login").post(login);
router.route("/logout").get(logout);
//middleware -'authentication' done karega tab hi update hoga
//singleUpload - ye nahi hoga to backend console me profile update undefined show karega
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);

export default router;

