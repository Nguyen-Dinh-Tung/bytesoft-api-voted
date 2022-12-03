"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerController = void 0;
const employee_schema_1 = __importDefault(require("../models/schemas/employee.schema"));
class customerController {
    static async findUser(req, res) {
        let data = {
            email: req.body.email,
            password: req.body.password,
        };
        console.log(data);
        let user = await employee_schema_1.default.findOne({ email: data.email });
        if (user) {
            if (user.password === data.password) {
                return res.status(200).json({ message: "Đăng nhập thành công !" });
            }
            else {
                return res
                    .status(200)
                    .json({ message: "Sai mật khẩu ! Vui lòng thử lại !" });
            }
        }
        else {
            return res
                .status(200)
                .json({ message: "Đăng nhập thất bại! Vui lòng thử lại !" });
        }
    }
    static async createCustomer(req, res) {
        const data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
        };
        console.log(data);
        let user = await employee_schema_1.default.findOne({ email: data.email });
        console.log(user);
        if (user) {
            return res.status(200).json({ message: "Tài khoản đã tồn tại !" });
        }
        else {
            const customer = new employee_schema_1.default(data);
            await customer.save();
            return res.status(200).json({ message: "Create thanh cong" });
        }
    }
    static async showList(req, res) {
        const customer = await employee_schema_1.default.find();
        return res.status(200).json({ user: customer });
    }
    static async deleteCustomer(req, res) {
        let id = req.params.id;
        console.log(id);
        await employee_schema_1.default.deleteOne({
            _id: `${id}`,
        });
        return res.status(200).json({ message: "delete thanh cong" });
    }
    static async showFormEditCustomer(req, res) {
        let id = req.query.id;
        const custormerSelect = await employee_schema_1.default.findOne({
            _id: id,
        });
        return res.status(200);
    }
    static async editCustomer(req, res) {
        let id = req.body.id;
        await employee_schema_1.default.updateOne({ _id: id }, {
            name: req.body.name,
            code: req.body.code,
            age: req.body.age,
            department: req.body.department,
        });
        return res.status(200);
    }
}
exports.customerController = customerController;
exports.default = new customerController();
//# sourceMappingURL=customer.controller.js.map