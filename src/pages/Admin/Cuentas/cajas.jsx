import CajasTables from '../../../components/CajasTables/CajasTables';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Space,Button } from 'antd';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  let navigate = useNavigate();
  const [cajas,setCajas] = useState([]);  
  //traigo las cajas
  useEffect(()=>{
    fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/cajas')
    .then(res=>res.json())
    .then(data=>{
      let aux = data.map((element)=>{return{...element,sucursal:element.sucursal.nombre}})
      console.log("aux es : ",aux);
      setCajas(aux);
    });
  },[]);

  const columns = [

    {
      title: 'nombre',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
  
    {
      title: 'Sucursal',
      dataIndex: 'sucursal',
      key: 'sucursal',
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
          <a onClick={()=>handleSaldos()}>Saldos</a>
        </Space>
      ),
    },
  ];

  const handleSaldos = () =>{
    navigate('/cajas/movimientos_caja');
  }

  const handleClick = () =>{
    navigate('/cajas/crear_caja');
  }
    return(
        <>
        <div className="p-6 text-right">
          <Button onClick={()=>handleClick()} >Crear Caja</Button>
        </div>
        <CajasTables data={cajas} columns={columns} />
        </>
    )
}

export default Cajas;