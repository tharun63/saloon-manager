import  Saloon from "../models/saloon.js";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { response } from "express";
//import _ from "underscore";

  export default class SlotService {
    addSlot(request) {
      return new Promise((resolve, reject) => {
        console.log(request.body);
        Saloon.findOneAndUpdate({_id:request.params.saloon_id},{$push:{slots:request.body}})
        .then(addslot => {
          resolve(addslot)
        }).catch(error => reject(error));
    
      })
    }
    getAllSlots(request){
      return new Promise((resolve,reject)=>{
        Saloon.findOne({_id:request.params.saloon_id},{slots:1})
        .then(getallslots=>{
          resolve(getallslots)
        }).catch(error=>reject(error))
      })
    }
    getOneSlot(request) {
      return new Promise((resolve, reject) => {
    Saloon.findOne({'_id': ObjectId(request.params.saloon_id)}, {slots: {$elemMatch: {_id: ObjectId(request.params.slot_id)}}},{slots:1,_id:0})
        
      
    .then(getoneslot=> {          resolve(getoneslot)
      console.log(getonemember)  
          }).catch(error =>
            {console.log(error) 
            reject(error)});
      })
    }
    deleteSlot(request) {
      return new Promise((resolve, reject) => {

    Saloon.findOneAndUpdate({_id:request.params.saloon_id},{$pull:{slots:{_id:mongoose.Types.ObjectId(request.params.slot_id)}}},function(err,result){
      if(!err){
      }else {
        console.log('error in deletion');
        //response.redirect("/")
      }
    })
          .then(updateslot=> { 
            resolve(updateslot)
          }).catch(error => reject(error));
      })
    }
    updateSlot(request) {
      return new Promise((resolve, reject) => {
        Saloon.findOneAndUpdate({'_id':request.params.saloon_id,slots:{$elemMatch:{_id:ObjectId(request.params.slot_id)}}},{$set:request.body}) 

          .then(deleteslot => {  
            console.log("deleteslot",deleteslot)
            resolve(deleteslot)
          }).catch(error => reject(error));
      })
    }
  }
  