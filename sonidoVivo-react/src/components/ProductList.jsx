import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import ProductService from "../services/ProductService";

const ProductList = () =>{
    const [products, setProducts]=useState([]);

        const fetchProducts = () =>{
        ProductService.getAllProducts('').then(response => {
            setProducts(response.data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    };

    useEffect(() => {
        fetchProducts();
    },[]);

    const deleteProducts = (id) =>{
        ProductService.deleteProducts(id).then(() => {
            fetchProducts();
        }).catch(error => {
            console.log('Error al elminar producto: ', error)
        });
    };

    return(
        <div>
            <h2>Listado de productos</h2>
            <Link to="/api/add">Agregar producto nuevo</Link>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(products => (
                        <tr key={products.id}>
                            <td>{products.nombre}</td>
                            <td>{products.marca}</td>
                            <td>{products.modelo}</td>
                            <td>{products.precio}</td>
                            <td>{products.stock}</td>
                            <td>
                                <Link to={`edit/${products.id}`}>Editar</Link>
                                <button onClick={() => deleteProducts(products.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;