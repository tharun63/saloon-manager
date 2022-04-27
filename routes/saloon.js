import express from "express";

import SaloonController from "../controllers/saloon.js";
import ServiceController  from "../controllers/service.js";
import SlotController from "../controllers/slot.js";
const Router = express.Router();

Router
  .route("/")
  .post(SaloonController.prototype.createSaloon)
  .get(SaloonController.prototype.getAllSaloons)

Router
  .route("/:saloon_id")  
  .get(SaloonController.prototype.getSaloon)
  .put(SaloonController.prototype.updateSaloon)
  .delete(SaloonController.prototype.deleteSaloon)

Router
  .route("/:saloon_id/slots")  
  .post(SlotController.prototype.addSlot)
  .get(SlotController.prototype.getAllSlots)
  
Router
  .route("/:saloon_id/slots/:slot_id")  
  .get(SlotController.prototype.getOneSlot)
  .put(SlotController.prototype.updateSlot)
  .delete(SlotController.prototype.deleteSlot)

Router
  .route("/:saloon_id/services/:service_id")  
  .get(ServiceController.prototype.getOneService)
  .put(ServiceController.prototype.updateOneService)
  .delete(ServiceController.prototype.deleteOneService)

Router
  .route("/:saloon_id/services")  
  .post(ServiceController.prototype.createServices)
  .get(ServiceController.prototype.getAllServices) 
  
 export default Router;
