import mongoose from "mongoose";

const voteSchema = new mongoose.Schema({
    type : String , 
    beVoted : String ,
    email : String ,
});

const Vote = mongoose.model("Vote", voteSchema);

export default Vote;
