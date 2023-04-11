import {
    action,
    computed,
    makeAutoObservable,
    makeObservable,
    observable,
} from "mobx";
import RootStore from "./root.store";
import { Socket, io } from "socket.io-client";

export type Currency = {
    name: string;
    value: number;
};

export default class CurrencyStore {
    rootStore: RootStore;
    socket: Socket;

    @observable
    currencies = Array<Currency>();

    constructor(root: RootStore) {
        this.rootStore = root;

        this.currencies.push(
            { name: "base", value: 1 },
            {
                name: "eu",
                value: 1,
            },
            {
                name: "dol",
                value: 2,
            }
        );

        makeObservable(this);

        this.socket = io("http://localhost:3000");

        this.subcribe();
    }

    subcribe() {
        this.socket.emit("hello", "");

        this.socket.on("events", (rawData: string) => {
            const data = JSON.parse(rawData) as { [key: string]: number };
            Object.entries(data).map(([key, value]) => {
                this.updateCurrency(key, value);
            });
        });
    }

    @action
    updateCurrency(name: string, value: number) {
        const index = this.currencies.findIndex((c) => c.name === name);
        if (index >= 0) {
            this.currencies[index].value = value;
            console.debug(`updating ${name}: ${value} (${index})`);
        }
    }

    @computed
    get getCurrencies(): Currency[] {
        return this.currencies;
    }

    getValue(currency: string): number {
        const curr = this.currencies.find((c) => c.name === currency);
        if (curr) {
            return curr.value;
        } else {
            return 0;
        }
    }
}
