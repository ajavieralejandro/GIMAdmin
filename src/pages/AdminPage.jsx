import SideBar from "../components/Sidebar/Sidebar";
import Clients from "./Admin/Clients";
import Movimientos from '../pages/Admin/Cuentas/movimientos';
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
import Cajas from "./Admin/Cuentas/cajas";
import Categorias from "./Admin/Cuentas/categorias";
import AperturasCierres from "./Admin/Cuentas/aperturas_cierres";
const AdminPage = () =>{
    return(
        <>        <BrowserRouter>

        <SideBar>
      <Routes>
      <Route  path="/" element={<Clients />} />
      <Route  path="/movimientos" element={<Movimientos />} />
      <Route  path="/categorias_concepto" element={<Categorias />} />
      <Route  path="/aperturas_cierres" element={<AperturasCierres />} />

        <Route  path="/clientes" element={<Clients />} />
        <Route  path="/cajas" element={<Cajas />} />

    
      </Routes>
           </SideBar>
           </BrowserRouter>    
        </>
    )
}

export default AdminPage;