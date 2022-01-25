const cartReducer = (state = {cart: [], length: 0, totalPrice: 0}, action) => {

    switch (action.type) {

        
        case "ADD":

            let itemIndex = state.cart.findIndex(item => item.id == action.item.id);

            if (itemIndex > -1){
                
                state.cart[itemIndex].quantity += 1;
                
                
            }
            else{

                state.cart.push(action.item)
                
            };
            
            if (state.cart.length >= 1){
                state.totalPrice = 0;
                state.cart.forEach(item => {
                    state.totalPrice += parseInt(item["price"] * item["quantity"])})
            }
            state.length += 1;
            state = {cart: state.cart, totalPrice: state.totalPrice, length: state.length}
            

            return state
            

    case "REMOVE":

        state.cart = state.cart.filter( item => item.id != action.id)
        if (state.cart.length >= 1){
            state.totalPrice = 0;
            state.length = 0;
            state.cart.forEach(item => {
                state.totalPrice += parseInt(item["price"] * item["quantity"])
                state.length += item["quantity"]
            
            })
        }
        else{
            state.length = 0;
        }
    
        state = {totalPrice: state.totalPrice, cart : state.cart, length: state.length}

        

        return state
    case "REDUCE":
        let reduceItemIndex = state.cart.findIndex(item => item.id == action.item.id);
        if (reduceItemIndex > -1){
            
            state.cart[reduceItemIndex].quantity -= 1;
            
        }

        if (state.cart.length >= 1){
            state.totalPrice = 0;
            state.cart.forEach(item => {
                state.totalPrice += parseInt(item["price"] * item["quantity"])})
        }
        state.length -= 1;

        state = {cart: state.cart, totalPrice: state.totalPrice, length: state.length}
        return state
        
        

    default:
        return state;
    }
}

export default cartReducer;