import express from "express";
import { handleBookingRequest } from "../controllers/bookingController";

const router = express.Router();

router.post("/book", handleBookingRequest);

export default router;
