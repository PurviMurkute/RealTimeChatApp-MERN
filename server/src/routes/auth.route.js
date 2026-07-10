import express from 'express';
import protectedRoute from '../middlewares/auth.middleware';
import { checkAuth } from '../controllers/auth.controller';

const authRouter = express.Router();

authRouter.get("/check", protectedRoute, checkAuth);

export default authRouter;