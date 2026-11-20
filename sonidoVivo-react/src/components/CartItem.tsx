import Stack from "react-bootstrap/esm/Stack"
import { useState, useEffect } from "react"
import { useCart } from "../context/CartContext"
import ProductService from "../services/ProductService"
import { Button } from "react-bootstrap"
import { getProductImgage } from "../data/productImages"


type CartItemProps = {
    id:  string
    quantity: number
}

type Product = {
    id: string
    nombre: string
    precio: number
}


export function CartItem({id, quantity}: CartItemProps){
    const [item, setItem]=useState<Product | null>(null);
    const {removeFromCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById(id).then(response => {
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setItem(data)
        }).catch(error => console.log('Error al obtener producto', id, error));
    }, [id]);
    
    if (item === null) return null

    return(
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={getProductImgage(item.id)} alt={item.nombre} style={{ width: "125px", height: "75px", objectFit: "contain" }}/>
            <div className="me-auto">
                <div>
                    {item?.nombre} {quantity > 1 && <span className="text-muted" style={{ fontSize: ".65rem"}}>x{quantity}</span>}
                </div>
                <div className="text-muted" style={{fontSize: ".75rem"}}>
                  {item?.precio}  
                </div>
                <div className="ms-auto fw-bold fs-5">
                    Total:  
                    {item?.precio * quantity} 
                </div>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item?.id)}>Quitar</Button>
            </div>
        </Stack>
    )
}