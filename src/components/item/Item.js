
import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



import ItemCount from '../itemCount/ItemCount'

const Item = (props) => {

    const { title, category, description, price, id} = props.data

    return (
        <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="holder.js/100px180" />
       <Card.Body>
         <Card.Title>{title}</Card.Title>
         <Card.Text>
            {category}
         {description}
         {price}
         </Card.Text>
         <Link to={`/producto/${id}`}> Ver Detalle del Producto </Link>
         <Button variant="primary">Go somewhere</Button>
         <ItemCount stock={10} />
       </Card.Body>
     </Card>


    )

}

export default Item
