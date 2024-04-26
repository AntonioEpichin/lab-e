"use client";

import { useState, useEffect } from 'react';
import Button  from '@/components/ui/button';

const ServiceListPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // TODO: Fetch the services from the API or local JSON and update the state
    // For now, we'll use a static JSON file included in the public folder.
    fetch('/services.json')
      .then((response) => response.json())
      .then(setServices)
      .catch((error) => console.error('Failed to load services:', error));
  }, []);

  const handleAddToCart = (service) => {
    // TODO: Implement cart functionality
    console.log('Add to cart:', service);
  };

  return (
    <div>
      <h1>Available Services</h1>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <p>R$ {service.price.toFixed(2)}</p>
            <Button onClick={() => handleAddToCart(service)}>Add to Cart</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceListPage;
