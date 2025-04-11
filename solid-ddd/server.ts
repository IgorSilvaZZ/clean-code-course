import { PostgresOrderRepository } from "./repositories/portgres/PostgresOrderRepository";

import { SubmitOrderUseCase } from "./useCases/SubmitOrderUseCase";

const postgresOrderRepository = new PostgresOrderRepository();

const submitOrder = new SubmitOrderUseCase(postgresOrderRepository);
