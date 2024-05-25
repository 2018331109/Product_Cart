import { useEffect, useState } from 'react';
import '../App.css';

function CartList({ cart }) {
    const [CART, setCART] = useState([]);

    useEffect(() => {
        setCART(cart);
    }, [cart]);

    const updateQuantity = (index, delta) => {
        const newCart = CART.map((item, idx) => {
            if (idx === index) {
                const newQuantity = item.quantity + delta;
                return { ...item, quantity: newQuantity > 0 ? newQuantity : 0 };
            }
            return item;
        });
        setCART(newCart);
    };

    const calculateTotal = () => {
        return CART.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <div>
            {CART.map((cartItem, cartIndex) => (
                <div key={cartIndex} className='cart-item'>
                    <img src={cartItem.url} alt={cartItem.name} width={40} />
                    <span>{cartItem.name}</span>
                    <button onClick={() => updateQuantity(cartIndex, -1)}>-</button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={() => updateQuantity(cartIndex, 1)}>+</button>
                    <span>{cartItem.price * cartItem.quantity}</span>
                </div>
            ))}
            <p>Total: {calculateTotal()} taka</p>
        </div>
    );
}

export default CartList;
