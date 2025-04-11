import { Order } from "../domain/purchases/Order";
import { OrderRepository } from "../repositories/OrderRepository";

interface SubmitOrderUseCaseRequest {
  costumerDocument: string;
  total: number;
}

export class SubmitOrderUseCase {
  constructor(private ordersRepository: OrderRepository) {}

  async execute({ costumerDocument, total }: SubmitOrderUseCaseRequest) {
    const order = new Order(total, costumerDocument);

    // Persistir no banco de dados
    await this.ordersRepository.create(order);
  }
}
