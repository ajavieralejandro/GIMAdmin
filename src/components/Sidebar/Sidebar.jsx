import React from 'react';
//Iconos
import { LaptopOutlined,DollarOutlined, HeartFilled,NotificationOutlined,CalculatorOutlined, UserOutlined, MailOutlined,AppstoreOutlined ,SettingOutlined} from '@ant-design/icons';

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


const items3 = [
    getItem('Clientes', '/clientes', <UserOutlined />,null, null),
    getItem('Cuentas', 'sub1', <CalculatorOutlined />, [
        getItem('Conceptos de Movimientos', '/conceptos_movimiento', null,null,null),

        getItem('Movimientos', '/movimientos', null,null,null),
        getItem('Cajas', '/cajas', null,null,null),
        getItem('Apertura/Cierre', '/aperturas_cierres', null,null,null),
        getItem('Categorias de conceptos', '/categorias_concepto', null,null,null),


      
      ]),
      getItem('Ventas', 'sub0', <MailOutlined />, [
        getItem('Actividades', '/ventas/actividades', null,null,null),
        getItem('Abonos y adiciones', '/ventas/abonos_adicionales', null,null,null),
        getItem('horarios', '/ventas/horarios', null,null,null),
        getItem('Clases Programadas', '/ventas/clases_programadas', null,null,null),
        getItem('Productos', '/ventas/productos', null,null,null),
        getItem('Comprobantes', '/ventas/comprobantes', null,null,null),
        getItem('Ajustes de Precios', '/ventas/ajustes_precios', null,null,null),
        getItem('Inscripciones', '/ventas/inscripciones', null,null,null),
        getItem('Renovaciones', '/ventas/renovaciones', null,null,null),
        getItem('Procesar Debitos', '/ventas/debitos', null,null,null),
        getItem('Acciones Recurrentes', '/ventas/acciones_recurrentes', null,null,null),
        getItem('Descuentos', '/ventas/descuentos', null,null,null),
        getItem('Ajuste Comprobantes', '/ventas/comprobantes', null,null,null),
        getItem('Reservas Fijas', '/ventas/reservas_fijas', null,null,null),
        getItem('Resumen Ventas', '/ventas/resumen_ventas', null,null,null),














   





    ]),
    
    getItem('Fidelizacion', 'sub2', <MailOutlined />, [
        getItem('Lista de Premios', '/premios', null,null,null),
        getItem('Reglas Puntajes', '/puntajes', null,null,null),
        getItem('Covertura de Puntos', '/covertura', null,null,null),
        getItem('Listados', '/listados', null,null,null),
        getItem('Configuracion de Herramientas', '/herramientas', null,null,null),
        getItem('Niveles de Fidelización', '/niveles', null,null,null),
        getItem('Beneficios', '/beneficios', null,null,null),





    ]),
    getItem('Facturacion', 'sub3', <MailOutlined />, [
        getItem('Configuracion', '/facturacion/configuracion', null,null,null),
        getItem('Comprobantes', '/facturacion/comprobantes', null,null,null),
   





    ]),
    getItem('Pagos Electronicos', 'sub4', <DollarOutlined />, [
        getItem('Configuracion', '/pagos/configuracion', null,null,null),
        getItem('Operaciones Registradas', '/pagos/operaciones', null,null,null),
   





    ]),

    getItem('Entrenamiento', 'sub5', <HeartFilled />, [
        getItem('Ejercicios', '/entrenamiento/ejercicios', null,null,null),
        getItem('Plantillas Entrenamiento', '/entrenamiento/plantillas', null,null,null),
        getItem('Planes', '/entrenamiento/planes', null,null,null),
        getItem('Vencimiento Planes', '/entrenamiento/vencimiento_planes', null,null,null),
        getItem('WODs', '/entrenamiento/wods', null,null,null),
        getItem('Control Clases', '/entrenamiento/control_clases', null,null,null),




   





    ]),
   
  ];
const App = ({children}) => {
    const navigate = useNavigate();
    const onClick = (e) => {
        navigate(e.key);
        window.scrollTo(0, 0);
    };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
   
      >
      
        <Navbar />
      </Header>
      <Layout>
        <Sider
          width={200}
          breakpoint="lg"
          collapsedWidth="0"
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
            onClick={onClick}
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
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;