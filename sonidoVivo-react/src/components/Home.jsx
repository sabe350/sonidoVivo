import React, { use, useEffect, useState } from 'react'
import ProductService from '../services/ProductService'
import { Button } from 'react-bootstrap';

function Prod({id, children}){
    const [products, setProducts] = useState(null);

    useEffect(() => {
        ProductService.getProductsById(id).then(response => {
            const data = Array.isArray(response.data) ? response.data[0] : response.data;
            setProducts(data)
        }).catch(error => console.log('Error al obtener producto', id, error));
    }, [id]);

    return children(products);
}

function Home() {
  return (
    <div>  
        <section className="py-5">
            <h1 className="text-center">Destacado</h1>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    <Prod id={'GE005'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src='./assets/img/products/epiphonees335.jpg' alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage25.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                                </div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'GA003'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/yamahac40.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage3.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                                </div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'BA002'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/fenderplayjazz.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage32.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                                </div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'BT004'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/zildjian14hihat.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage44.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                                </div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'TC003'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/arturiaminilabmkii.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage53.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                                </div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'AM003'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/hartkehd100.webp" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage63.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                                    </div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'MI004'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={'/assets/img/products/blueyeti.jpg'} alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage74.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                                </div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'PE006'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/ibanezts9.jpeg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage86.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}
                                </div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Home