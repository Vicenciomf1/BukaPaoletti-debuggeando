import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './Item.css'
import { Link } from 'react-router-dom';

function Item({ img, price, title, subtitle, id }) {

  const urlDetail = `/ItemDetail/${id}`;

  return (
    <Col>
      <Link to={urlDetail} className="link">
        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
            <Card.Text>${price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default Item;