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
import Plantillas from "./Admin/Entrenamiento/plantillas";
import Wods from "./Admin/Entrenamiento/wods";
import Vencimientos from "./Admin/Entrenamiento/vencimientos";
import ControlClases from "./Admin/Entrenamiento/clases";
import ActividadesVentas from "./Admin/Ventas/actividades";
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
        <Route path='/entrenamiento/plantillas' element={<Plantillas />} />
        <Route path='/entrenamiento/wods' element={<Wods />} />
        <Route path='/entrenamiento/vencimiento_planes' element={<Vencimientos />} />
        <Route path='/entrenamiento/control_clases' element={<ControlClases />} />


        <Route path='/ventas/actividades' element={<ActividadesVentas />} />
    
      </Routes>
           </SideBar>
           </BrowserRouter>    
        </>
    )
}

export default AdminPage;