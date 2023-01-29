import './ItemDetail.css'
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
 import ItemCount from '../itemCount/ItemCount';
import ItemListContainer from '../itemListContainer/ItemListContainer';


 const ItemDetail = (props) => {
    const { title, category, description, price } = props.data
     return (
         <header >
            <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="holder.js/100px180" />
       <Card.Body>
         <Card.Title>{title}</Card.Title>
         <Card.Text>
            {category}
         {description}
         {price}
         <ItemCount stock={10} />
         </Card.Text>
         <ItemListContainer />
         <Button variant="primary">Go somewhere</Button>
       </Card.Body>
     </Card>
         </header>
    )

 }

 export default ItemDetail