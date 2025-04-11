export class Order {
  public total: number;
  public costumerDocument: string;
  public createdAt: Date;

  constructor(total: number, costumerDocument: string) {
    this.total = total;
    this.costumerDocument = costumerDocument;
    this.createdAt = new Date();
  }
}
