import React from 'react'
import { useCart } from "../context/CartContext";
import { CartItem } from "./CartItem";
import ProductService from "../services/ProductService";
import { useEffect, useState } from "react";
import { CartTable } from './CartTable';
import { Button } from 'react-bootstrap';
import { pagoWePay } from '../services/WebpayService';



function Cart() {
    const {closeCart, cartItems} = useCart()
    const [precio, setPrecio] = useState<Record<string, number>>({})

    useEffect(() => {
            if (cartItems.length === 0){
                setPrecio({})
                return
            }
            Promise.all(
                cartItems.map(item =>
                    ProductService.getProductsById(item.id).then(response =>{
                        const data = Array.isArray(response.data) ? response.data[0] : response.data
                        return [item.id, Number(data.precio)] as const
                    })
                )
            )
                .then(entries => setPrecio(Object.fromEntries(entries)))
                .catch(error => console.log("Error al obtener precios", error))
        }, [cartItems])
    
        const total = cartItems.reduce(
            (acc, item) => acc + (precio[item.id] ?? 0) * item.quantity, 0
        )

        const Impuesto = total * 0.19

  return (
    <div className="main-content">
        <div className="container py-5">
            <div className="row gy-5">
                <div className="col-lg-8">
                    <div className="card overflow overflow-scroll" style={{ maxHeight: "550px" }}>
                    <table className="table table-bordered">
                        <thead className="sticky-top bg-white">
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <CartTable key={item.id} {...item}/>
                            ))}
                        </tbody>
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
                                <span className="text-body-secondary">${total.toLocaleString("es-CL")}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <span className="form-label fw-bold">Descuento</span>
                                <span className="text-body-secondary">$</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <span className="form-label fw-bold">Impuesto</span>
                                <span className="text-body-secondary">${Impuesto.toLocaleString("es-CL")}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <span className="form-label fw-bold">Envio</span>
                                <span className="text-body-secondary">$</span>
                            </li>
                        </div>
                        <div className="card-footer">
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <span className="form-label fw-bold">Total</span>
                                <span className="text-body-secondary">${(total + Impuesto).toLocaleString("es-CL")}</span>
                            </li>
                                <div className="text-center">
                                    <Button 
                                    className="btn btn-outline-light mt-auto bg-primary w-100"
                                    onClick={() => pagoWePay(
                                        cartItems.map(item => ({ productId: item.id, cantidad: item.quantity}))
                                    )}
                                    >Pagar</Button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart