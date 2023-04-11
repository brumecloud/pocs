import {
    action,
    computed,
    makeAutoObservable,
    makeObservable,
    observable,
} from "mobx";
import { Currency } from "./currency.store";
import RootStore from "./root.store";

type Item = {
    name: string;
    value: number;
    currency: string;
};

type Order = {
    orderId: string;
    items: Item[];
};

export default class OrderStore {
    rootStore: RootStore;

    @observable
    orders: Order[] = [];

    constructor(root: RootStore) {
        this.rootStore = root;

        this.orders = [
            {
                orderId: "order-46327842",
                items: [
                    {
                        name: "item 1",
                        currency: "eu",
                        value: 1,
                    },
                    {
                        name: "item 2",
                        currency: "dol",
                        value: 2,
                    },
                ],
            },
        ];
        makeObservable(this);
    }

    @action
    addOrder(items: Item[]): Order {
        const order = {
            orderId: Math.random().toString().slice(1, 8),
            items,
        };

        return order;
    }

    @computed
    get getOrders(): Order[] {
        return this.orders;
    }
}
