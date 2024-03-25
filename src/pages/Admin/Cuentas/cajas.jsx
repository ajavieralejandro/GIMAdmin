import CajasTables from '../../../components/CajasTables/CajasTables';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Space,Button } from 'antd';
import { useEffect,useState } from 'react';
const columns = [

  {
    title: 'Descripcion',
    dataIndex: 'descripcion',
    key: 'descripcion',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Punto de Venta',
    dataIndex: 'venta',
    key: 'venta',
  },
  {
    title: 'Sucursal',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Activa',
    key: 'active',
    dataIndex: 'active',
    render: (_, { active }) => (
      <>
        {active?<CheckCircleOutlined />:null}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Editar {record.name}</a>
        <a>Saldos</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    descripcion: 'CAJA ADMIN LOMAS',
    venta: '',
    address: 'LAS HERAS 1512 (LOMAS DE ZAMORA)',
    active: true,
  },
  
 
];
const Cajas = () =>{
  const [cajas,setCajas] = useState([]);  
  useEffect(()=>{
    
  },[])
    return(
        <>
        <div className="p-6 text-right">
          <Button>Crear Caja</Button>
        </div>
        <CajasTables data={data} columns={columns} />
        </>
    )
}

export default Cajas;