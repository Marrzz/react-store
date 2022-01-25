import Button from '../Button'

function Item(props) {


    return (
        <div className="border-solid hover:shadow-lg mt-2 space-y-3 border-2 border-black rounded-lg w-64 h-128">
            
            <div className="text-center text-lg font-semibold font-sans">{props.name}</div>

            <img src={props.image} alt='#' className='object-none w-64 h-64 '/>

            <div className="text-center font-medium underline underline-offset-4">${props.price}</div>
            
            <div className="text-center">
                <Button text= 'Add to cart' name={props.name} price={props.price} id={props.id}></Button>
            </div>
            <div></div>

        </div>
    )
}

export default Item
