import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Usuarios from "./components/Usuarios";
import Productos from "./components/Productos";
import "./App.css";

function App() {
  const [vista, setVista] = useState("usuarios");

  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar setVista={setVista} />
        {vista === "usuarios" ? <Usuarios /> : <Productos />}
      </div>
      <Footer />
    </div>
  );
}

export default App;