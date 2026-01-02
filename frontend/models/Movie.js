const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: String,
    rating:Number,
    duration:Number,
    year:Number,
    description:String
});

module.exports = mongoose.model("Movie", movieSchema)