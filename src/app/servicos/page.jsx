"use client";

import { useState, useEffect } from 'react';
import Button from '@/components/ui/button';

const ServiceListPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Carregar os serviços do arquivo JSON no diretório public
    fetch('/servicos.json')
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      })
      .catch((error) => console.error('Failed to load services:', error));
  }, []);

  const handleAddToCart = (service) => {
    // Implementar a lógica para adicionar um serviço ao carrinho
    console.log('Add to cart:', service);

    // Exemplo de implementação:
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingService = cart.find((item) => item.id === service.id);
    if (existingService) {
      existingService.quantity = (existingService.quantity || 1) + 1;
    } else {
      service.quantity = 1;
      cart.push(service);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div>
      <h1>Serviços Disponíveis</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h2>{service.name}</h2>
            <p>R$ {service.price.toFixed(2)}</p>
            <Button onClick={() => handleAddToCart(service)}>Adicionar ao Carrinho</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceListPage;