import { Request, Response } from 'express';
import productsService from '../services/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

function createProduct(req: Request, res: Response): Promise<Response> {
  const result = req.body;
  return productsService.createProduct(result)
    .then(({ status, data }) => res.status(mapStatusHTTP(status)).json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
}

function getAll(req: Request, res: Response): Promise<Response> {
  return productsService.getAll()
    .then(({ status, data }) => res.status(mapStatusHTTP(status)).json(data))
    .catch((error) => res.status(500).json({ error: error.message }));
}

export default {
  createProduct,
  getAll,
};