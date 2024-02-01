import express from 'express';
import { CryptoController } from './crypto.controller';

const router = express.Router();

router.get('/', CryptoController.getAllFromDB);
router.get('/:id', CryptoController.getDataById);
router.post('/create', CryptoController.insertIntoDB);
router.patch('/:id', CryptoController.updateOneInDB);
router.delete('/:id', CryptoController.deleteByIdFromDB);

export const CryptoRoutes = router;
