import { makeObservable } from "mobx";
import CurrencyStore from "./currency.store";
import OrderStore from "./order.store";

export default class RootStore {
    currencies: CurrencyStore;
    orders: OrderStore;

    constructor() {
        this.currencies = new CurrencyStore(this);
        this.orders = new OrderStore(this);
    }
}
