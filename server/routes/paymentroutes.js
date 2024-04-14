import express from 'express'
import { checkout , paymentverified } from '../controllers/paymentcontroller.js';


const router = express.Router();

router.route("/checkout").post(checkout);
router.route('/paymentverified').post(paymentverified);

export default router;