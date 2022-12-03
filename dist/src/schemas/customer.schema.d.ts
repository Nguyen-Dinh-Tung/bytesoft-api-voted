import mongoose from "mongoose";
declare const Customer: mongoose.Model<{
    name?: string;
    code?: number;
    email?: string;
    phone?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: string;
    code?: number;
    email?: string;
    phone?: string;
}>>;
export default Customer;
