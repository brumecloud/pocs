import { observer } from "mobx-react";
import useStores from "../hooks/useStore";

const HomeScene = () => {
    const { currencies, orders } = useStores();

    return (
        <>
            <h2>Currencies</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>currency</td>
                            <td>value</td>
                        </tr>
                    </thead>
                    <tbody>
                        {currencies.getCurrencies.map((c, i) => {
                            return (
                                <tr key={i}>
                                    <td>{c.name}</td>
                                    <td>{c.value}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <hr></hr>
            <h2>Orders</h2>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>currency</td>
                            <td>value</td>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.getOrders.map((cc, i) => {
                            return (
                                <tr key={i}>
                                    <td>{cc.orderId}</td>
                                    <td>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <td>name</td>
                                                    <td>value</td>
                                                    <td>price</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cc.items.map((c, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{c.name}</td>
                                                            <td>
                                                                <input
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        c.value =
                                                                            parseFloat(
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            );
                                                                    }}
                                                                    value={
                                                                        c.value
                                                                    }
                                                                />
                                                            </td>
                                                            <td>
                                                                {c.value *
                                                                    currencies.getValue(
                                                                        c.currency
                                                                    )}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default observer(HomeScene);
