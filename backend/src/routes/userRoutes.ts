import express from "express";
import { UserController } from "../controllers/userController";
import { auth } from "../middleware/auth";
import { upload } from "../middleware/upload";

const router = express.Router();
const userController = new UserController();

// Auth routes
router.post("/register", userController.register);
router.post("/login", userController.login);

// Protected routes
router.use(auth);
router.get("/me", userController.getProfile);
router.put("/me", userController.updateProfile);
router.put("/me/avatar", upload.single("avatar"), userController.updateAvatar);
router.get("/:username", userController.getUserProfile);
router.post("/:id/follow", userController.followUser);
router.post("/:id/unfollow", userController.unfollowUser);

export default router;
