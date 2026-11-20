import React, { use, useEffect, useState } from 'react'
import ProductService from '../services/ProductService'
import { useParams } from 'react-router-dom';
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



export function Category1() {

  return (

    <div>
        <section className="py-5">
            <h1 className="text-center">Guitarras Acústicas</h1>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    <Prod id={'GA001'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/yamahaf310.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage1.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                         
                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'GA002'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/fendercd60s.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage2.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    
                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
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
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'GA004'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/TakamineGN20CE.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage4.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">{products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'GA005'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/yamahajr1.webp" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage5.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    </div>
  )
}


export function Category2() {
  return (
    <div>
        <section className="py-5">
            <h1 className="text-center">Guitarras Eléctricas</h1>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    <Prod id={'GE001'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/squireafinitystrat.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage21.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'GE002'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/epiphonelespaulstd.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage22.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'GE003'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/epiphonesgstd.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage23.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'GE004'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/squireaffinitytele.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage24.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                              
                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'GE004'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/epiphonees335.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage25.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    </div>
  )
}

export function Category3(){
    return (
    <div>
        <section className="py-5">
            <h1 className="text-center">Bajos Eléctricos</h1>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    <Prod id={'BA001'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/squireaffinitypj.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage31.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
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
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'BA003'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/yamahaapx700iii.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage33.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    </div>
    )
}

export function Category4(){
    return (
    <div>
        <section className="py-5">
            <h1 className="text-center">Baterías</h1>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    <Prod id={'BT001'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/pearlroadshadow.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage41.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'BT002'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/rolandtd02kv.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage42.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'BT003'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/pearlste1450.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage43.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
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
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'BT005'}>{products => (
                   <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/zildjian16crash.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage45.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    </div>
    )
}

export function Category5(){
    return (
    <div>
        <section className="py-5">
            <h1 className="text-center">Teclados y Pianos</h1>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    <Prod id={'TC001'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/yamahapsre373.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage51.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'TC002'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/yamahap45.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage52.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
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
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'TC004'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/maudiohammer88.webp" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage54.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    </div>
    )
}

export function Category6(){
    return (
    <div>
        <section className="py-5">
            <h1 className="text-center">Amplificadores</h1>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    <Prod id={'AM001'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/fenderfrontman15g.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage61.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'AM002'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/marshallmg40gfx.jpeg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage62.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
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
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'AM004'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/fishmanloudboxmini.webp" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage64.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    </div>
    )
}

export function Category7(){
    return (
    <div>
        <section className="py-5">
            <h1 className="text-center">Micrófonos</h1>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    <Prod id={'MI001'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/shuresm58.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage71.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio} 
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'MI002'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/shuresm57.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage72.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio} 
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'MI003'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/audiotechat2020.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage73.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio} 
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'MI004'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/blueyeti.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage74.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio} 
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    </div>
    )
}

export function Category8(){
    return (
    <div>
        <section className="py-5">
            <h1 className="text-center">Pedales de Efectos</h1>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    <Prod id={'PE001'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/bossds1.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage81.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio} 
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'PE002'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/bossrv6.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage82.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio} 
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'PE003'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/bossme80.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage83.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio} 
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'PE004'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/BOSSTU3.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage84.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio} 
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'PE005'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/mxrcarboncopy.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage85.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
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
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    </div>
    )
}

export function Category9(){
    return (
    <div>
        <section className="py-5">
            <h1 className="text-center">Accesorios</h1>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    <Prod id={'AC001'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/superslinky.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage91.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'AC002'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/earthwood.webp" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage92.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'AC003'}>{products => (
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/regularslinky.webp" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage93.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'AC004'}>{products => (        
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/fender351.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage94.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'AC005'}>{products => ( 
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/dunloptrigger.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage95.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'AC006'}>{products => ( 
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/snarksn5.webp" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage96.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'AC007'}>{products => ( 
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/monsters100-3.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage97.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'AC008'}>{products => ( 
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/monsters100-3.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage98.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'AC009'}>{products => ( 
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/herculesgs302b.webp" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage99.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'AC010'}>{products => ( 
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/herculeswah202.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage910.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
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

export function Category10(){
    return (
    <div>
        <section className="py-5">
            <h1 className="text-center">Estudio y Grabación</h1>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    <Prod id={'ES001'}>{products => ( 
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/focusritescarlet.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage101.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'ES002'}>{products => ( 
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/audiotechathmx20x.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage102.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>

                    <Prod id={'ES003'}>{products => ( 
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/audiotemx50x.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage103.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'ES004'}>{products => ( 
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/yamahahs5.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage104.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    
                                    {products?.stock > 0 ? (
                                        <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <Prod id={'ES005'}>{products => ( 
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/sennheisermzp40.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage105.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>{products?.nombre}</a></h4>
                                    <h5>{products?.marca} {products?.modelo}</h5>
                                    ${products?.precio}
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">                                    {products?.stock > 0 ? (
                                            <Button className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</Button>
                                    ) : <a className="btn btn-secondary bg-dark" disabled="">No disponible</a>}</div>
                            </div>
                        </div>
                    </div>
                    )}</Prod>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/agotado.png" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bold">Producto no disponible</h5>
                                    $0
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-secondary bg-dark" disabled="">No disponible</a></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
    )
}