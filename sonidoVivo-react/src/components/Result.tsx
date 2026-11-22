import { use, useEffect, useRef, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useCart } from "../context/CartContext"

type Estado = "cargando" | "ok" | "rechazado" | "cancelado" | "error";

function Result() {

    const [params] = useSearchParams();
    const {clearCart} = useCart();
    const [estado, setEstado] = useState<Estado>("cargando");
    const llamado = useRef(false);

    useEffect(() => {
        if (llamado.current) return;
        llamado.current = true;

        const tokenWs = params.get("token_ws");
        if (!tokenWs){
            setEstado("cancelado")
            return;
        }

(async () => {
  try {
    const res = await fetch("/api/webpay/commit", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ token_ws: tokenWs }),
    });
    const texto = await res.text();
    console.log("commit:", res.status, texto);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const json = JSON.parse(texto);
    if (json.status === "AUTHORIZED" && json.responseCode === 0) {
      setEstado("ok");
      try { clearCart(); } catch (e) { console.error("clearCart falló:", e); }
    } else {
      setEstado("rechazado");
    }
  } catch (e) {
    console.error("Error al confirmar:", e);
    setEstado("error");
  }
})();
    }, []);

    const titulo: Record<Estado, string> = {
        cargando: "Confirmando tu pago...",
        ok: "Compra realizada con exito",
        rechazado: "Pago rechazado",
        cancelado: "Compra canelada",
        error: "No pudimos confirmar el pago"
    };

    const detalle: Record<Estado, string> = {
        cargando: "Espera un momento, no cierres esta ventana",
        ok: "Su compra se ha realizado de manera exitosa",
        rechazado: "Su compra fue rechazada, intente nuevamente",
        cancelado: "Su compra fue cancelada",
        error: "Hubo un error al realizar su compra"
    }
    
  return (
    <div>
        <section className="">
            <div className="px-4 px-lg-5" id="aboutContainer">
                <div className="about">
                    <div className="about-panel">
                        <h1>{titulo[estado]}</h1>
                        <p >{detalle[estado]}</p>
                    </div>
                </div>        
            </div>
        </section>
    </div>
  )
}

export default Result