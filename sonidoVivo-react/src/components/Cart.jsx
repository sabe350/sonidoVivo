import React from 'react'


function Cart() {
  return (
    <div>
        <div class="container py-5">
            <div class="row gy-5">
                <div class="col-lg-8">
                    <div class="card">
                    <table class="table table-bordered">
                        <thread>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total</th>
                        </thread>
                    </table>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h5>Resumen de compra</h5>
                        </div>
                        <div class="card-body align-items-center">
                            <label>Cupon de descuento</label>
                            <div class="input-group mb-3">
                                <button class="btn btn-outline-light bg-primary" type="button">Canjear</button>
                                <input type="text" class="form-control" placeholder="Ingrese cupon de descuento" aria-label="Cupon"/>
                            </div>
                            <hr/>
                            <li class="list-group-item d-flex justify-content-between lh-sm">
                                <span class="form-label fw-bold">Subtotal</span>
                                <span class="text-body-secondary">$</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-sm">
                                <span class="form-label fw-bold">Descuento</span>
                                <span class="text-body-secondary">$</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-sm">
                                <span class="form-label fw-bold">Impuesto</span>
                                <span class="text-body-secondary">$</span>
                            </li>
                        </div>
                        <div class="card-footer">
                            <li class="list-group-item d-flex justify-content-between lh-sm">
                                <span class="form-label fw-bold">Total</span>
                                <span class="text-body-secondary">$</span>
                            </li>
                                <div class="text-center"><a class="btn btn-outline-light mt-auto bg-primary w-100" href="#">Pagar</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart