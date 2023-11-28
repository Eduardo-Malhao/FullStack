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
const JWTutils_1 = __importDefault(require("../utils/JWTutils"));
class TokenValidation {
    static validateToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { authorization } = req.headers;
            if (!authorization) {
                return res.status(401).json({ message: 'Token not found' });
            }
            const token = authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'Token must be a valid token' });
            }
            try {
                const decoded = JWTutils_1.default.verify(token);
                res.locals.user = { id: decoded.id };
                next();
            }
            catch (e) {
                return res.status(401).json({ message: 'Token must be a valid token' });
            }
        });
    }
}
exports.default = TokenValidation;
//# sourceMappingURL=TokenValidation.js.map