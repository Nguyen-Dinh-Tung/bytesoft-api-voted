"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const authRouter = (0, express_1.Router)();
const signUpHandler = async (req, res) => {
    const data = req.body;
    const response = await auth_controller_1.default.signUpHandler(data);
    const { status } = response;
    res.status(status).json({
        response
    });
};
const signInHandler = async (req, res) => {
    const data = req.body;
    const response = await auth_controller_1.default.signIpHandler(data);
    const { status } = response;
    res.status(status).json({
        response
    });
};
const voteHandler = async (req, res) => {
    const data = req.body;
    const response = await auth_controller_1.default.voteHandler(data);
    const { status } = response;
    res.status(status).json({
        response
    });
};
const getVoteListHandler = async (req, res) => {
    const data = req.body;
    const response = await auth_controller_1.default.getVoteListHandler(data);
    const { status } = response;
    res.status(status).json({
        response
    });
};
authRouter.post('/sign-up', signUpHandler);
authRouter.post('/sign-in', signInHandler);
authRouter.post('/vote', voteHandler);
authRouter.get('/votes', getVoteListHandler);
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map