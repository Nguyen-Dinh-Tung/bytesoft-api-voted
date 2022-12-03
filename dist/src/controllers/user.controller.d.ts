import { Request, Response } from "express";
declare class AuthServices {
    static createNewUser(req: Request, res: Response, data: Object): Promise<void>;
}
export default AuthServices;
