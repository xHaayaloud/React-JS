import { Button } from 'antd';
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';


const SubirProductosMenu = (props) => {
    const [open, setOpen] = useState(false);
  
    const showSubirProductos = () => {
      setOpen(!open);
    };
  
    console.log("Subir Productos",props)
  
    return (
      <>
        <UploadOutlined onClick={showSubirProductos}/>
        
        <Button title="Subir Productos" open={open}>
            
  
        </Button>
      </>
    );
  };


export default SubirProductosMenu;