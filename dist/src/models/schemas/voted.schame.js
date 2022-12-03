"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const voteSchema = new mongoose_1.default.Schema({
    type: String,
    beVoted: String,
    email: String,
});
const Vote = mongoose_1.default.model("Vote", voteSchema);
exports.default = Vote;
//# sourceMappingURL=voted.schame.js.map