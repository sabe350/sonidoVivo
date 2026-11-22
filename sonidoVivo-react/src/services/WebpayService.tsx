export async function pagoWePay(items: {productId: String; cantidad: number} []) {
    const token = localStorage.getItem("token");
    const res = await fetch("http://localhost:8080/api/webpay", {
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: 'Bearer ${token}'},
        body: JSON.stringify({items}),
    });

    if (!res.ok) throw new Error("No se pudo realizar el pago");
    const {url, token: tokenWs} = await res.json();

    const form = document.createElement("form");
    form.method = "POST";
    form.action = url;
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "token_ws";
    input.value = tokenWs;
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    
}