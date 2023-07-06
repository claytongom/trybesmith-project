import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';

chai.use(chaiHttp);

describe('POST /products', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('testando status 201 e dados retornados', async function () {
    const httpRequest = productsMock.productsBody;
    const mockReturn = ProductModel.build(productsMock.bodyResponse);
    sinon.stub(ProductModel, 'create').resolves(mockReturn);

    const httpResponse = await chai
      .request(app)
      .post('/products')
      .send(httpRequest);

    expect(httpResponse).to.have.property('status').that.equals(201);
    expect(httpResponse.body).to.eql(productsMock.productsResult);
  });
});

