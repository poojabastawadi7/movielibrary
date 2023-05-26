import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    text:{
        type: String,

    },
    image: {
        type: String,
        required: true,
    },
    admin:{
        type: String,
       
    }
})

export default mongoose.model("Movie", movieSchema);