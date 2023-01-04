import './ItemListContainer.css'


const ItemListContainer = (props) => {
    return (
        <header>
           <p>
            este es el ITEM LIST CONTAINER {props.greeting}
           </p>
        </header>
    )

}

export default ItemListContainer