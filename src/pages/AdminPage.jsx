import SideBar from "../components/Sidebar/Sidebar";
import Clients from "./Admin/Clients";
import Movimientos from './Admin/Cuentas/conceptos.movimientos';
import Navbar from "../components/Navbar/navbar";
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
import SeguimientoCRM from "./Admin/CRM/seguimiento.prospectos";
import ControlSeguimientoCRM from "./Admin/CRM/control.seguimiento";
import AccionesSeguimientoCRM from "./Admin/CRM/acciones.seguimiento";
import RegistroConsultasCRM from "./Admin/CRM/registro.consultas";
import ReferentesCRM from "./Admin/CRM/referentes";
import OriginesCRM from "./Admin/CRM/origines.prospecto";
import DistribucionUsuarioCRM from "./Admin/CRM/distribucion.usuario";
import MotivoConsultaCRM from "./Admin/CRM/motivo.consulta";
import PerfiladosCRM from "./Admin/CRM/perfilados";
import IndicadoresReportes from "./Admin/Reportes/indicadores";
import VentasProductosReportes from "./Admin/Reportes/ventas.productos";
import VentasActividadPrincipalReportes from "./Admin/Reportes/ventas.actividad";
import CobrosRealizadosReportes from "./Admin/Reportes/cobros.realizados";
import AsistenciasReportes from "./Admin/Reportes/asistencias";
import InscripcionesActividadReportes from "./Admin/Reportes/inscripciones.actividad";
import HistorialClienteReportes from "./Admin/Reportes/historial.clientes";
import IngresosGastosReportes from "./Admin/Reportes/ingresos.gastos";
import IngresoEstablecimientoReportes from "./Admin/Reportes/ingreso.establecimiento";
import RecuperacionContraseñaReportes from "./Admin/Reportes/recuperacion.contraseña";
import ParticipacionClasesReportes from "./Admin/Reportes/participacion.clases";
import DocumentacionIngresosReportes from "./Admin/Reportes/documentacion.ingreso";
import CambiosInscripcionReportes from "./Admin/Reportes/cambios.inscripcion";
import CalificacionProfesoresReportes from "./Admin/Reportes/calificacion.profesores";
import CuentasCobrarReportes from "./Admin/Reportes/cuentas.cobrar";
import TiposTareasConf from "./Admin/Configuracion/tipos.tareas";
import DatosConfigurablesConf from "./Admin/Configuracion/datos.configurables";
import ProfesoresConf from "./Admin/Configuracion/profesores";
import SucursalesConf from "./Admin/Configuracion/sucursales";
import UsuariosConf from "./Admin/Configuracion/usuarios";
import RequisitosConf from "./Admin/Configuracion/requisitos";
import EventosSeguridadConf from "./Admin/Configuracion/eventos.seguridad";
import GypasssConf from "./Admin/Configuracion/gypasss";
import PlataformasExternasConf from "./Admin/Configuracion/plataformas.externas";
import ConeccionZoomConf from "./Admin/Configuracion/coneccion.zoom";
import CalificacionesConf from "./Admin/Configuracion/calificaciones";
import MediosPagoConf from "./Admin/Configuracion/medios.pago";
import ConceptoMovimientosCuentas from "./Admin/Cuentas/conceptos.movimientos";
import MovimientosInternosCuentas from "./Admin/Cuentas/movimientos.internos";
import CobroCliente from "./Admin/Clients/Cobro";
import CuentaCorriente from "./Admin/Clients/cuenta_corrients";
import CrearActividad from "./Admin/Ventas/crear.actividad";
import CrearAbonoVenta from "./Admin/Ventas/crear.abono";
import CrearClase from "./Admin/Ventas/crear.clase";
import CreateUserConf from "./Admin/Configuracion/create.user";
import CrearConceptoCaja from "./Admin/Cuentas/crear.concepto.caja";
import CrearCategoriaConcepto from "./Admin/Cuentas/crear.categoria.concepto";
import CrearMovimientoCaja from "./Admin/Cuentas/caja.crear.movimiento";
const AdminPage = () =>{
    return(
        <>        <BrowserRouter>
        <Navbar />
        <SideBar>
      <Routes>
      <Route  path="/" element={<Clients />} />
      <Route  path="/clientes/cobro" element={<CobroCliente />} />
      <Route  path="/clientes/cuenta_corriente" element={<CuentaCorriente  />} />


      <Route  path="/cuentas/conceptos_movimiento" element={<ConceptoMovimientosCuentas />} />
      <Route  path="/cuentas/crear_movimiento" element={<CrearConceptoCaja />} />
      <Route path="/cuentas/crear_categoria_concepto" element={<CrearCategoriaConcepto />} />
      <Route path="/cuentas/registrar_movimiento" element={<CrearMovimientoCaja />} />
      <Route path='/cuentas/movimientos_internos' element={<MovimientosInternosCuentas />} />
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
        <Route path='/ventas/crear_actividad' element={<CrearActividad />} />
        <Route path='/ventas/crear_abono' element={<CrearAbonoVenta />} />


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
        <Route path='/ventas/crear_clase' element={<CrearClase />} />

        <Route path='/crm/seguimiento' element={<SeguimientoCRM />} />
        <Route path='/crm/control_seguimiento'element={<ControlSeguimientoCRM />} />
        <Route path='/crm/acciones_seguimiento'element={<AccionesSeguimientoCRM />} />
        <Route path='/crm/registro_consultas' element={<RegistroConsultasCRM />} />
        <Route path='/crm/referentes' element={<ReferentesCRM />} />
        <Route path='/crm/origenes_prospecto' element={<OriginesCRM />} />
        <Route path='/crm/distribucion_usuario' element={<DistribucionUsuarioCRM />} />
        <Route path='/crm/motivo_consulta' element={<MotivoConsultaCRM />} />
        <Route path='/crm/perfilados' element={<PerfiladosCRM />} />


        <Route path='/reportes/indicadores' element={<IndicadoresReportes />} />
        <Route path='/reportes/ventas_productos' element={<VentasProductosReportes />} />
        <Route path='/reportes/ventas_actividad_principal' element={<VentasActividadPrincipalReportes />} />
        <Route path='/reportes/cobros_realizados' element={<CobrosRealizadosReportes />} />
        <Route path='/reportes/asistencias' element={<AsistenciasReportes />} />
        <Route path='/reportes/inscripciones_actividad' element={<InscripcionesActividadReportes />} />
        <Route path='/reportes/historial_clientes' element={<HistorialClienteReportes />} />
        <Route path='/reportes/ingresos_gastos' element={<IngresosGastosReportes />} />
        <Route path='/reportes/ingreso_establecimiento' element={<IngresoEstablecimientoReportes />} />
        <Route path='/reportes/recuperacion_contraseña' element={<RecuperacionContraseñaReportes />} />
        <Route path='/reportes/participacion_clases' element={<ParticipacionClasesReportes />} />
        <Route path='/reportes/documentacion_ingresos' element={<DocumentacionIngresosReportes />} />
        <Route path='/reportes/cambios_inscripcion' element={<CambiosInscripcionReportes />} />
        <Route path='/reportes/calificacion_profesores' element={<CalificacionProfesoresReportes />} />
        <Route path='/reportes/cuantas_por_cobrar' element={<CuentasCobrarReportes />} />

{/* 
  Multi
  line
  comment

      getItem('Padron Clientes', '/reportes/padron_clientes', null,null,null),
      getItem('Asistencias por Horario', '/reportes/asistencias_horarios', null,null,null),
      getItem('Cuentas Por Cobrar', '/reportes/cuantas_por_cobrar', null,null,null),

    getItem('Estados de Tareas', '/configuracion/estados_tareas', null,null,null),
    getItem('Medios de pago', '/configuracion/medios_pago', null,null,null),

*/}  
    <Route path="/configuracion/tipo_tareas" element={<TiposTareasConf />} />
    <Route path="/configuracion/datos_configurables" element={<DatosConfigurablesConf />} />
    <Route path="/configuracion/profesores" element={<ProfesoresConf />} />
    <Route path="/configuracion/sucursales" element={<SucursalesConf />} />
    <Route path="/configuracion/usuarios" element={<UsuariosConf />} />
    <Route path='/configuracion/requisitos' element={<RequisitosConf />} />
    <Route path='/configuracion/seguridad' element={<EventosSeguridadConf />} />
    <Route path='/configuracion/gypasss' element={<GypasssConf />} />
    <Route path='/configuracion/plataformas_externas' element={<PlataformasExternasConf />} />
    <Route path='/configuracion/zoom' element={<ConeccionZoomConf />} />
    <Route path='/configuracion/calificaciones' element={<CalificacionesConf />} />
    <Route path='/configuracion/plataformas_externas' element={<PlataformasExternasConf />} />
    <Route path='/configuracion/medios_pago' element={<MediosPagoConf />} />
    <Route path='/configuracion/crear_usuario' element={<CreateUserConf />} />


      </Routes>
           </SideBar>
           </BrowserRouter>    
        </>
    )
}

export default AdminPage;