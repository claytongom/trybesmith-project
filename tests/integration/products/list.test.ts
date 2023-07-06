import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import listMock from '../../mocks/list.mock';

chai.use(chaiHttp);

describe('GET /products', function () {
  beforeEach(function () {
    sinon.restore();
  });

  it('testando status 200 e retorno de dados', async () => {
    const { productsMock } = listMock;
    const getAllMockRetur = productsMock.map(product => ProductModel.build(product));
    sinon.stub(ProductModel, 'findAll').resolves(getAllMockRetur);

    const httpResponse = await chai.request(app).get('/products');

    expect(httpResponse).to.have.property('status').that.equals(200);
    expect(httpResponse.body).to.eql(listMock.productsMock);
  });
});

