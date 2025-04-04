const { Schema, model} = require("mongoose")

const Document = new Schema({
    _id: String, // Unique document ID  
    data: Object, // Quill.js Delta data
})

module.exports = model("Document", Document)