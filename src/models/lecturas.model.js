import { Schema, model } from "mongoose";

const lecturasSchema = new Schema({

    L_temperatura: Number, 
    L_humedad: Number, 
    L_proximidad: Number, 
    Servo: Number
  
  
},
{
  versionKey: false,
  timestamps: true
});

export default model('Lecturas', lecturasSchema);
