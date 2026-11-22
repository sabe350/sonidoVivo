import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import ProductService from "../services/ProductService";
import { CartItem } from "./CartItem";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

type CartProps = {
    isOpen: boolean
}

export function Cart({ isOpen }: CartProps){
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


    return(
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito</Offcanvas.Title>
            </Offcanvas.Header>
            <hr/>
            <Offcanvas.Body>
                <Stack gap={3} className="overflow overflow-scroll"
                style={{ maxHeight: "550px"}}>
                    {cartItems.map(item => (
                        <><CartItem key={item.id} {...item} /><hr /></>
                    ))}
                </Stack>
                <div className= "border-topp-3 bg-body">
                <div>
                    <span>Total: </span>
                    <span>${total.toLocaleString("es-CL")}</span>
                </div>
                <div>
                <Button className="btn btn-outline-light mt-auto bg-primary" type="button" aria-expanded="false" href="cart.html">Comprar</Button>
                </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}