export const cartAddAction = (name, price, id) =>{
    
    return {
        type: "ADD",
        item: {
            id: id,
            name: name,
            price: price,
            quantity: 1}
    }

} 