import mongoose from "mongoose";
declare const Vote: mongoose.Model<{
    type?: string;
    beVoted?: string;
    email?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    type?: string;
    beVoted?: string;
    email?: string;
}>>;
export default Vote;
