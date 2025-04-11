export class Receiver {
  public address: string;
  public number: number;
  public zipCode: string;

  constructor(address: string, number: number, zipCode: string) {
    this.address = address;
    this.number = number;
    this.zipCode = zipCode;
  }
}
