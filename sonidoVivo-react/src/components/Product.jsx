import React, { useEffect, useState } from 'react'
import Related from './Related'
import ProductService from '../services/ProductService'
import { useCart } from '../context/CartContext';


export function Product1() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()
    
    useEffect(() => {
        ProductService.getProductsById('GA001').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, [])

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }


  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/yamahaf310.jpg" alt="..." width="300" height="300"/>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                         <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}} />
                            {products && products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Tapa de abeto, aros y fondo de meranti. Ideal para iniciantes.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
    
  );
};
export function Product12() {
        const [products, setProducts]=useState();
        const [cantidad, setCantidad] = useState(1)
        const {addToCart, openCart} = useCart()
    
    useEffect(() => {
        ProductService.getProductsById('GA002').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }


  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/fendercd60s.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Tapa de abeto macizo, brazo de caoba. Sonido cálido y proyectado.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product13() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()
    
    useEffect(() => {
        ProductService.getProductsById('GA003').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/yamahac40.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Nailon, tapa de abeto. Ideal para estudio y flamenco.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product14() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()
    
    useEffect(() => {
        ProductService.getProductsById('GA004').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/TakamineGN20CE.png" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Pickup integrado, afinador incorporado.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product15() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('GA005').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/yamahajr1.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Tamaño reducido para niños de 6 a 10 años.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product2() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('GE001').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/squireafinitystrat.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Cuerpo de álamo, mástil de arce, pastillas SSS.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product21() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('GE002').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/epiphonelespaulstd.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Cuerpo caoba, tapa arce, pastillas humbucker.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product22() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('GE003').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    


  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/epiphonesgstd.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Cuerpo caoba, mástil caoba, 2 humbuckers.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product23() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()
    
    useEffect(() => {
        ProductService.getProductsById('GE004').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    


  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/squireaffinitytele.jpg" alt="..." width="300" height="300"/>
                    </div>
                      <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Cuerpo álamo, clavijero vintage, 2 pastillas single.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product24() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('GE005').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    


  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/epiphonees335.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Semi-hueca, 2 humbuckers, ideal para jazz y blues.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product3() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('BA001').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/squireaffinitypj.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Pickup PJ, cuerpo álamo, mástil arce.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product31() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('BA002').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/fenderplayjazz.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Alder body, 2 Alnico V Jazz single-coil.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product32() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('BA003').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/yamahaapx700iii.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Electroacústico, afinador incorporado.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product4() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('BT001').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/pearlroadshadow.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Incluye stands, platillos y pedal de bombo.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product41() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('BT002').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/rolandtd02kv.jpg" alt="..." width="300" height="300"/>
                    </div>
                     <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Módulo TD-02, 8 pads de goma, pedal hi-hat.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product42() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('BT003').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/pearlste1450.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Acero, 14x5", 10 tensores.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product43() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('BT004').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/zildjian14hihat.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Latón B20, sonido brillante y claro.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product44() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('BT005').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/zildjian16crash.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Latón B20, ataque rápido.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product5() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('TC001').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/yamahapsre373.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">61 teclas sensibles al tacto, 622 voces.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product51() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('TC002').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/yamahap45.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">88 teclas pesadas, 10 voces, pedal sustain incluido.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}
export function Product52() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('TC003').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/arturiaminilabmkii.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">MIDI controller, 49 mini teclas.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product53() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('TC004').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/maudiohammer88.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">88 teclas martillo, sin sonidos propios.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product6() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('AM001').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/fenderfrontman15g.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">15W, distorsión incorporada, entrada auxiliar.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product61() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('AM002').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    


  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/marshallmg40gfx.jpeg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">40W, 4 canales, efectos digitales integrados.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product62() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('AM003').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    


  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/hartkehd100.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">100W, tweeter integrado, ecualizador de 4 bandas.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product63() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('AM004').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    


  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/fishmanloudboxmini.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">60W, 2 canales, reverb y chorus incorporados.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product7() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('MI001').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/shuresm58.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Estándar industria para voz en vivo.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product71() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('MI002').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/shuresm57.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Ideal para captura de instrumentos y amplificadores.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product72() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('MI003').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/audiotechat2020.png" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Cardioide, XLR, ideal para grabación en estudio.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product73() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('MI004').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/blueyeti.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">USB, 4 patrones polares, ideal para streaming y podcast.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product8() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('PE001').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/bossds1.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Clásico pedal de distorsión, 3 controles.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product81() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('PE002').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/bossrv6.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">8 modos de reverb, control de shimmer.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product82() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('PE003').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/bossme80.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Diseño tipo pedalboard, 8 efectos simultáneos.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product83() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('PE004').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/BOSSTU3.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Afinador cromático, indicador de tono.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product84() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('PE005').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/mxrcarboncopy.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Delay analógico cálido, tiempo 600ms.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product85() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('PE006').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/ibanezts9.jpeg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Tube Screamer clásico, sonido suave y orgánico.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product9() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('AC001').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/superslinky.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Juego 6 cuerdas, calibre ligero.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product91() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('AC002').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/earthwood.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Cuerdas de níquel enrollado, set 4 cuerdas.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product92() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('AC003').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/regularslinky.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="num" defaultValue={'1'} onChange='0' min= '1'  style="max-width: 3rem"/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Cuerdas de níquel enrollado, set 4 cuerdas.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product93() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('AC004').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/fender351.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Celulosa, grosor medio.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product94() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('AC005').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/dunloptrigger.png" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Capotraste de resorte, compatible 6 cuerdas.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product95() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('AC006').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/snarksn5.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  max={products?.srock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Afinador cromático de clip, pantalla giratoria.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product96() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('AC007').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/monsters100-3.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Cable trenzado, conectores dorados, 3 metros.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product97() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('AC008').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/monsters100-3.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Cable trenzado, conectores dorados, 6 metros.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product98() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('AC009').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/herculesgs302b.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Soporte plegable con enganche automático.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product99() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('AC010').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/herculeswah202.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="num" defaultValue={'1'} onChange='0' min= '1'  style="max-width: 3rem"/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Montaje a pared, enganche automático.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product10() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('ES001').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/focusritescarlet.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">1 entrada XLR+instrumento, 2 salidas, 24bit/192kHz.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product101() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()

    useEffect(() => {
        ProductService.getProductsById('ES002').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/audiotechathmx20x.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Circumaurales, respuesta 15Hz-20kHz.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product102() {

    const [products, setProducts]=useState();    
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()
    
    useEffect(() => {
        ProductService.getProductsById('ES003').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/audiotemx50x.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Referencia de industria, sonido neutro y detallado.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product103() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()
    
    useEffect(() => {
        ProductService.getProductsById('ES004').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/yamahahs5.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Altavoz activo, respuesta plana, ideal mezcla.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}

export function Product104() {

    const [products, setProducts]=useState();
    const [cantidad, setCantidad] = useState(1)
    const {addToCart, openCart} = useCart()    
    
    useEffect(() => {
        ProductService.getProductsById('ES005').then(response => {
            console.log('Respuesta API:', response.data);
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data);
        }).catch(error => {
            console.log('Error al obtener productos:', error);
        });
    }, []);

    function handleAdd(){
        if (!products) return
            addToCart(products.id, cantidad)
            openCart()
        
    }    

  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/sennheisermzp40.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">{products?.id}</div>
                        <h1 className="display-5 fw-bolder">{products?.nombre}</h1>
                        <h5>{products?.marca} {products?.modelo}</h5>
                        <div className="fs-6">
                            <span>Stock: {products?.stock}</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>${products?.precio}</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange={e => setCantidad(Math.max(1, Number(e.target.value) || 1))} min= '1'  max={products?.stock} style={{maxWidth: '64px'}}/>
                            {products?.stock > 0 ? (
                                <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button" onClick={handleAdd}>
                                Añadir al carrito
                                </button>
                            ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Doble malla, brazo flexible con clip.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
  )
}