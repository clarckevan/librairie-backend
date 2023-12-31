import { Schema, model } from "mongoose"

const userArticles = new Schema({
    nom: {
        type: String,
        required: true,
        unique: true,
    },
    userId: {
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    description: {
        type: String,
        required: true,
    },
    prix: {
        type: Number,
        required: true,
    }

})

export default model("Articles", userArticles)