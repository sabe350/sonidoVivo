import React from 'react'


function Cart() {
  return (
    <div className="main-content">
        <div className="container py-5">
            <div className="row gy-5">
                <div className="col-lg-8">
                    <div className="card">
                    <table className="table table-bordered">
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total</th>
                        </tr>
                    </table>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card">
                        <div className="card-header">
                            <h5>Resumen de compra</h5>
                        </div>
                        <div className="card-body align-items-center">
                            <label>Cupon de descuento</label>
                            <div className="input-group mb-3">
                                <button className="btn btn-outline-light bg-primary" type="button">Canjear</button>
                                <input type="text" className="form-control" placeholder="Ingrese cupon de descuento" aria-label="Cupon"/>
                            </div>
                            <hr/>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <span className="form-label fw-bold">Subtotal</span>
                                <span className="text-body-secondary">$</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <span className="form-label fw-bold">Descuento</span>
                                <span className="text-body-secondary">$</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <span className="form-label fw-bold">Impuesto</span>
                                <span className="text-body-secondary">$</span>
                            </li>
                        </div>
                        <div className="card-footer">
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <span className="form-label fw-bold">Total</span>
                                <span className="text-body-secondary">$</span>
                            </li>
                                <div className="text-center"><a className="btn btn-outline-light mt-auto bg-primary w-100" href="#">Pagar</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart