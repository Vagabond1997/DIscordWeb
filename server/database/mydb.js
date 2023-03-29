import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/apidb3')
    .then(()=> console.log('Mongodb connected sucessfully'))
    .catch((err)=> console.log(err));

    const itemSchema = new mongoose.Schema({
        firstname: {type: String, required: true, trim: true},
       lastname: {type: String, required: true, trim: true},
        email: {type: String, required: false, trim: true},
        address: {type: String, required: true, trim: true},
        message: {type: String, required: true, trim: true},
    });
    
    const ItemModel = mongoose.model('items', itemSchema);
    
    export {ItemModel};