import { Order } from "../../domain/purchases/Order";
import { OrderRepository } from "../OrderRepository";

export class PostgresOrderRepository implements OrderRepository {
  create(order: Order): Promise<void> {
    // Salva o order no banco de dados

    return;
  }
}
