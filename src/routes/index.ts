import { Router } from "express";
import { authenticateRoutes } from "./authenticate.routes";
import { usersRouter } from "./users.routes";

const router = Router();

router.use("/sessions", authenticateRoutes);
router.use("/users", usersRouter);

export { router };