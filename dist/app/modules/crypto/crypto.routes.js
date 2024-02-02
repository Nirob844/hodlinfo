"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoRoutes = void 0;
const express_1 = __importDefault(require("express"));
const crypto_controller_1 = require("./crypto.controller");
const router = express_1.default.Router();
router.get('/', crypto_controller_1.CryptoController.getAllFromDB);
router.get('/:id', crypto_controller_1.CryptoController.getDataById);
router.post('/create', crypto_controller_1.CryptoController.insertIntoDB);
router.patch('/:id', crypto_controller_1.CryptoController.updateOneInDB);
router.delete('/:id', crypto_controller_1.CryptoController.deleteByIdFromDB);
exports.CryptoRoutes = router;
