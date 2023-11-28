"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsersController_1 = __importDefault(require("../controller/UsersController"));
const UsersMdws_1 = __importDefault(require("../middlewares/UsersMdws"));
const router = (0, express_1.Router)();
const controller = new UsersController_1.default();
router.post('/register', UsersMdws_1.default.setRoleBasedOnEmail, (req, res) => controller.register(req, res));
router.post('/login', (req, res) => controller.login(req, res));
router.get('/user', (req, res) => controller.getUsers(req, res));
exports.default = router;
//# sourceMappingURL=UserRouter.js.map