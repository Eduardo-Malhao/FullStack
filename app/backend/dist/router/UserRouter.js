"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = __importDefault(require("../controller/UsersController"));
const LoginValidation_1 = __importDefault(require("../middlewares/LoginValidation"));
const router = (0, express_1.Router)();
const controller = new UsersController_1.default();
router.post('/register', 
// RegisterValidation.validateFields,
// RegisterValidation.validateEmail,
// RegisterValidation.validateUsername,
// RegisterValidation.validatePassword,
(req, res) => controller.register(req, res));
router.post('/login', LoginValidation_1.default.validateFields, (req, res) => controller.login(req, res));
router.get('/', (req, res) => controller.getAllUsers(req, res));
exports.default = router;
//# sourceMappingURL=UserRouter.js.map