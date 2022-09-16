import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import getBeer from '../../services/mockAPI';
import ItemList from '../ItemList/ItemList';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function ItemListContainer() {
  let [data, setData] = useState([]);

  useEffect(() => {
    getBeer().then(response => {
      setData(response);
    });
  }, [])

  return (
    <Container fluid>
      <Row sm={1} md={2} lg={3} xl={4} className="g-4">
        <ItemList data={data} />
      </Row>
    </Container>
  )
}


export default ItemListContainer