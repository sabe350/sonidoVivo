import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { CartItem } from "./CartItem";

type CartProps = {
    isOpen: boolean
}

export function Cart({ isOpen }: CartProps){
    const {closeCart, cartItems} = useCart()
    
    return(
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrito</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item}/>
                    ))}
                </Stack>
                <Button className="btn btn-outline-light mt-auto bg-primary" type="button" aria-expanded="false" href="#">Comprar</Button>
            </Offcanvas.Body>
        </Offcanvas>
    )
}