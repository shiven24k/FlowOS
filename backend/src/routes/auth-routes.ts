import { Router } from "express";
import { validateSignup } from "../middlewares/authmiddleware";
import { handleSignup, handleLogin } from "../controllers/authController";

const router = Router();

router.post("/signup", validateSignup, handleSignup);
router.post("/login", handleLogin, handleLogin);
// router.post("/logout");

export default router;
