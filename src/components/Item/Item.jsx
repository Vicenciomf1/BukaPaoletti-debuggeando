import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import Col from 'react-bootstrap/Col';

function Item({ img, price, title, subtitle, initial, stock }) {
  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          <Card.Text>${price}</Card.Text>
          <ItemCount initial={initial} stock={stock} />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;