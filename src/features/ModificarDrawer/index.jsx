
import { Drawer, Button, Input } from 'antd';
import React, { useState } from 'react';
import { EditOutlined} from '@ant-design/icons';

const ModificarDrawer = (props) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  console.log("DRAWER",props)

  return (
    <>
      <EditOutlined onClick={showDrawer}/>
      
      <Drawer title="Editar Producto" placement="right" onClose={showDrawer} open={open}>
      
          {props.avatar}

          <Input placeholder="Nombre" defaultValue={props.titulo} />
          <Input placeholder="Precio" defaultValue={props.precio} />

          <Button type="primary">Guardar</Button>

      </Drawer>
    </>
  );
};

export default ModificarDrawer;