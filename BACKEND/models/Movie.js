import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,

    },
    posterUrl: {
        type: String,
        required: true,
    },
    actors:{
        type: Array,
    },
    releaseDate: {
        type: Date,

    },
    admin:{
        type: String,
       
    }
})

export default mongoose.model("Movie", movieSchema);