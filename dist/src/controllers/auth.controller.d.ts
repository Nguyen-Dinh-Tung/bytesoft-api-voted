declare class AuthController {
    private static encode;
    static signUpHandler(data: any): Promise<{
        status: number;
        message: string;
        newUser?: undefined;
    } | {
        status: number;
        message: string;
        newUser: import("mongoose").Document<unknown, any, {
            email?: string;
            password?: string;
            name?: string;
            age?: string;
            address?: string;
        }> & {
            email?: string;
            password?: string;
            name?: string;
            age?: string;
            address?: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    static signIpHandler(data: any): Promise<{
        status: number;
        message: string;
        location?: undefined;
    } | {
        status: number;
        location: string;
        message: string;
    }>;
    static voteHandler(data: any): Promise<{
        status: number;
        message: string;
    }>;
    static getVoteListHandler(data: any): Promise<{
        status: number;
        message: string;
        location?: undefined;
        data?: undefined;
    } | {
        status: number;
        location: string;
        data: (import("mongoose").Document<unknown, any, {
            email?: string;
            type?: string;
            beVoted?: string;
        }> & {
            email?: string;
            type?: string;
            beVoted?: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        })[];
        message?: undefined;
    }>;
}
export default AuthController;
