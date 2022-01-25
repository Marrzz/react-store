
export const sortItems = (listOfItems, keyword) => {


    if (keyword === "Price: Descending"){

        listOfItems.sort((a, b) => (parseInt(a.props.price) < parseInt(b.props.price)) ? 1 : ((parseInt(b.props.price) < parseInt(a.props.price)) ? -1 : 0))
        
    } else if (keyword === "Price: Ascending"){

        listOfItems.sort((a, b) => (parseInt(a.props.price) > parseInt(b.props.price)) ? 1 : ((parseInt(b.props.price) > parseInt(a.props.price)) ? -1 : 0))

    } else if (keyword === "Alphabethically: Ascending"){

        listOfItems.sort((a, b) => (a.props.name > b.props.name) ? 1 : ((b.props.name > a.props.name) ? -1 : 0))

    } else if (keyword === "Alphabetically: Desceding"){
        listOfItems.sort((a, b) => (a.props.name < b.props.name) ? 1 : ((b.props.name < a.props.name) ? -1 : 0))

    }

    return listOfItems;

}

export const applyFilters = (listOfItems, keyword, priceRange) => {

    listOfItems = listOfItems.filter( b => b.props.name.toLowerCase().includes(keyword)).filter( b => parseInt(b.props.price) >= priceRange.min && parseInt(b.props.price) <= priceRange.max)
    return listOfItems

}