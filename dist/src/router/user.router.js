"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("src/controllers/user.controller"));
const userRouter = (0, express_1.Router)();
const showHomePage = async (req, res) => {
    res.status(200).json({
        message: 'Connected'
    });
};
const signUpHandler = async (req, res) => {
    let data = req.body;
    const reponse = await user_controller_1.default.createNewUser(req, res, data);
};
userRouter.get('/', showHomePage);
userRouter.post('/sign-up', signUpHandler);
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map