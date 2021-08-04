import { HasFormatter } from "../interfaces/HasFormatter";

// class implementing interface
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} ows £${this.amount} for ${this.details} `;
  }
}
