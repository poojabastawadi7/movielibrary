import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
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