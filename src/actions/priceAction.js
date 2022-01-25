export const priceAction = (minPrice, maxPrice) => {

    return {
        type: "PRICE",
        price: {

            min: minPrice,
            max: maxPrice
        }
    }

}