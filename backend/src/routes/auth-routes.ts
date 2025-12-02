import { Router } from "express";
import { validateSignup } from "../middlewares/authmiddleware";
import { handleSignup, handleLogin } from "../controllers/auth-controller";

const router = Router();

router.post("/signup", handleSignup);
router.post("/login", handleLogin);
// router.post("/logout");

export default router;
