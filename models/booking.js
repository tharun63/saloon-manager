"use strict";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookingschema=new Schema(
  {
    user_id:{
      type:Schema.ObjectId
      
    },
    saloon_id:Schema.ObjectId,
    speciality:{
      type:String
      
    },
    cost:{
      type:Number
    },
    location:{
      type:String
    },
    date:String,
    starttime:String,
    endtime:String

  },
  {timestamps:true},
);
bookingschema.index({date:1,starttime:1},{endtime:1},{unique:true})


export default mongoose.model("Booking", bookingschema);


