import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';


function BasicExample({price, title, initial, stock}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <ItemCount initial={initial} stock={stock} />
      </Card.Body>
    </Card>
  );
}

export default BasicExample;