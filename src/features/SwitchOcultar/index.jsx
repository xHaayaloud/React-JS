import { Button, Switch } from 'antd';
import React, { useState } from 'react';

const App = () => {
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <Switch disabled={disabled} defaultChecked />
      <br />
      <Button type="primary" onClick={toggle}>
        Ocultar
      </Button>
    </>
  );
};

export default App;