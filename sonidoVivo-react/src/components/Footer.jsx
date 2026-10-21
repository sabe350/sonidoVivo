import React from 'react'

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-center align-items-center py-5  border-top bg-light">
        <p className="text-center text-body-secondary">Copyright © Sonido Vivo 2026</p>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a className="text-body-secondary bi bi-instagram" href="!#"></a>
                </li>
                <li className="ms-3">
                    <a className="text-body-secondary bi bi-whatsapp" href="!#"></a>
                </li>
            </ul>
    </footer>
  )
}

export default Footer