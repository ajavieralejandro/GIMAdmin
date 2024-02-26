import React,{useState} from 'react';
//Iconos
import { IdcardOutlined,ShoppingCartOutlined,TrophyOutlined,ToolOutlined,LaptopOutlined,DollarOutlined, HeartFilled,NotificationOutlined,CalculatorOutlined,
   UserOutlined, MailOutlined,AppstoreOutlined ,SettingOutlined,SnippetsOutlined} from '@ant-design/icons';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }


const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label:  <Link to='/home'>`option${subKey}`</Link>,
      };
    }),
  };
});

const itemTop=[];

const items3 = [
    getItem('Clientes', 'clientes', <UserOutlined />, [
      getItem('Clientes', '/clientes', null,null,null),

      getItem('Cuenta Corriente', '/clientes/cuenta_corriente', null,null,null),
   

    
    ]),
    getItem('Fidelizacion', 'Fidelizacion', <TrophyOutlined />, [
      getItem('Lista de Premios', '/premios', null,null,null),
      getItem('Reglas Puntajes', '/fidelizacion/reglas', null,null,null),
      getItem('Covertura de Puntos', '/covertura', null,null,null),
      getItem('Listados', '/fidelizacion/listados', null,null,null),
      getItem('Configuracion de Herramientas', '/fidelizacion/herramientas', null,null,null),
      getItem('Niveles de Fidelización', '/fidelizacion/niveles', null,null,null),
      getItem('Beneficios', '/fidelizacion/beneficios', null,null,null),





  ]),
    getItem('Cuentas', 'cuentas', <CalculatorOutlined />, [
        getItem('Conceptos de Movimientos', '/cuentas/conceptos_movimiento', null,null,null),

        getItem('Movimientos', '/cuentas/movimientos_internos', null,null,null),
        getItem('Cajas', '/cajas', null,null,null),
        getItem('Apertura/Cierre', '/aperturas_cierres', null,null,null),
        getItem('Categorias de conceptos', '/categorias_concepto', null,null,null),


      
      ]),
    
      getItem('CRM', 'CRM', <IdcardOutlined />, [
        getItem('Seguimiento Prospectos', '/crm/seguimiento', null,null,null),
        getItem('Control de seguimiento', '/crm/control_seguimiento', null,null,null),
        getItem('Acciones Seguimiento', '/crm/acciones_seguimiento', null,null,null),

        getItem('Registro consultas', '/crm/registro_consultas', null,null,null),
        getItem('Referentes', '/crm/referentes', null,null,null),
        getItem('Distribucion Usuario', '/crm/distribucion_usuario', null,null,null),
        getItem('Origenes prospecto', '/crm/origenes_prospecto', null,null,null),
        getItem('Motivo Consulta', '/crm/motivo_consulta', null,null,null),
        getItem('Perfilados', '/crm/perfilados', null,null,null),







        

    ]),
      getItem('Ventas', 'ventas',<DollarOutlined /> , [
        getItem('Actividades', '/ventas/actividades', null,null,null),
        getItem('Abonos y adiciones', '/ventas/abonos_adicionales', null,null,null),
        getItem('horarios', '/ventas/horarios', null,null,null),
        getItem('Clases Programadas', '/ventas/clases_programadas', null,null,null),
        getItem('Productos', '/ventas/productos', null,null,null),
        getItem('Comprobantes', '/ventas/comprobantes', null,null,null),
        getItem('Ajustes de Precios', '/ventas/ajustes_precios', null,null,null),
     
        getItem('Acciones Recurrentes', '/ventas/acciones_recurrentes', null,null,null),
        getItem('Descuentos', '/ventas/descuentos', null,null,null),
        getItem('Ajuste Comprobantes', '/ventas/ajustes_comprobantes', null,null,null),
        getItem('Reservas Fijas', '/ventas/reservas_fijas', null,null,null),
        getItem('Resumen Ventas', '/ventas/resumen_ventas', null,null,null),














   





    ]),
    
   
    getItem('Facturacion', 'Facturacion', <MailOutlined />, [
        getItem('Configuracion', '/facturacion/configuracion', null,null,null),
        getItem('Comprobantes', '/facturacion/comprobantes', null,null,null),
   





    ]),
    getItem('Pagos Electronicos', 'Pagos', <ShoppingCartOutlined />, [
        getItem('Configuracion', '/pagos/configuracion', null,null,null),
        getItem('Operaciones Registradas', '/pagos/operaciones', null,null,null),
   





    ]),

    getItem('Entrenamiento', 'Entrenamiento', <HeartFilled />, [
        getItem('Ejercicios', '/entrenamiento/ejercicios', null,null,null),
        getItem('Plantillas Entrenamiento', '/entrenamiento/plantillas', null,null,null),
        getItem('Planes', '/entrenamiento/planes', null,null,null),
        getItem('Vencimiento Planes', '/entrenamiento/vencimiento_planes', null,null,null),
        getItem('WODs', '/entrenamiento/wods', null,null,null),
        getItem('Control Clases', '/entrenamiento/control_clases', null,null,null),




   





    ]),

    
    getItem('Reportes', 'Reportes', <SnippetsOutlined />, [
      getItem('Indicadores', '/reportes/indicadores', null,null,null),
      getItem('Ventas por Producto', '/reportes/ventas_productos', null,null,null),
      getItem('Ventas Actividad Principal', '/reportes/ventas_actividad_principal', null,null,null),
      getItem('Cobros Realizados', '/reportes/cobros_realizados', null,null,null),
      getItem('Inscripciones por Actividad', '/reportes/inscripciones_actividad', null,null,null),
      getItem('Asistencias', '/reportes/asistencias', null,null,null),
      getItem('Padron Clientes', '/reportes/padron_clientes', null,null,null),
      getItem('Historial Clientes', '/reportes/historial_clientes', null,null,null),
      getItem('Ingreso Establecimiento', '/reportes/ingreso_establecimiento', null,null,null),
      getItem('Ingresos y Gastos', '/reportes/ingresos_gastos', null,null,null),
      getItem('Recuperacion Contraseña', '/reportes/recuperacion_contraseña', null,null,null),
      getItem('Participacion a Clases', '/reportes/participacion_clases', null,null,null),
      getItem('Documentacion Ingresos', '/reportes/documentacion_ingresos', null,null,null),
      getItem('Asistencias por Horario', '/reportes/asistencias_horarios', null,null,null),
      getItem('Cambios de Inscripcion', '/reportes/cambios_inscripcion', null,null,null),
      getItem('Calificacion Profesores', '/reportes/calificacion_profesores', null,null,null),
      getItem('Cuentas Por Cobrar', '/reportes/cuantas_por_cobrar', null,null,null),











  ]),
  getItem('Configuracion', 'Configuracion', <ToolOutlined />, [
    getItem('Datos Configurables', '/configuracion/datos_configurables', null,null,null),
    getItem('Tipos de Tareas', '/configuracion/tipo_tareas', null,null,null),
    getItem('Estados de Tareas', '/configuracion/estados_tareas', null,null,null),
    getItem('Usuarios', '/configuracion/usuarios', null,null,null),
    getItem('Requisitos', '/configuracion/requisitos', null,null,null),
    getItem('Profesores', '/configuracion/profesores', null,null,null),
    getItem('Sucursales', '/configuracion/sucursales', null,null,null),
    getItem('Medios de pago', '/configuracion/medios_pago', null,null,null),
    getItem('Calificaciones', '/configuracion/calificaciones', null,null,null),
    getItem('Gypasss', '/configuracion/gypasss', null,null,null),
    getItem('Zoom', '/configuracion/zoom', null,null,null),
    getItem('Plataformas Externas', '/configuracion/plataformas_externas', null,null,null),
    getItem('Seguridad', '/configuracion/seguridad', null,null,null),





]),
   
  ];



const App = ({children}) => {
    const navigate = useNavigate();
    const onClick = (e,items) => {
        let route = e.key.split("/");
        route = route.pop();
        
        navigate(e.key);
        setPath([e.keyPath[1],route]);
        window.scrollTo(0, 0);
    };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [path,setPath]= useState(['Clientes']);
  const [openKeys, setOpenKeys] = useState(['clientes']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Layout>
    
      <Layout>
        <Sider
          width={250}
          breakpoint="lg"
          collapsedWidth="50"
          style={{
            background: colorBgContainer,
          }}
          
        >
      
         
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items3}
            onClick={event=>onClick(event,items3)}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>{path[0]}</Breadcrumb.Item>
            {path[1]?<Breadcrumb.Item>{path[1]}</Breadcrumb.Item>:null}
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: "100vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div className=''>
            {children}

            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;