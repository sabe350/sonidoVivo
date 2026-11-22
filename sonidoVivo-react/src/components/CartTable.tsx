import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import ProductService from "../services/ProductService";
import { getProductImgage } from "../data/productImages";

type CartTableProps = {
    id: string
    quantity: number
}

type Product = {
    id: string
    nombre: string
    precio: number
}

export function CartTable({id, quantity}: CartTableProps){
    const [item, setItem] = useState<Product | null>(null)
    const { removeFromCart } = useCart()

    useEffect(() => {
        ProductService.getProductsById(id)
            .then(response => {
                const data = Array.isArray(response.data) ? response.data[0] : response.data
                setItem(data)
            })
            .catch(error => console.log("Error al obtener producto", id, error));
            
    }, [id])

    if (item === null) return null

    return (
        <tr>
            <td>
                <div className="d-flex align-items-center gap-2">
                    <img
                        src={getProductImgage(item.id)}
                        alt={item.nombre}
                        style={{width: "100px", height: "60px", objectFit: "contain"}}
                    />
                    <div>
                        <div>{item.nombre}</div>
                        <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                            Qutar
                        </Button>
                    </div>
                </div>
            </td>
            <td className="align-middle">${item.precio.toLocaleString("es-CL")}</td>
            <td className="align-middle">{quantity}</td>
            <td className="align-middle">${(item.precio * quantity).toLocaleString("es-CL")}</td>
        </tr>
    )
}