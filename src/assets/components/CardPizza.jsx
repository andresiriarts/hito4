const CardPizza = ({ pizza }) => {
  return (
    <div className="card">
      <img src={pizza.img} alt={pizza.name} className="pizza-image" />
      <h2 className="title">{pizza.name}</h2>
      <hr className="separacion" />
      <h2>Descripción</h2>
      <p>{pizza.desc}</p>
      <hr className="separacion" />
      <h2>Ingredientes</h2>
      <ul className="listIngredients">
        {pizza.ingredients.map((ingredient) => (
          <li className="ingredient" key={`${pizza.id}-${ingredient}`}>
            {ingredient}
          </li>
        ))}
      </ul>
      <hr className="separacion" />
      <h2 className="price">Precio: ${pizza.price.toLocaleString("es-CL")}</h2>
      <section className="botones">
        <button className="vermas">Ver Más 👀</button>
        <button className="añadir">Añadir 🛒</button>
      </section>
    </div>
  );
};

export default CardPizza;
