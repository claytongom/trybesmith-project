import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import ordersMock from '../../mocks/orders.mock';
import { Order } from '../../../src/types/Order';

chai.use(chaiHttp);

describe('GET /orders', () => {
  beforeEach(() => {
    sinon.restore();
  });

  it('testando status 201 e dados retornados ', async () => {
    const { ordersMock: mockOrders } = ordersMock;
    const getAllMockRetur = mockOrders.map(order => OrderModel.build(order as unknown as Order));
    sinon.stub(OrderModel, 'findAll').resolves(getAllMockRetur);

    const httpResponse = await chai.request(app).get('/orders');

    expect(httpResponse).to.have.property('status').that.equals(200);
  });
});
