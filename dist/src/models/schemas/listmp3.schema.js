"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const listMp3Schemas = new mongoose_1.default.Schema({
    name: String,
    category: String,
    singer: String,
    image: String,
    mp3: String,
    user_id: String,
});
const ListMp3 = mongoose_1.default.model("ListMp3s", listMp3Schemas);
exports.default = ListMp3;
//# sourceMappingURL=listmp3.schema.js.map