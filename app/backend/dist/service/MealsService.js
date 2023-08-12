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
const MealsModel_1 = __importDefault(require("../model/MealsModel"));
class DrinksService {
    constructor(model = new MealsModel_1.default()) {
        this.model = model;
    }
    getMeals(search) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (search) {
                    if (typeof search === 'string') {
                        // Handle the case where search is a string
                        // For example, you might want to search for a specific drink by ID
                    }
                    else if (typeof search === 'object') {
                        if (search.ingredient) {
                            const response = yield this.model.findByIngredient(search.ingredient);
                            if (response)
                                return { status: 'SUCCESS', data: response };
                            return { status: 'NOT_FOUND', data: 'Not Found' };
                        }
                        if (search.name) {
                            const response = yield this.model.findByName(search.name);
                            if (response)
                                return { status: 'SUCCESS', data: response };
                            return { status: 'NOT_FOUND', data: 'Not Found' };
                        }
                        if (search.first) {
                            const response = yield this.model.findByLetter(search.first);
                            if (response)
                                return { status: 'SUCCESS', data: response };
                            return { status: 'NOT_FOUND', data: 'Not Found' };
                        }
                    }
                }
                // If no specific search parameters are provided, fetch all drinks
                const response = yield this.model.findAll();
                return { status: 'SUCCESS', data: response };
            }
            catch (error) {
                return { status: 'CONFLICT', data: 'Internal error' };
            }
        });
    }
}
exports.default = DrinksService;
//# sourceMappingURL=MealsService.js.map