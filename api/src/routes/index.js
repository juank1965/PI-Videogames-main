import { Router } from "express";
import home from "../controllers/home.controller.js";
import platform from "../controllers/platform.controller.js";

const router = Router();

router.use("/", home);
router.use("/platform", platform);

export default router;
