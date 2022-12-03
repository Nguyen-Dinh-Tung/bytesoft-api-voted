"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const customer_controller_1 = require("../controllers/customer.controller");
router.post("/findUser", (req, res, next) => {
    customer_controller_1.customerController.findUser(req, res).catch((err) => {
        next(err);
    });
});
router.post("/create", (req, res, next) => {
    customer_controller_1.customerController.createCustomer(req, res).catch((err) => {
        next(err);
    });
});
router.get("/list", async (req, res, next) => {
    customer_controller_1.customerController.showList(req, res).catch((err) => {
        next(err);
    });
});
router.delete("/delete/:id", async (req, res, next) => {
    customer_controller_1.customerController.deleteCustomer(req, res).catch((err) => {
        next(err);
    });
});
router.get("/edit", async (req, res, next) => {
    customer_controller_1.customerController.showFormEditCustomer(req, res).catch((err) => {
        next(err);
    });
});
router.post("/edit", async (req, res, next) => {
    customer_controller_1.customerController.editCustomer(req, res).catch((err) => {
        next(err);
    });
});
exports.default = router;
//# sourceMappingURL=customer.router.js.map