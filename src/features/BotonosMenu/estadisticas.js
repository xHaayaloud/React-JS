import { Button } from 'antd';
import React, { useState } from 'react';
import { BarChartOutlined} from '@ant-design/icons';


const EstadisticasMenu = (props) => {
    const [open, setOpen] = useState(false);
  
    const showEstadisticas = () => {
      setOpen(!open);
    };
  
    console.log("Estadisticas",props)
  
    return (
      <>
        <BarChartOutlined onClick={showEstadisticas}/>
        
        <Button title="Estadisticas" open={open}>

  
        </Button>
      </>
    );
  };


export default EstadisticasMenu;