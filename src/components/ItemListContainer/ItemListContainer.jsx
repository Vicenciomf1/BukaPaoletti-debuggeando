import React, { useEffect, useState } from 'react';
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
      <Row xl="auto" className="justify-content-center">
        <ItemList data={data} />
      </Row>
    </Container>
  )
}


export default ItemListContainer