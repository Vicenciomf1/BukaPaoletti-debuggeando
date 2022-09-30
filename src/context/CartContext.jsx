import React, { createContext, useState } from 'react';

const cartContext = createContext();
const { Provider } = cartContext;

export default function ContextProvider({ children }) {

    const [cart, setCart] = useState([]);

    function isInCart(id) {
        return cart.some(item => item.id === id);
    }

    function getItemCount() {
        return cart.reduce((acc, item) => acc += item.count, 0);
    }

    function getItemPrice() {
        return cart.reduce((acc, item) => acc += item.price * item.count);
    }

    function deleteItem() {
        return setCart([])
    }

    function addItem(data, count) {

        const newData = { ...data, count };

        if (isInCart(newData.id)) {
            const productFind = cart.find(product => product.id === newData.id);
            const productIndex = cart.indexOf(productFind);
            const copyCart = [...cart]
            copyCart[productIndex].count += count
            setCart(copyCart);
        }
        else {
            setCart([...cart, newData]);
        }
    }

    return (
        <Provider value={{ cart, addItem, isInCart, getItemCount, getItemPrice, deleteItem }}>{children}</Provider>
    )
}

export { cartContext }