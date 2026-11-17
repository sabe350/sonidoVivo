import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductService from "../services/ProductService.jsx";

const ProductForm = () => {
    const { id: idParam } = useParams();
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (idParam) {
            ProductService.getProductsById(idParam).then(response => {
                setId(response.data.id);
                setNombre(response.data.nombre);
                setMarca(response.data.marca);  
                setModelo(response.data.modelo);
                setPrecio(response.data.precio);
                setStock(response.data.stock);
            });
        }
    },[idParam]);

    const saveOrUpdateProduct = (e) =>{
        e.preventDefault();
        const producto = { id, nombre, marca, modelo, precio, stock };

        const request = idParam
            ? ProductService.updateProducts(idParam, producto)
            : ProductService.createProducts(producto);
        request.then(() => navigate("/api/"));
    };

    return(
        <div>
            <h2>{idParam ? 'Editar Producto' : 'Añadir Producto'}</h2>
            <form onSubmit={saveOrUpdateProduct}>
                <div>
                    <label>ID:</label>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        disabled={!!idParam}
                        required
                    />
                </div>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Marca:</label>
                    <input
                        type="text"
                        value={marca}
                        onChange={(e) => setMarca(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Modelo:</label>
                    <input
                        type="text"
                        value={modelo}
                        onChange={(e) => setModelo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Precio:</label>
                    <input
                        type="number"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Stock:</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{'Guardar' }</button>
            </form>
        </div>
    );
};

export default ProductForm;