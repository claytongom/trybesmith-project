type ProductIds = {
  id: number,
};
export type Order = {
  id: number;
  userId: number;
  productIds?: ProductIds[];
};

export type OrderNumber = {
  id: number;
  userId: number;
  productIds?: number[];
};
