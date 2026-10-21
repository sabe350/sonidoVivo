import React from 'react'
import { useState } from 'react';


function Login() {

    const TEMP_MAIL = "admin@admin.com";
    const TEMP_PASSWORD = "1234";

    const [usermail, setMail] = useState("");
    const [userpass, setPassword] = useState("");
    const [mensaje, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!usermail){
            setMessage("Debe rellenar todos los campos")
        }else if (!usermail.includes("@")){
            setMessage("Correo invalido")
        }else if (usermail == TEMP_MAIL && userpass == TEMP_PASSWORD) {
            window.location.href = "index.html";
        } else {
            setMessage("Credenciales invalidas")
        }

        if (!userpass){
            setMessage("Debe rellenar todos los campos")
        }else if (usermail == TEMP_MAIL && userpass == TEMP_PASSWORD) {
            window.location.href = "index.html";
        } else {
            setMessage("Credenciales invalidas")
        }
          
    }

  return (
    <div>
        <div className="text-center" id="loginContainer">
        <div className="login ">
            <div className="login-panel">
                <h1>Iniciar Sesion</h1>
                <form id="loginform" onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label for="mail" className="form-label">Correo electronico</label>
                        <input 
                            type="text" 
                            className="form-control 
                            text-center" 
                            id="mail" 
                            value={usermail}
                            onChange={(e) => setMail(e.target.value)}
                            placeholder="Ingrese su correo electronico"/>
                    </div>

                    <div className="mb-3">
                        <label for="password" className="form-label">
                            Contraseña
                        </label>
                        <input 
                            type="password"
                            id="password"
                            value={userpass}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control text-center"
                            placeholder="Ingrese su Contraseña"/>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100">
                        Iniciar Sesion
                    </button>
                    <div id="mensaje" className="text-center mt-3">
                        {mensaje && <div class="alert alert-danger">{mensaje}</div>}
                    </div>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login