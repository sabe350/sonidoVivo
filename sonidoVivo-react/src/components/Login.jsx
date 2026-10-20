import React from 'react'

function Login() {
  return (
    <div>
        <div class="text-center" id="loginContainer">
        <div class="login ">
            <div class="login-panel">
                <h1>Iniciar Sesion</h1>
                <form id="loginform">

                    <div class="mb-3">
                        <label for="mail" class="form-label">Correo electronico</label>
                        <input type="text" class="form-control text-center" id="mail" placeholder="Ingrese su correo electronico"/>
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

                    <button
                        type="submit"
                        class="btn btn-primary w-100">
                        Iniciar Sesion
                    </button>
                    <div id="mensaje" class="text-center mt-3"></div>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login