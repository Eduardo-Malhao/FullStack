"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDto_1 = __importDefault(require("../controller/UserDto"));
class UsersMdws {
    static setRoleBasedOnEmail(req, res, next) {
        const user = UserDto_1.default.BodyToUser(req.body);
        const adminEmailRegex = /@admin\.com$/i;
        user.role = adminEmailRegex.test(user.email) ? 'ADMIN' : 'USER';
        next();
    }
}
exports.default = UsersMdws;
//# sourceMappingURL=UsersMdws.js.map