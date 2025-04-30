import express from "express";
import { TokenController } from "../controllers/tokenController";
import { auth } from "../middleware/auth";
import { upload } from "../middleware/upload";

const router = express.Router();
const tokenController = new TokenController();

// All token routes require authentication
router.use(auth);

// Token routes
router.post("/", upload.single("image"), tokenController.createToken);
router.get("/", tokenController.getTokens);
router.get("/my", tokenController.getMyTokens);
router.get("/:id", tokenController.getToken);
router.put("/:id", upload.single("image"), tokenController.updateToken);
router.delete("/:id", tokenController.deleteToken);

export default router;
