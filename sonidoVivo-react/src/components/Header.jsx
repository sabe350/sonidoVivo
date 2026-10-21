import React from 'react'

function Header() {
  return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="index.html"><h1>Sonido Vivo</h1></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="TET"></button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="category1.html">Guitarras Acústicas</a></li>
                                    <li><a className="dropdown-item" href="category2.html">Guitarras Eléctricas</a></li>
                                    <li><a className="dropdown-item" href="category3.html">Bajos Eléctricos</a></li>
                                    <li><a className="dropdown-item" href="category4.html">Baterías</a></li>
                                    <li><a className="dropdown-item" href="category5.html">Teclados y Pianos</a></li>
                                    <li><a className="dropdown-item" href="category6.html">Amplificadores</a></li>
                                    <li><a className="dropdown-item" href="category7.html">Micrófonos</a></li>
                                    <li><a className="dropdown-item" href="category8.html">Pedales de Efectos</a></li>
                                    <li><a className="dropdown-item" href="category9.html">Accesorios</a></li>
                                    <li><a className="dropdown-item" href="category10.html">Estudio y Grabación</a></li>
                                </ul>
                            </li> 
                            <li className="nav-item"><a className="nav-link active" aria-current="page" href="about.html">Acerca de</a></li>
                        </ul>
                        <div className="dropdown">
                            <button className="btn btn-secondary btn-outline-light bg-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false" type="submit">
                                <i className="bi bi-person-circle"></i>
                                </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="login.html">Iniciar Sesion</a></li>
                                <li><a className="dropdown-item" href="signup.html">Registrarse</a></li>                                
                            </ul>
                        </div>
                        <form className="d-flex">
                            <a className="btn btn-outline-light mt-auto bg-primary" type="button" aria-expanded="false" type="submit" href="cart.html">
                                <i className="bi-cart-fill me-1"></i>
                                Carrito
                                <span className="badge ms-1 rounded-pill">0</span>
                            </a>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
  )
}

export default Header