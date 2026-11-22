import React from 'react'
import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import UsuarioService from '../services/UsuarioService';

function Signup() {

    const [username, setUsername] = useState("");
    const [userlsname, setUserLastname] = useState("");
    const [userpass, setPassword] = useState("");
    const [userpass2, setPassword2] = useState("");
    const [usermail, setMail] = useState("");
    const [userphone, setPhone] = useState("");
    const [useradress, setAdress] = useState("");
    const [usercity, setCity] = useState("");
    const [userregion, setRegion] = useState("");
    const [mensaje, setMessage] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const regiones = [
        "Región de Arica y Parinacota",
        "Región de Tarapacá",
        "Región de Antofagasta",
        "Región de Atacama",
        "Región de Coquimbo",
        "Región de Valparaíso",
        "Región Metropolitana de Santiago",
        "Región de O'Higgins",
        "Región del Maule",
        "Región de Ñuble",
        "Región del Biobío",
        "Región de La Araucanía",
        "Región de Los Ríos",
        "Región de Los Lagos",
        "Región de Aysén",
        "Región de Magallanes"
    ];


const handleSubmit = async (event) => {
  event.preventDefault();

  if (!username || !userlsname || !userpass || !userpass2 || !usermail || !userphone || !useradress || !usercity || !userregion) {
    setMessage("Debe rellenar todos los campos");
    return;
  }
  if (!usermail.includes("@")) {
    setMessage("Correo invalido");
    return;
  }
  if (userpass !== userpass2) {
    setMessage("Contraseñas deben coincidir");
    return;
  }
  if (!/^9\d{8}$/.test(userphone)) {
    setMessage("Debe ingresar un numero valido");
    return;
  }
  if (!isChecked) {
    setMessage("Debe aceptar los terminos y condiciones");
    return;
  }

  try {
    await UsuarioService.createUser({
      nombre: username,
      apellido: userlsname,
      password: userpass,
      correo: usermail,
      telefono: Number(userphone),
      direccion: useradress,
      ciudad: usercity,
      region: userregion
    });
    window.location.href = "login.html";
  } catch (error) {
    console.error(error);
    setMessage("No se pudo crear el usuario");
  }
};   

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
                            maxLength={9}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control text-center"
                            placeholder="Ingrese su numero de telefono"/>
                    </div>

                    <div className='row'>
                        <div className='col-md-6 mb-3'>
                            <div className='dropdown'>
                                <label for="region" className="form-label d-block">
                                    Region
                                </label>
                                <button 
                                    type="button"
                                    className='btn btn-secondary dropdown-toggle bg-primary' 
                                    data-bs-toggle="dropdown" 
                                    aria-expanded="false">
                                    {userregion || "Seleccione su region"}
                                </button>
                                <ul className='dropdown-menu overflow-scroll w-100'
                                style={{ maxHeight: "150px" }}>
                                    {regiones.map((region) =>(
                                        <li key={region}>
                                            <button className={'dropdown-item ${userregion === region ? "active : ""}'}
                                            onClick={() => setRegion(region)}
                                            type="button">
                                                {region}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                            <div className="col-md-6 mb-3">
                            <label for="adress" className="form-label">
                                Ciudad
                            </label>
                            <input 
                                type="text"
                                id="city"
                                value={usercity}
                                onChange={(e) => setCity(e.target.value)}
                                className="form-control text-center"
                                placeholder="Ingrese su ciudad"/>
                        </div>

                        <div className="mb-3">
                            <label for="adress" className="form-label">
                                Direccion
                            </label>
                            <input 
                                type="text"
                                id="adress"
                                value={useradress}
                                onChange={(e) => setAdress(e.target.value)}
                                className="form-control text-center"
                                placeholder="Ingrese su direccion"/>
                        </div>
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