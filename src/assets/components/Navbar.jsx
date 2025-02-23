const Navbar = () => {
  const total = 25000;
  const token = true;

  return (
    <div className="menu">
      <ul className="cont-menu">
      Pizzería Mamma Mia!
        <li className="list">🍕 Home</li>
        
        {token ? (
          <>
            <li className="list">🔓 Profile</li>
            <li className="list">🔒 Logout</li>
          </>
        ) : (
          <>
            <li className="list">🔐 Login</li>
            <li className="list">🔐 Register</li>
          </>
        )}
      </ul>
      <p className="total">🛒 Total: ${total.toLocaleString("es-CL")}</p>
    </div>
  );
};

export default Navbar;
