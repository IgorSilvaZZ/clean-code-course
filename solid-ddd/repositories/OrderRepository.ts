import { Order } from "../domain/purchases/Order";

export interface OrderRepository {
  create(order: Order): Promise<void>;
}
