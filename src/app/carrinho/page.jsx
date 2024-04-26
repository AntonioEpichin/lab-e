"use client";

import { useState, useEffect } from 'react';
import Button from '@/components/ui/button';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Aqui você buscaria os itens do carrinho armazenados no local storage ou no estado global da aplicação
    // Por enquanto, vamos usar um array vazio como placeholder
  }, []);

  const handleRemoveFromCart = (itemId) => {
    // Implementar a lógica para remover um item do carrinho
    console.log('Remove from cart:', itemId);
  };

  const handleCheckout = () => {
    // Iniciar o processo de checkout
    console.log('Proceed to checkout');
  };

  if (cartItems.length === 0) {
    return <p>Seu carrinho está vazio.</p>;
  }

  return (
    <div>
      <h1>Seu Carrinho</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>R$ {item.price.toFixed(2)}</p>
            <Button onClick={() => handleRemoveFromCart(item.id)}>Remover</Button>
          </li>
        ))}
      </ul>
      <hr />
      <Button onClick={handleCheckout}>Finalizar Compra</Button>
    </div>
  );
};

export default CartPage;
