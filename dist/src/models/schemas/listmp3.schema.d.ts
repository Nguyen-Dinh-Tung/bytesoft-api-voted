import mongoose from "mongoose";
declare const ListMp3: mongoose.Model<{
    image?: string;
    name?: string;
    category?: string;
    singer?: string;
    mp3?: string;
    user_id?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    image?: string;
    name?: string;
    category?: string;
    singer?: string;
    mp3?: string;
    user_id?: string;
}>>;
export default ListMp3;
