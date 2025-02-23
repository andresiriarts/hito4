import { useEffect, useState } from "react";
import CardPizza from './CardPizza';
import Header from './Header';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('No se pudo obtener la información de las pizzas');
        }
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  if (loading) {
    return <div>Cargando pizzas...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <div className="pizza-container">
        {pizzas.map(pizza => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </>
  );
};

export default Home;