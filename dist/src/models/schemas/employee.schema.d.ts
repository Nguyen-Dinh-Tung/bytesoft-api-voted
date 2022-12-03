import mongoose from "mongoose";
declare const Employee: mongoose.Model<{
    firstname?: string;
    lastname?: string;
    username?: string;
    email?: string;
    phone?: string;
    image?: string;
    password?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    firstname?: string;
    lastname?: string;
    username?: string;
    email?: string;
    phone?: string;
    image?: string;
    password?: string;
}>>;
export default Employee;
