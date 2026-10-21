import React from 'react'

function Home() {
  return (
    <div>  
        <section className="py-5">
            <h1 className="text-center">Destacado</h1>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src='./assets/img/products/epiphonees335.jpg' alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage25.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>Guitarra Eléctrica Semi-hollow</a></h4>
                                    <h5>Epiphone ES-335</h5>
                                    $549,990
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/yamahac40.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage3.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>Guitarra Acústica Clásica 4/4</a></h4>
                                    <h5>Yamaha C40</h5>
                                    $89,990
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/fenderplayjazz.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage32.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>Bajo Eléctrico Jazz Bass</a></h4>
                                    <h5>Fender Player Jazz</h5>
                                    $699,990
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/zildjian14hihat.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage44.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>Platillo Hi-Hat 14"</a></h4>
                                    <h5>Zildjian A Series</h5>
                                    $149,990
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/arturiaminilabmkii.jpg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage53.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>Sintetizador 49 teclas</a></h4>
                                    <h5>Arturia MiniLab MKII</h5>
                                    $129,990
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/hartkehd100.webp" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage63.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>Amplificador Bajo 100W</a></h4>
                                    <h5>Hartke HD100</h5>
                                    $299,990
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={'/assets/img/products/blueyeti.jpg'} alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage74.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>Micrófono USB de Condensador</a></h4>
                                    <h5>Blue Yeti</h5>
                                    $299,990
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</a></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src="assets/img/products/ibanezts9.jpeg" alt="..." width="450" height="300"/>
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h4><a href="prodpage86.html" className="stretched-link text-black" style={{textDecoration: 'none'}}>Pedal Overdrive</a></h4>
                                    <h5>Ibanez TS9</h5>
                                    $99,990
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-light mt-auto bg-primary" href="#">COMPRAR</a></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Home