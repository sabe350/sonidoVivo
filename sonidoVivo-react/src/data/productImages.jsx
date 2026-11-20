const images = {
    GA001: "assets/img/products/yamahaf310.jpg"
}

export function getProductImgage(id){
    return images[id] ?? "/assets/img/placeholder.jpg"
}