
import Service  from "../models/service.js";
import { ObjectId } from "mongodb";


export default class ServiceService {
  createServices(request) {
    return new Promise((resolve, reject) => {
      Service.create(request.body)
        .then(creatingservices=> {
          resolve(creatingservices)
        }).catch(error => reject(error));
    })
  }
  GetAllServices(request) {
    return new Promise((resolve,reject)=>{
      Service.find({})
      .then(getallservices=>{
        resolve(getallservices)
      }).catch(error => reject(error));
    })
  }
  getOneService(request){
    return new Promise((resolve,reject)=>{
      Service.findOne({_id:ObjectId(request.params.service_id)})
      .then(getoneservice=>{
        resolve(getoneservice)
      }).catch(error=>reject(error));
    })
  }
  updateService(request){
    return new Promise((resolve,reject)=>{
      Service.findOneAndUpdate({_id:ObjectId(request.params.service_id)},{$set:request.body})
      .then(updateoneservice=>{
        resolve(updateoneservice)
      }).catch(error=>reject(error))
    })
  }
  deleteOneService(request){
    return new Promise((resolve,reject)=>{
      Service.findOneAndRemove({_id:ObjectId(request.params.service_id)})
      .then(deleteoneservice=>{
        resolve({message:"service deleted successfully"})
      }).catch(error=>reject(error));
    })
  }
  
}
