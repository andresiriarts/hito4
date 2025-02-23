import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!email.trim() || !password) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    alert("¡Inicio de sesión exitoso!");
  };

  return (
    <div className="containerLogin">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="inputEmailLogin">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputPassLogin">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
