import React from 'react'
import Card from '../Item/Item';

function ItemList({data}) {
  return (
    <>{data.map((item) => {
        return <Card key={item.id}
          title={item.title}
          subtitle={item.subtitle}
          price={item.price}
          img={item.img}
          stock={item.stock}
          initial={1} />
      })}
      </>
  )
}

export default ItemList