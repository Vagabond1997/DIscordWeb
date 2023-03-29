import express from "express";
import {defaultController,homeController} from "../controllers/controllers.js"
const router = express.Router();
router.get('/', defaultController);
// router.get('/sendemail', emailController);
router.post('/register',homeController);


export {router};