const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
    cep:{
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    number:{
        type: Number,
        require: true
    },
    complement:{
        type: String
    }
});

mongoose.model("clients", ClientSchema);
