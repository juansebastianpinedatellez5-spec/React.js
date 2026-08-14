type Props = {
  setVista: (vista: string) => void;
};

const Sidebar = ({ setVista }: Props) => {
  return (
    <aside className="sidebar">
      <button onClick={() => setVista("usuarios")}>Usuarios</button>
      <button onClick={() => setVista("productos")}>Productos</button>
    </aside>
  );
};

export default Sidebar;