export const cartReduceAction = (name, price,id) =>{
    
    return {
        type: "REDUCE",
        item: {
            id: id,
            name: name,
            price: price,
            quantity: 1}
    }

} 