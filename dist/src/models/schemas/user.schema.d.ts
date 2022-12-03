import mongoose from "mongoose";
declare const Users: mongoose.Model<{
    name?: string;
    age?: string;
    address?: string;
    email?: string;
    password?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: string;
    age?: string;
    address?: string;
    email?: string;
    password?: string;
}>>;
export default Users;
