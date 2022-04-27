import express from "express";

import  BookingController  from "../controllers/booking.js";

const Router=express.Router();

Router.route("/")
      .post(BookingController.prototype.createBooking)
      .get(BookingController.prototype.getAllBookings)

Router.route("/:booking_id")
      .get(BookingController.prototype.getOneBooking)
      .put(BookingController.prototype.updateOneBooking)
      .delete(BookingController.prototype.deleteOneBooking)
     // "main": "src/bin/server.js",

      
export default Router;
