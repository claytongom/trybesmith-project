import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function createProduct(products: Product): Promise<ServiceResponse<ProductSequelizeModel>> {
  const data = await ProductModel.create(products);
  delete data.dataValues.orderId;
  return { 
    status: 'CREATED', data,
  };
}

async function getAll(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const data = await ProductModel.findAll();
  return {
    status: 'SUCCESSFUL', data,
  };
}

export default {
  createProduct,
  getAll,
};
