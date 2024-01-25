
import { createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addProduct = (item) => {
        const productIndex = items.findIndex(produc => produc.id === item.id);
    
        if (productIndex === -1) {
        setItems([...items, { ...item,
            quantity: 1
        }]);
        } else {
        const newCart = [...items];
        newCart[productIndex].quantity++;
        setItems(newCart);
        }
    };

    const cantidadTotal = ()=>{
        console.log(items);
        let cantidad = 0;
        items.map((item)=>{
              cantidad += item.quantity;
         })
        return cantidad;
    }

    const getProducts = () => {
        return items;
    }
    
    const getTotalPrice = () => {
        return items.reduce((acc, item) => {
            const priceSinCaracteresSoloNumero = item.price.replace(/[^0-9]/g, '');
            console.log(priceSinCaracteresSoloNumero);
            return acc + priceSinCaracteresSoloNumero * item.quantity
        }, 0);
    };

    return (
        <CartContext.Provider value={{addProduct, cantidadTotal, getProducts, getTotalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};
