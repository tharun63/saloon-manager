import ServiceService  from "../services/service.js";

export default class ServiceController {
 
  createServices(request, response, next) {
    
     ServiceService .prototype
      .createServices(request)
      .then(result => {
        response.json(result);
      })
      .catch(error => next(error));
  }
  getAllServices(request,response,next){
    ServiceService.prototype
    .GetAllServices(request)
    .then(getallservices=>{
      response.json(getallservices);
    }).catch(error=>next(error));
  }
  getOneService(request,response,next){
    ServiceService.prototype
    .getOneService(request)
    .then(getoneservice=>{
      response.json(getoneservice);
    }).catch(error=>next(error))
  }
  updateOneService(request,response,next){
    ServiceService.prototype
    .updateService(request)
    .then(updateoneservice=>{
      response.json(updateoneservice);
    }).catch(error=>next(error))
  }
  deleteOneService(request,response,next){
    ServiceService.prototype
    .deleteOneService(request)
    .then(deletedoneservice=>{
      response.json(deletedoneservice)
    }).catch(error=>next(error));
  }
}
