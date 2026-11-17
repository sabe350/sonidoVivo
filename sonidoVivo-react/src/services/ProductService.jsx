import axios from "axios";

const BASE_URL='http://localhost:8080/api/products';

class ProductService{
    getAllProducts(){
        return axios.get(BASE_URL);
    }

    getProductsById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }

    createProducts(products){
        return axios.post(BASE_URL, products);
    }

    updateProducts(id, products){
        return axios.put(`${BASE_URL}/${id}`, products);
    }

    deleteProducts(id){
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new ProductService();