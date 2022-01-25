const filterReducer = (state = {sort: "Price: Ascending", price: {min: 0, max: 99999999}, search: "", categories: []}, action) =>{


    switch (action.type) {
        case "SORT":
            state = {...state, sort: action.category}   
            
            return state;

        case "SEARCH":

            state = {...state, search: action.keyword.toLowerCase()}
            return state;
        
        case "PRICE":

            if( Number.isNaN(action.price.min) && Number.isNaN(action.price.max)){
                state = {...state, price: {min: 0, max: 99999}}
            }

            else if (Number.isNaN(action.price.min)){
                state = {...state, price: {min: 0, max: action.price.max}}
                return state;
                
            } else if (Number.isNaN(action.price.max)){
                state = {...state, price: {min:  action.price.min, max: 999999}}
                return state;
            }

            state = {...state, price: action.price}
            return state;
        case "CATEGORY":

            if (state.categories.includes(action.category.toLowerCase())){

                var index = state.categories.indexOf(action.category.toLowerCase());
                state.categories.splice(index,1)
                state = {...state, categories: state.categories}
                   

            } else {

                state.categories.push(action.category.toLowerCase())
                state = {...state, categories: state.categories}

            }
            return state;

        default:
            return state;
    }
}

export default filterReducer;