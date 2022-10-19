import React, { useEffect, useState } from 'react';
import { getBeer, BeerCategory } from '../../services/firestore';
import ItemList from '../ItemList/ItemList';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import ButtonCategory from '../ButtonCategory/ButtonCategory';
import { LinearProgress } from '@mui/material';

function ItemListContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cat } = useParams();


  useEffect(() => {
    setLoading(true)
    if (cat === undefined) {
      getBeer().then(response => setData(response))
        .finally(() => setLoading(false));
    } else {
      BeerCategory(cat).then(response => setData(response))
        .finally(() => setLoading(false));
    }
  }, [cat])

  return (
    <>
      {loading ? (<Container fluid>
        <LinearProgress />
      </Container>) :
        (<Container fluid>
          <Row xl="auto" className="justify-content-center">
            <ButtonCategory />
          </Row>
          <Row xl="auto" className="justify-content-center">
            <ItemList data={data} />
          </Row>
        </Container>
        )
      }
    </>)
}


export default ItemListContainer