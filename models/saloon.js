"use strict";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const slotSchema = new Schema(
  {
   slot:{
     type:String,
     required:true
    },
   date:String,
   day:String,
   isBooked:{
      type:Boolean,
      default:false
   },
   saloon_id:{ type:Schema.Types.ObjectId }
  }, 
  {timestamps:true}
)

const saloonSchema = new Schema(
  {
   name:{
     type:String,
     required:true
    },
   phone:Number,
   email:String,
   location:String,
   slots:[slotSchema]
  }, 
  {timestamps:true}
)
slotSchema.index({date:1,slot:1},{unique:true})

export default mongoose.model('Saloon', saloonSchema);
