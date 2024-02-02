"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_routes_1 = require("../modules/category/category.routes");
const crypto_routes_1 = require("../modules/crypto/crypto.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    // ... routes
    {
        path: '/catagories',
        route: category_routes_1.CategoryRoutes,
    },
    {
        path: '/cryptos',
        route: crypto_routes_1.CryptoRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
