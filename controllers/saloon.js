
import SaloonService  from "../services/saloon.js";

export default class SaloonController {
 
  createSaloon(request, response, next) {
    
     SaloonService.prototype
      .createSaloon(request)
      .then(creatingsaloons => {
        response.json(creatingsaloons);
      })
      .catch(error => next(error));
  }

   getAllSaloons(request,response,next){
     SaloonService.prototype
      .getAllSaloons (request)
      .then(getallsaloons => {
        response.json(getallsaloons);
      })
      .catch(error=>next(error));
   }

   getSaloon(request,response,next){
    SaloonService.prototype
     .getSaloon(request)
     .then(getsaloon => {
       response.json(getsaloon);
     })
     .catch(error=>next(error));
  }
  



  updateSaloon(request,response,next){
    SaloonService.prototype
      .updateSaloon(request)
      .then(updatesaloon=> {
        response.json(updatesaloon);
      })
      .catch(error=>next(error));
  
  };

  deleteSaloon(request,response,next){
   SaloonService.prototype
     .deleteSaloon(request)
     .then(deletesaloon=>{
       response.json(deletesaloon);
     })
     .catch(error=>next(error));
  };
}

