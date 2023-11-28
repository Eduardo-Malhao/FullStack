"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const User_1 = __importDefault(require("../database/models/User"));
class UsersModel {
    constructor() {
        this.model = User_1.default;
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.create({
                email: user.email,
                password: user.password,
                username: user.username,
                role: user.role,
            });
            return response;
        });
    }
    findByName(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.findOne({
                where: { username: { [sequelize_1.Op.like]: `%${user.username}%` } }
            });
            if (!response)
                return null;
            return response;
        });
    }
    findByEmail(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.model.findOne({
                where: { email: { [sequelize_1.Op.like]: `${user.email}%` } }
            });
            if (!response)
                return null;
            return response;
        });
    }
}
exports.default = UsersModel;
//# sourceMappingURL=UsersModel.js.map