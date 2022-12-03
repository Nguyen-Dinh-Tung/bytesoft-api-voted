import { Request, Response } from "express";
export declare class customerController {
    static findUser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static createCustomer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static showList(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static deleteCustomer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static showFormEditCustomer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static editCustomer(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
declare const _default: customerController;
export default _default;
