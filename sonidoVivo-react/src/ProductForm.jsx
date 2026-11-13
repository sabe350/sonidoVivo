import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductService from "./components/ProductService";

const ProductForm = () => {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            ProductService.getProductsById(id).then(response => {
                setNombre(response.data.nombre);
                setPrecio(response.data.precio);
                setStock(response.data.setStock);
            });
        }
    },[id]);

    const saveOrUpdateProduct = (e) =>{
        e.preventDefault();
        const producto = { nombre, precio, stock };

        if (id){
            ProductService.updateProducts(id, producto).then(() => {
                navigate("/api");
            });
        }else {
            ProductService.createProducts(producto).then(() => {
                navigate("/api");
            });
        };
    }
}