"use strict";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const serviceschema=new Schema(
  {
    saloon_id:Schema.ObjectId,
    speciality:{
      type:String,
      required:true
    },
    cost:{
      type:Number
    
    },
    duration:String

  },
  {timestamps:true},
);
serviceschema.index({date:1,starttime:1},{endtime:1},{unique:true})


export default mongoose.model("Service", serviceschema);


