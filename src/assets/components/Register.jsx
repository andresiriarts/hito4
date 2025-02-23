import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateForm = () => {
    let errors = {};

    if (!email.trim()) {
      errors.email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "El email no es válido.";
    }

    if (!password) {
      errors.password = "La contraseña es obligatoria.";
    } else if (password.length < 6) {
      errors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Debes confirmar la contraseña.";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Las contraseñas no coinciden.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      alert(Object.values(validationErrors).join("\n"));
    } else {
      alert("¡Registro exitoso!");
    }
  };

  return (
    <div className="containerRegister">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} className="registro">
        <div className="inputEmailRegister">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputpassRegister">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="inputConfPassRegister">
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
