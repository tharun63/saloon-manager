import Saloon from "../models/saloon.js";
import { ObjectId } from "mongodb";

  export default class SaloonService {
    createSaloon(request) {
      return new Promise((resolve, reject) => {
        Saloon.create(request.body)
        .then(creatingsaloon => {
          resolve(creatingsaloon)
        }).catch(error => reject(error));
    
      })
    }
    getAllSaloons(request) {
      return new Promise((resolve, reject) => {
    Saloon.find({})
          .then(getallsaloons=> {
            resolve(getallsaloons)
          }).catch(error => reject(error));
      })
    }
    getSaloon(request) {
      return new Promise((resolve, reject) => {
    Saloon.findOne({_id:request.params.saloon_id})
          .then(getonesaloon=> {          resolve(getonesaloon)
          }).catch(error => reject(error));
      })
    }
    updateSaloon(request) {
      return new Promise((resolve, reject) => {
    Saloon.findOneAndUpdate({_id:request.params.saloon_id},{$set:request.body})
          .then(updatingsaloon => { 
            console.log("updateSaloon================",updatingsaloon);
            resolve(updatingsaloon)

          }).catch(error => {
          console.log("error update",error);
          reject(error)});
          
      })
    }
    deleteSaloon(request) {
      return new Promise((resolve, reject) => {
    Saloon.findOneAndRemove({_id:request.params.saloon_id})
          .then(deletingsaloon=> {          resolve(deletingsaloon)
          }).catch(error => reject(error));
      })
    }
  }
