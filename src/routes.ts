import {Router} from "express"
import { SendMailController } from "./controllers/SendMailController";
import { SurveysController } from "./controllers/SurveysController";
import { UserController } from "./controllers/UserController";

const router = Router();

const userControlleer = new UserController();
router.post("/users", userControlleer.create)

const surveysController = new SurveysController()
router.post("/surveys", surveysController.create)
router.get("/surveys", surveysController.show)

const sendEmail = new SendMailController()
router.post("/sendMail", sendEmail.execute)

export {router};