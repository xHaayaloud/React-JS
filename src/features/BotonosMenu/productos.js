import { Button } from 'antd';
import React, { useState } from 'react';
import { ProfileOutlined} from '@ant-design/icons';
import ProductoList from '../producto/ProductoList';

const ProductosMenu = (props) => {
    const [open, setOpen] = useState(false);
  
    const showProductos = () => {
      setOpen(!open);
    };
  
    console.log("Productos",props)
  
    return (
      <>
        <ProfileOutlined onClick={showProductos}/>
        
        <Button title="Productos" open={open}>
            <ProductoList />
  
        </Button>
      </>
    );
  };


export default ProductosMenu;