import { Button } from 'antd';
import React, { useState } from 'react';
import { UserOutlined} from '@ant-design/icons';

const UsuariosMenu = (props) => {
    const [open, setOpen] = useState(false);
  
    const showUsuarios = () => {
      setOpen(!open);
    };
  
    console.log("Usuarios",props)
  
    return (
      <>
        <UserOutlined onClick={showUsuarios}/>
        
        <Button title="Usuarios" open={open}>
            
  
        </Button>
      </>
    );
  };


export default UsuariosMenu;