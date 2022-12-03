"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_schema_1 = __importDefault(require("../models/schemas/user.schema"));
const voted_schame_1 = __importDefault(require("../models/schemas/voted.schame"));
class AuthController {
    static async signUpHandler(data) {
        let { email, password, name, age, address } = data;
        try {
            const checkUser = await user_schema_1.default.findOne({
                email
            });
            if (checkUser) {
                return {
                    status: 400,
                    message: 'User existing'
                };
            }
            else {
                if (!email || !password || !age || !name || !address) {
                    return {
                        status: 400,
                        message: 'Not valid'
                    };
                }
                else {
                    let hashPassword = await bcrypt_1.default.hashSync(password, 10);
                    data.password = hashPassword;
                    const newUser = await user_schema_1.default.create(data);
                    if (newUser) {
                        return {
                            status: 200,
                            message: "Create new user success",
                            newUser: newUser
                        };
                    }
                    else {
                        return {
                            status: 500,
                            message: "Please notify the developer"
                        };
                    }
                }
            }
        }
        catch (e) {
            if (e) {
                throw new Error(e.message);
            }
        }
    }
    static async signIpHandler(data) {
        try {
            let { email, password } = data;
            if (!email || !password) {
                return {
                    status: 400,
                    message: 'Email or password not valid'
                };
            }
            const checkUser = await user_schema_1.default.findOne({
                email
            });
            if (!checkUser) {
                return {
                    status: 400,
                    message: "User not existing"
                };
            }
            else {
                let compPassword = await bcrypt_1.default.compare(password, checkUser.password);
                if (compPassword) {
                    return {
                        status: 200,
                        location: '/home',
                        message: 'Sign in success'
                    };
                }
                else {
                    return {
                        status: 400,
                        message: "Sign in fail please check your email or password"
                    };
                }
            }
        }
        catch (e) {
            if (e) {
                throw new Error(e.message);
            }
        }
    }
    static async voteHandler(data) {
        try {
            const { email, beVoted, type } = data;
            const checkVoted = await voted_schame_1.default.findOne({ email });
            if (checkVoted) {
                return {
                    status: 400,
                    message: "User voted",
                };
            }
            else {
                if (!beVoted || !type) {
                    return {
                        status: 400,
                        message: "Please check infomation vote"
                    };
                }
                else {
                    const newVote = await voted_schame_1.default.create(data);
                    if (newVote) {
                        return {
                            status: 200,
                            message: "Create new vote success"
                        };
                    }
                    else {
                        return {
                            status: 500,
                            message: "Please notify the developer"
                        };
                    }
                }
            }
        }
        catch (e) {
            if (e) {
                throw new Error(e.message);
            }
        }
    }
    static async getVoteListHandler(data) {
        try {
            const { email, password } = data;
            const checkUser = await user_schema_1.default.findOne({ email });
            if (!checkUser) {
                return {
                    status: 400,
                    message: "Please sign in"
                };
            }
            else {
                let compPassword = await bcrypt_1.default.compare(password, checkUser.password);
                if (compPassword) {
                    const listVote = await voted_schame_1.default.find();
                    if (listVote) {
                        return {
                            status: 200,
                            location: "/votes",
                            data: listVote
                        };
                    }
                    else {
                        return {
                            status: 500,
                            message: "Please notify the developer"
                        };
                    }
                }
                else {
                    return {
                        status: 400,
                        message: "Please check your password"
                    };
                }
            }
        }
        catch (e) {
            if (e) {
                throw new Error(e.message);
            }
        }
    }
}
AuthController.encode = 10;
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map