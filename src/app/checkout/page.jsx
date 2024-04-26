"use client";

import { useState } from 'react';
import Button from '@/components/ui/button';

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você enviaria os dados do formulário para o servidor para processar o pagamento e a ordem de compra
    console.log('Form data:', formData);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome Completo</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="address">Endereço</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
        </div>
        {/* Adicionar campos adicionais conforme necessário */}
        <Button type="submit">Finalizar Pedido</Button>
      </form>
    </div>
  );
};

export default CheckoutPage;
