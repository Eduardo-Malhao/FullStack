"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const UsersModel_1 = __importDefault(require("../model/UsersModel"));
const bcrypt = __importStar(require("bcryptjs"));
const JWTutils_1 = __importDefault(require("../utils/JWTutils"));
class UsersService {
    constructor(model = new UsersModel_1.default()) {
        this.model = model;
    }
    register(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const checkUser = yield this.getUsers(user);
                if (checkUser.status === 'SUCCESS') {
                    return { status: 'CONFLICT', data: 'User already exists' };
                }
                const response = yield this.model.createUser(user);
                return { status: 'SUCCESS', data: response };
            }
            catch (error) {
                return { status: 'CONFLICT', data: 'Internal error' };
            }
        });
    }
    getUsers(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (user.username !== null) {
                    const response = yield this.model.findByName(user);
                    if (response)
                        return { status: 'SUCCESS', data: response };
                }
                if (user.email !== null) {
                    const response = yield this.model.findByEmail(user);
                    if (response)
                        return { status: 'SUCCESS', data: response };
                }
                return { status: 'NOT_FOUND', data: 'Not Found' };
            }
            catch (error) {
                return { status: 'CONFLICT', data: 'Internal error' };
            }
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const findUser = yield this.model.findByEmail(user);
                if (!findUser)
                    return { status: 'NOT_FOUND', data: 'Invalid email or password' };
                if (!bcrypt.compareSync(user.password, findUser.password)) {
                    return { status: 'NOT_FOUND', data: 'Invalid email or password' };
                }
                const tokenGenerated = JWTutils_1.default.sign({ id: findUser.id });
                return { status: 'SUCCESS', data: tokenGenerated };
            }
            catch (error) {
                return { status: 'CONFLICT', data: 'Internal error' };
            }
        });
    }
}
exports.default = UsersService;
//# sourceMappingURL=UsersService.js.map