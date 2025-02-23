import { pizzas } from "./pizzas";
import Header from './Header'
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <>
      <Header />
      <div className="pizza-container">
        {pizzas.map((pizza) => (
          <CardPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </>
  );
};

export default Home;
