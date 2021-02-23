import {Router} from "express"
import { UserController } from "./controllers/UserController";

const router = Router();

const userControlleer = new UserController();
router.post("/users", userControlleer.create)

export {router};