import { useState } from "react";
import "./Register.css"; 

function Register() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, apellido, email, telefono, password, confirmPw });
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h1 className="form-title">¡Registrate!</h1>

        <label>
          <span>Nombre</span>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
            required
          />
        </label>

        <label>
          <span>Apellido</span>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            placeholder="Tu apellido"
            required
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tucorreo@ejemplo.com"
            required
          />
        </label>

        <label>
          <span>Teléfono</span>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Tu número"
          />
        </label>

        <label>
          <span>Contraseña</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mínimo 6 caracteres"
            required
          />
        </label>

        <label>
          <span>Confirmar Contraseña</span>
          <input
            type="password"
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
            placeholder="Repetir la contraseña"
            required
          />
        </label>

        <button type="submit" className="submit-button">
          Registrarse
        </button>

      </form>
    </div>
  );
}

export default Register;
