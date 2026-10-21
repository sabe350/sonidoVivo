import React from 'react'
import { useState } from 'react';

function Signup() {

    const [username, setUsername] = useState("");
    const [userlsname, setUserLastname] = useState("");
    const [userpass, setPassword] = useState("");
    const [userpass2, setPassword2] = useState("");
    const [usermail, setMail] = useState("");
    const [userphone, setPhone] = useState("");
    const [mensaje, setMessage] = useState("");
    const [isChecked, setIsChecked] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsChecked(event.target.isChecked);

        if (username && userlsname && userpass && userpass2 && usermail && userphone != null && isChecked != false){
            window.location.href = "index.html";
        }else{
            setMessage("Debe rellenar todos los campos")
        }

        if (!usermail.includes("@")){
            setMessage("Correo invalido")
        }

        if (!username){
            setMessage("Debe rellenar todos los campos")
        }

        if (!userlsname){
            setMessage("Debe rellenar todos los campos")
        }

        if (!userpass){
            setMessage("Debe rellenar todos los campos")
        } else if (userpass != userpass2){
            setMessage("Contraseñas deben coincidir")
        }

        if (!userpass2){
            setMessage("Debe rellenar todos los campos")
        } else if (userpass != userpass2){
            setMessage("Contraseñas deben coincidir")
        } 

        if (!userphone.startsWith(9)){
            setMessage("Debe ingresar un numero valido")
        } else if (!userphone.length == 9){
           setMessage("Debe ingresar un numero valido") 
        } 

        if (isChecked == false){
            setMessage("Debe aceptar los terminos y condiciones") 
        } 

        

    }    

  return (
    <div>
        <div className=" text-center" id="signupContainer">
        <div className="signup ">
            <div className="col-md-5 signup-panel">
                <h1>Registrarse</h1>
                <form id="signupform" className="row" onSubmit={handleSubmit}>

                    <div className="col-md-6">
                        <label for="nombre" className="form-label">Nombre</label>
                        <input 
                            type="text" 
                            className="form-control text-center" 
                            id="nombre" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Ingrese su nombre"/>
                    </div>

                    <div className="col-md-6">
                        <label for="nombre" className="form-label">Apellido</label>
                        <input 
                            type="text" 
                            className="form-control text-center" 
                            id="apellido" 
                            value={userlsname}
                            onChange={(e) => setUserLastname(e.target.value)}
                            placeholder="Ingrese su apellido"/>
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

                    <div className="mb-3">
                        <label for="password2" className="form-label">
                            Repetir contraseña
                        </label>
                        <input 
                            type="password"
                            id="password2"
                            value={userpass2}
                            onChange={(e) => setPassword2(e.target.value)}
                            className="form-control text-center"
                            placeholder="Repita su Contraseña"/>
                    </div>

                    <div className="mb-3">
                        <label for="mail" className="form-label">
                            Correo electronico
                        </label>
                        <input 
                            type="text"
                            id="mail"
                            value={usermail}
                            onChange={(e) => setMail(e.target.value)}
                            className="form-control text-center"
                            placeholder="Ingrese su correro electronico"/>
                    </div>

                    <div className="mb-3">
                        <label for="phone" className="form-label">
                            Numero de telefono
                        </label>
                        <input 
                            type="tel"
                            id="phone"
                            value={userphone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control text-center"
                            placeholder="Ingrese su numero de telefono"/>
                    </div>

                    <div className="form-check">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            value={isChecked} 
                            onChange={(e) => setIsChecked(e.target.value)}
                            id="terminos"/>
                        <label className="form-check-label" for="terminos">He leido y acepto los terminos y condiciones</label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100">
                        Regitrarse
                    </button>
                    <div id="mensaje2" className="text-center mt-3">
                        {mensaje && <div class="alert alert-danger">{mensaje}</div>}
                    </div>
                </form>
            </div>
            </div>
            </div> 
    </div>
  )
}

export default Signup