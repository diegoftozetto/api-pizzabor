const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    url:{
        type: String
    },
    name:{
        type: String,
        require: true
    },
    categorie:{
        type: String,
        require: true
    },
    price:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
});

mongoose.model("products", ProductSchema);

