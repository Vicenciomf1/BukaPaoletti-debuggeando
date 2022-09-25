import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import Col from 'react-bootstrap/Col';
import './Item.css'
import {Link} from 'react-router-dom';

function Item({ img, price, title, subtitle, initial, stock, id }) {
  
  const urlDetail = `/ItemDetail/${id}`;

  return (
    <Col>
      <Card style={{ width: '15rem' }}>
        <Link to={urlDetail}><Card.Img variant="top" src={img} /></Link>
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