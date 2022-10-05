import React, { useEffect, useState } from 'react'
import { BeerDetail } from '../../services/mockAPI'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { LinearProgress } from '@mui/material';

function ItemDetailContainer() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    BeerDetail(id)
      .then(response => setData(response))
      .catch((msgError) => {
        setError(msgError.message);
      })
  }, [id])

  if (!data.id) {
    return (
      <>
        {error ? (
          <div>
            <h2>{error}</h2>
          </div>
        ) : (
          <LinearProgress />
        )}
      </>
    );
  }
  return (
    <ItemDetail data={data} />
  );
}

export default ItemDetailContainer