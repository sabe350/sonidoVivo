import React from 'react'
import Related from './Related'

export function Product1() {
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/yamahaf310.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">GA001</div>
                        <h1 className="display-5 fw-bolder">Guitarra Acústica Folk</h1>
                        <h5>Yamaha F310</h5>
                        <div className="fs-6">
                            <span>Stock: 8</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$129,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}} />
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
                        </div>
                        <p className="mb-1">Descripcion</p>
                        <p className="lead">Tapa de abeto, aros y fondo de meranti. Ideal para iniciantes.</p>
                    </div>
                </div>
            </div>
        </section>
        <Related/>
    </div>
    
  )
}

export function Product12() {
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/fendercd60s.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">GA002</div>
                        <h1 className="display-5 fw-bolder">Guitarra Acústica Dreadnought</h1>
                        <h5>Fender CD-60S</h5>
                        <div className="fs-6">
                            <span>Stock: 5</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$189,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/yamahac40.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">GA003</div>
                        <h1 className="display-5 fw-bolder">Guitarra Acústica Clásica 4/4</h1>
                        <h5>Yamaha C40</h5>
                        <div className="fs-6">
                            <span>Stock: 10</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$89,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/TakamineGN20CE.png" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">GA004</div>
                        <h1 className="display-5 fw-bolder">Guitarra Electroacústica</h1>
                        <h5>Takamine GN20CE</h5>
                        <div className="fs-6">
                            <span>Stock: 3</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$349,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/yamahajr1.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">GA005</div>
                        <h1 className="display-5 fw-bolder">Guitarra 3/4 Niños</h1>
                        <h5>Yamaha JR1</h5>
                        <div className="fs-6">
                            <span>Stock: 6</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$79,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/squireafinitystrat.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">GE001</div>
                        <h1 className="display-5 fw-bolder">Guitarra Eléctrica Stratocaster</h1>
                        <h5>Squire Affinity Strat</h5>
                        <div className="fs-6">
                            <span>Stock: 5</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$249,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/epiphonelespaulstd.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">GE002</div>
                        <h1 className="display-5 fw-bolder">Guitarra Eléctrica Les Paul</h1>
                        <h5>Epiphone Les Paul Standard</h5>
                        <div className="fs-6">
                            <span>Stock: 4</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$329,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/epiphonesgstd.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">GE003</div>
                        <h1 className="display-5 fw-bolder">Guitarra Eléctrica SG</h1>
                        <h5>Epiphone SG Standard</h5>
                        <div className="fs-6">
                            <span>Stock: 3</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$319,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/squireaffinitytele.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">GE004</div>
                        <h1 className="display-5 fw-bolder">Guitarra Eléctrica Telecaster</h1>
                        <h5>Squier Affinity Telecaster</h5>
                        <div className="fs-6">
                            <span>Stock: 4</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$239,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/epiphonees335.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">GE005</div>
                        <h1 className="display-5 fw-bolder">Guitarra Eléctrica Semi-hollow</h1>
                        <h5>Epiphone ES-335</h5>
                        <div className="fs-6">
                            <span>Stock: 2</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$549,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/squireaffinitypj.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">BA001</div>
                        <h1 className="display-5 fw-bolder">Bajo Eléctrico 4 Cuerdas</h1>
                        <h5>Squire Affinity PJ</h5>
                        <div className="fs-6">
                            <span>Stock: 5</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$299,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/fenderplayjazz.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">BA002</div>
                        <h1 className="display-5 fw-bolder">Bajo Eléctrico Jazz Bass</h1>
                        <h5>Fender Player Jazz</h5>
                        <div className="fs-6">
                            <span>Stock: 2</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$699,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/yamahaapx700iii.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">BA003</div>
                        <h1 className="display-5 fw-bolder">Bajo Acústico 4 Cuerdas</h1>
                        <h5>Yamaha APX700II</h5>
                        <div className="fs-6">
                            <span>Stock: 2</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$429,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/pearlroadshadow.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">BT001</div>
                        <h1 className="display-5 fw-bolder">Batería Acústica 5 piezas</h1>
                        <h5>Pearl Roadshow</h5>
                        <div className="fs-6">
                            <span>Stock: 2</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$599,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/rolandtd02kv.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">BT002</div>
                        <h1 className="display-5 fw-bolder">Batería Electrónica 8 pads</h1>
                        <h5>Roland TD-02KV</h5>
                        <div className="fs-6">
                            <span>Stock: 2</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$799,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/pearlste1450.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">BT003</div>
                        <h1 className="display-5 fw-bolder">Caja Snare 14"</h1>
                        <h5>Pearl STE 1450</h5>
                        <div className="fs-6">
                            <span>Stock: 4</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$89,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/zildjian14hihat.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">BT004</div>
                        <h1 className="display-5 fw-bolder">Platillo Hi-Hat 14"</h1>
                        <h5>Zildjian A Series</h5>
                        <div className="fs-6">
                            <span>Stock: 3</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$149,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/zildjian16crash.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">BT005</div>
                        <h1 className="display-5 fw-bolder">Platillo Crash 16"</h1>
                        <h5>Zildjian A Series</h5>
                        <div className="fs-6">
                            <span>Stock: 3</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$129,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/yamahapsre373.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">TC001</div>
                        <h1 className="display-5 fw-bolder">Teclado Digital 61 teclas</h1>
                        <h5>Yamaha PSR-E373</h5>
                        <div className="fs-6">
                            <span>Stock: 4</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$249,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/yamahap45.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">TC001</div>
                        <h1 className="display-5 fw-bolder">Piano Digital 88 teclas</h1>
                        <h5>Yamaha P-45</h5>
                        <div className="fs-6">
                            <span>Stock: 2</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$499,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/arturiaminilabmkii.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">TC003</div>
                        <h1 className="display-5 fw-bolder">Sintetizador 49 teclas</h1>
                        <h5>Arturia MiniLab MKII</h5>
                        <div className="fs-6">
                            <span>Stock: 5</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$129,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/maudiohammer88.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">TC004</div>
                        <h1 className="display-5 fw-bolder">Teclado MIDI 88 teclas</h1>
                        <h5>M-Audio Hammer 88</h5>
                        <div className="fs-6">
                            <span>Stock: 2</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$399,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/fenderfrontman15g.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">AM001</div>
                        <h1 className="display-5 fw-bolder">Amplificador Guitarra 15W</h1>
                        <h5>Fender Frontman 15G</h5>
                        <div className="fs-6">
                            <span>Stock: 5</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$99,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/marshallmg40gfx.jpeg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">AM002</div>
                        <h1 className="display-5 fw-bolder">Amplificador Guitarra 40W</h1>
                        <h5>Marshall MG40GFX</h5>
                        <div className="fs-6">
                            <span>Stock: 3</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$299,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/hartkehd100.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">AM003</div>
                        <h1 className="display-5 fw-bolder">Amplificador Bajo 100W</h1>
                        <h5>Hartke HD100</h5>
                        <div className="fs-6">
                            <span>Stock: 2</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$449,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/fishmanloudboxmini.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">AM004</div>
                        <h1 className="display-5 fw-bolder">Amplificador Acústico 40W</h1>
                        <h5>Fishman Loudbox Mini</h5>
                        <div className="fs-6">
                            <span>Stock: 3</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$499,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  min= '1' style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/shuresm58.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">MI001</div>
                        <h1 className="display-5 fw-bolder">Micrófono Dinámico Cardioide</h1>
                        <h5>Shure SM58</h5>
                        <div className="fs-6">
                            <span>Stock: 8</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$149,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/shuresm57.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">MI002</div>
                        <h1 className="display-5 fw-bolder">Micrófono Dinámico Instrumento</h1>
                        <h5>Shure SM57</h5>
                        <div className="fs-6">
                            <span>Stock: 6</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$139,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/audiotechat2020.png" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">MI003</div>
                        <h1 className="display-5 fw-bolder">Micrófono Condensador</h1>
                        <h5>Audio-Technica AT2020</h5>
                        <div className="fs-6">
                            <span>Stock: 4</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$199,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/blueyeti.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">MI004</div>
                        <h1 className="display-5 fw-bolder">Micrófono USB de Condensador</h1>
                        <h5>Blue Yeti</h5>
                        <div className="fs-6">
                            <span>Stock: 5</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$299,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/bossds1.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">PE001</div>
                        <h1 className="display-5 fw-bolder">Pedal Distorsión</h1>
                        <h5>Boss DS-1</h5>
                        <div className="fs-6">
                            <span>Stock: 7</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$79,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/bossrv6.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">PE002</div>
                        <h1 className="display-5 fw-bolder">Pedal Reverb</h1>
                        <h5>Boss RV-6</h5>
                        <div className="fs-6">
                            <span>Stock: 4</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$179,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/bossme80.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">PE003</div>
                        <h1 className="display-5 fw-bolder">Pedal Multi-efectos</h1>
                        <h5>Boss ME-80</h5>
                        <div className="fs-6">
                            <span>Stock: 2</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$349,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/BOSSTU3.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">PE004</div>
                        <h1 className="display-5 fw-bolder">Pedal Tuner Cromático</h1>
                        <h5>Boss TU-3</h5>
                        <div className="fs-6">
                            <span>Stock: 8</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$89,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/mxrcarboncopy.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">PE005</div>
                        <h1 className="display-5 fw-bolder">Pedal Delay</h1>
                        <h5>MXR Carbon Copy</h5>
                        <div className="fs-6">
                            <span>Stock: 4</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$179,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/ibanezts9.jpeg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">PE006</div>
                        <h1 className="display-5 fw-bolder">Pedal Overdrive</h1>
                        <h5>Ibanez TS9</h5>
                        <div className="fs-6">
                            <span>Stock: 6</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$99,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/superslinky.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">AC001</div>
                        <h1 className="display-5 fw-bolder">Cuerdas Guitarra Eléctrica 09-42</h1>
                        <h5>Ernie Ball Super Slinky</h5>
                        <div className="fs-6">
                            <span>Stock: 25</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$8,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/earthwood.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">AC002</div>
                        <h1 className="display-5 fw-bolder">Cuerdas Guitarra Acústica 12-53</h1>
                        <h5>Ernie Ball Earthwood</h5>
                        <div className="fs-6">
                            <span>Stock: 12</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$10,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/regularslinky.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">AC003</div>
                        <h1 className="display-5 fw-bolder">Cuerdas Bajo 45-105</h1>
                        <h5>Ernie Ball Regular Slinky</h5>
                        <div className="fs-6">
                            <span>Stock: 12</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$14,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="num" defaultValue={'1'} onChange='0' min= '1'  style="max-width: 3rem"/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/fender351.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">AC004</div>
                        <h1 className="display-5 fw-bolder">Púas de Guitarra x10 (0.73mm)</h1>
                        <h5>Fender 351</h5>
                        <div className="fs-6">
                            <span>Stock: 50</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$3,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/dunloptrigger.png" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">AC005</div>
                        <h1 className="display-5 fw-bolder">Capotraste Guitarra</h1>
                        <h5>Dunlop Trigger</h5>
                        <div className="fs-6">
                            <span>Stock: 15</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$12,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/snarksn5.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">AC006</div>
                        <h1 className="display-5 fw-bolder">Afinador de Clip</h1>
                        <h5>Snark SN-5</h5>
                        <div className="fs-6">
                            <span>Stock: 20</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$8,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/monsters100-3.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">AC007</div>
                        <h1 className="display-5 fw-bolder">Cable Instrumento 3m</h1>
                        <h5>Monster S100-I-3</h5>
                        <div className="fs-6">
                            <span>Stock: 15</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$12,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/monsters100-3.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">AC008</div>
                        <h1 className="display-5 fw-bolder">Cable Instrumento 6m</h1>
                        <h5>Monster S100-I-6</h5>
                        <div className="fs-6">
                            <span>Stock: 10</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$17,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/herculesgs302b.webp" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">AC009</div>
                        <h1 className="display-5 fw-bolder">Soporte Guitarra de Piso</h1>
                        <h5>Hercules GS302B</h5>
                        <div className="fs-6">
                            <span>Stock: 12</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$22,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/herculeswah202.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">AC010</div>
                        <h1 className="display-5 fw-bolder">Soporte Guitarra de Pared</h1>
                        <h5>Hercules WAH-202</h5>
                        <div className="fs-6">
                            <span>Stock: 10</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$18,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="num" defaultValue={'1'} onChange='0' min= '1'  style="max-width: 3rem"/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/focusritescarlet.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">ES001</div>
                        <h1 className="display-5 fw-bolder">Interfaz de Audio 2x2 USB</h1>
                        <h5>Focusrite Scarlett Solo</h5>
                        <div className="fs-6">
                            <span>Stock: 4</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$149,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/audiotechathmx20x.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">ES002</div>
                        <h1 className="display-5 fw-bolder">Auriculares de Estudio</h1>
                        <h5>Audio-Technica ATH-M20x</h5>
                        <div className="fs-6">
                            <span>Stock: 6</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$79,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/audiotemx50x.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">ES003</div>
                        <h1 className="display-5 fw-bolder">Auriculares de Estudio Pro</h1>
                        <h5>Audio-Technica ATH-M50x</h5>
                        <div className="fs-6">
                            <span>Stock: 4</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$219,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/yamahahs5.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">ES004</div>
                        <h1 className="display-5 fw-bolder">Monitor de Estudio 5"</h1>
                        <h5>Yamaha HS5</h5>
                        <div className="fs-6">
                            <span>Stock: 2</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$349,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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
  return (
    <div>
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="img-thumbnail" src="assets/img/products/sennheisermzp40.jpg" alt="..." width="300" height="300"/>
                    </div>
                    <div className="col-md-6">
                        <div className="small md-1">ES005</div>
                        <h1 className="display-5 fw-bolder">Pop Filter para Micrófono</h1>
                        <h5>Sennheiser MZP 40</h5>
                        <div className="fs-6">
                            <span>Stock: 8</span>
                        </div>
                        <div className="fs-5 mb-2">
                            <span>$14,990</span>   
                        </div>
                        <div className="d-flex mb-3">
                            <input className="form-control text-center me-3" id="cantidad" type="number" defaultValue={'1'} onChange='0' min= '1'  style={{maxWidth: '64px'}}/>
                            <button className="btn btn-outline-light bg-primary flex-shrink-0" type="button">
                                Añadir al carrito
                            </button>
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