import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ID de la pizza (por ahora es fijo, en el siguiente hito será dinámico)
  const pizzaId = 'p001';

  useEffect(() => {
    // Función para obtener los datos de la pizza desde la API
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
        if (!response.ok) {
          throw new Error('No se pudo obtener la información de la pizza');
        }
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [pizzaId]);

  if (loading) {
    return <div>Cargando información de la pizza...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!pizza) {
    return <div>No se encontró la pizza.</div>;
  }

  return (
    <div className="pizza-detail">
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} className="pizza-image" />
      <p><strong>Descripción:</strong> {pizza.desc}</p>
      <hr className="separacion" />
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
      <hr className="separacion" />
      <p><strong>Precio:</strong> ${pizza.price}</p>
      <button disabled>Añadir al carrito</button>
    </div>
  );
};

export default Pizza;