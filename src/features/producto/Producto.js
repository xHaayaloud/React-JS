
import { Avatar, Card } from 'antd';
import React from 'react';
import ModificarDrawer from '../ModificarDrawer';

const { Meta } = Card;

const Producto = (props) => {
  return (
    
    <Card
      style={{
        width: 300,
      }}
      cover={<img
        alt="example"
        src={props.valor.imagenes}
      />}
      actions={[
        
        <ModificarDrawer
          avatar={<Avatar src={props.valor.imagenes} />}
          detalle={<img
            alt="example"
            src={props.valor}
          />} />,
      ]}
    >
      <Meta
        avatar={<Avatar src={props.valor.imagenes} />}
        title={props.valor.titulo}
        description={props.valor.precio}
      />
    </Card>
  )
}

export default Producto;