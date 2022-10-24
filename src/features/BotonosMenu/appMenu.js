import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
  
import Usuarios from "./usuarios";

import Productos from "./productos";

import Estadisticas from "./estadisticas";

import SubirProducto from "./subirProductos";
  
function AppMenu() {
  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/usuarios" component={Usuarios} />

          <Route path="/productos" component={Productos} />
            
          <Route path="/estadisticas" component={Estadisticas} />

          <Route path="/subirProducto" component={SubirProducto} />
            

          <Redirect to="/Plantilla" />
        </Switch>
      </Router>
    </>
  );
}
  
export default AppMenu;