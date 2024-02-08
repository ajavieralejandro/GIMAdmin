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
import ListaPremios from "./Admin/Fidelizacion/premios";
import CoverturaPuntos from "./Admin/Fidelizacion/covertura_puntos";
import FacturacionRechazada from "./Admin/Facturacion/facturacion.rechazada";
import PagosRegistrados from "./Admin/Pagos/pagos.registrados";
import ConfiguracionPagos from "./Admin/Pagos/configuracion";

//Entrenamiento
import Ejercicios from "./Admin/Entrenamiento/ejercicios";
import Planes from "./Admin/Entrenamiento/planes";
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

        <Route path='/premios' element={<ListaPremios/>} />
        <Route path='/covertura' element={<CoverturaPuntos />} />

        <Route path='/facturacion/configuracion' element={<FacturacionRechazada />} />

        <Route path='/facturacion/comprobantes' element={<FacturacionRechazada />} />

        <Route path='/pagos/operaciones' element={<PagosRegistrados />} />
        <Route path='/pagos/configuracion' element={<ConfiguracionPagos />} />

        <Route path='/entrenamiento/ejercicios' element={<Ejercicios />} />
        <Route path='/entrenamiento/planes' element={<Planes />} />
    
      </Routes>
           </SideBar>
           </BrowserRouter>    
        </>
    )
}

export default AdminPage;