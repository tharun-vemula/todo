const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = Schema({
    title : {
        type : String,
        required : true
    }
}, { timestamps : true})


module.exports = mongoose.model('Item', postSchema);
