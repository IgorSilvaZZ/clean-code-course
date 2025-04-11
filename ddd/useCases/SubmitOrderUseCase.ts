import { Order } from "../domain/purchases/Order";

interface SubmitOrderUseCaseRequest {
  costumerDocument: string;
  total: number;
}

export class SubmitOrderUseCase {
  async execute({ costumerDocument, total }: SubmitOrderUseCaseRequest) {
    const order = new Order(total, costumerDocument);

    // Persistir no banco de dados
  }
}
