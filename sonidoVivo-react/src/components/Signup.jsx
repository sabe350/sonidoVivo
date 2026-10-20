import React from 'react'

function Signup() {
  return (
    <div>
            <div class=" text-center" id="signupContainer">
        <div class="signup ">
            <div class="col-md-5 signup-panel">
                <h1>Registrarse</h1>
                <form id="signupform" class="row">

                    <div class="col-md-6">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control text-center" id="nombre" placeholder="Ingrese su nombre"/>
                    </div>

                    <div class="col-md-6">
                        <label for="nombre" class="form-label">Apellido</label>
                        <input type="text" class="form-control text-center" id="apellido" placeholder="Ingrese su apellido"/>
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label">
                            Contraseña
                        </label>
                        <input 
                            type="password"
                            id="password"
                            class="form-control text-center"
                            placeholder="Ingrese su Contraseña"/>
                    </div>

                    <div class="mb-3">
                        <label for="password2" class="form-label">
                            Repetir contraseña
                        </label>
                        <input 
                            type="password"
                            id="password2"
                            class="form-control text-center"
                            placeholder="Repita su Contraseña"/>
                    </div>

                    <div class="mb-3">
                        <label for="mail" class="form-label">
                            Correo electronico
                        </label>
                        <input 
                            type="text"
                            id="mail"
                            class="form-control text-center"
                            placeholder="Ingrese su correro electronico"/>
                    </div>

                    <div class="mb-3">
                        <label for="phone" class="form-label">
                            Numero de telefono
                        </label>
                        <input 
                            type="tel"
                            id="phone"
                            class="form-control text-center"
                            placeholder="Ingrese su numero de telefono"/>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="false" id="terminos"/>
                        <label class="form-check-label" for="terminos">He leido y acepto los terminos y condiciones</label>
                    </div>

                    <button
                        type="submit"
                        class="btn btn-primary w-100">
                        Regitrarse
                    </button>
                    <div id="mensaje2" class="text-center mt-3"></div>
                </form>
            </div>
            </div>
            </div> 
    </div>
  )
}

export default Signup