
import React from "react";
import { Header } from "./Componentes/Header";
import { ProductosLista} from "./Componentes/Productos/index";

function App() {
  return (
    <div className="App">
  <Header />
  <ProductosLista />
    </div>
  );
}

export default App;