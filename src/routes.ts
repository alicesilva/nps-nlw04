import {Router} from "express"
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userControlleer = new UserController();
router.post("/users", userControlleer.create)

const surveysController = new SurveysController()
router.post("/surveys", surveysController.create)
router.get("/surveys", surveysController.show)


export {router};