import SideBar from "../components/Sidebar/Sidebar";
import Clients from "./Admin/Clients";
import Movimientos from '../pages/Admin/Cuentas/movimientos';
import {
    HashRouter as BrowserRouter,
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

//Fidelizacion
import Listados from "./Admin/Fidelizacion/listados";

//Entrenamiento
import Ejercicios from "./Admin/Entrenamiento/ejercicios";
import Planes from "./Admin/Entrenamiento/planes";
import Plantillas from "./Admin/Entrenamiento/plantillas";
import Wods from "./Admin/Entrenamiento/wods";
import Vencimientos from "./Admin/Entrenamiento/vencimientos";
import ControlClases from "./Admin/Entrenamiento/clases";
import ActividadesVentas from "./Admin/Ventas/actividades";
import FidelizacionReglasPuntaje from "./Admin/Fidelizacion/reglas.puntaje";
import ConfiguracionFidelizacion from "./Admin/Fidelizacion/configuracion";
import BeneficiosFidelizacion from "./Admin/Fidelizacion/beneficios";
import NivelesFidelizacion from "./Admin/Fidelizacion/niveles";
import HorariosVentas from "./Admin/Ventas/horarios";
import AbonosVentas from "./Admin/Ventas/abonos";
import ClasesProgramadasVentas from "./Admin/Ventas/clases.programadas";
import ComprobantesVentas from "./Admin/Ventas/comprobantes";
import ProductosVentas from "./Admin/Ventas/productos";
import AjustesPreciosVentas from "./Admin/Ventas/ajustes.precios";
import DescuentosVentas from "./Admin/Ventas/descuentos";
import ResumenVentas from "./Admin/Ventas/resumen";
import ReservasFijasVentas from "./Admin/Ventas/reservas";
import AccionesVentas from "./Admin/Ventas/acciones.ventas";
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

        <Route path='/fidelizacion/listados' element={<Listados />} />
        <Route path='/fidelizacion/reglas' element={<FidelizacionReglasPuntaje />} />
        <Route path='/fidelizacion/herramientas' element={<ConfiguracionFidelizacion />} />
        <Route path='/facturacion/configuracion' element={<FacturacionRechazada />} />
        <Route path='/fidelizacion/beneficios' element={<BeneficiosFidelizacion />} />
        <Route path='/facturacion/comprobantes' element={<FacturacionRechazada />} />
        <Route path='/fidelizacion/niveles' element={<NivelesFidelizacion />} />

        <Route path='/pagos/operaciones' element={<PagosRegistrados />} />
        <Route path='/pagos/configuracion' element={<ConfiguracionPagos />} />

        <Route path='/entrenamiento/ejercicios' element={<Ejercicios />} />
        <Route path='/entrenamiento/planes' element={<Planes />} />
        <Route path='/entrenamiento/plantillas' element={<Plantillas />} />
        <Route path='/entrenamiento/wods' element={<Wods />} />
        <Route path='/entrenamiento/vencimiento_planes' element={<Vencimientos />} />
        <Route path='/entrenamiento/control_clases' element={<ControlClases />} />


        <Route path='/ventas/actividades' element={<ActividadesVentas />} />
        <Route path='/ventas/horarios' element={<HorariosVentas />} />
        <Route path='/ventas/abonos_adicionales' element={<AbonosVentas />} />
        <Route path='/ventas/clases_programadas' element={<ClasesProgramadasVentas />} />
        <Route path='/ventas/comprobantes' element={<ComprobantesVentas />} />
        <Route path='/ventas/productos' element={<ProductosVentas />} />
        <Route path='/ventas/ajustes_precios' element={<AjustesPreciosVentas />} />
        <Route path='/ventas/descuentos' element={<DescuentosVentas />} />
        <Route path='ventas/resumen_ventas' element={<ResumenVentas />} />
        <Route path='/ventas/reservas_fijas' element={<ReservasFijasVentas />} />
        <Route path='/ventas/acciones_recurrentes' element={<AccionesVentas />} />
      </Routes>
           </SideBar>
           </BrowserRouter>    
        </>
    )
}

export default AdminPage;