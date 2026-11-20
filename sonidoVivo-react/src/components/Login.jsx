import React from 'react'
import { useState } from 'react';
import AuthService from '../services/AuthService';
import { useAuth } from '../context/AuthContext';


function Login() {

    const [usermail, setMail] = useState("");
    const [userpass, setPassword] = useState("");
    const [mensaje, setMessage] = useState("");
    const { login } = useAuth()

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!usermail || !userpass){
            setMessage("Debe rellenar todos los campos")
            return
        }

        if (!usermail.includes("@")){
            setMessage("Correo invalido")
            return
        }
         
        try {
            const response = await AuthService.login({
                correo: usermail,
                password: userpass
        });
            login(response.data.token)
            window.location.href = "index.html";
        }catch (error) {
        console.error(error);
        if (error.response?.status === 401){
            setMessage("Credenciales invalidas")
        }else{
        setMessage("No se pudo iniciar sesion");
        }
    }

};

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