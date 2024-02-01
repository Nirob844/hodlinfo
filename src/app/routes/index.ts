import express from 'express';
import { CategoryRoutes } from '../modules/category/category.routes';
import { CryptoRoutes } from '../modules/crypto/crypto.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/catagories',
    route: CategoryRoutes,
  },
  {
    path: '/cryptos',
    route: CryptoRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
