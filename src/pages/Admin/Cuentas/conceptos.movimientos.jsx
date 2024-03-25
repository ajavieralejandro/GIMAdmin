import CajasTables from '../../../components/CajasTables/CajasTables';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import GenericSelect from '../../../components/GenericSelect/GenericSelect';
import {Button} from 'antd';
import SearchButton from '../../../components/SearchButton/SearchButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchMovimientos } from '../../../utils/fetchs';
const columns = [

  {
    title: 'Descripcion',
    dataIndex: 'descripcion',
    key: 'descripcion',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Abreviatura',
    dataIndex: 'abreviatura',
    key: 'abreviatura',
  },
  {
    title: 'Categoria',
    dataIndex: 'categoria',
    key: 'categoria',
  },
  {
    title: 'Real',
    key: 'active',
    dataIndex: 'active',
    render: (_, { active }) => (
      <>
        {active?<CheckCircleOutlined />:null}
      </>
    ),
  },
  {
    title: 'Tipo por Defecto',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Aplica a CAC',
    dataIndex: 'CAC',
    key: 'CAC',
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
    descripcion: 'ABONOS',
    abreviatura: 'ABONOS',
    categoria: 'ABONOS',
    type : 'Inegreso',
    active: true,
  },
  
 
];
const ConceptoMovimientosCuentas = () =>{
  const [movimientos,setMovimientos] = useState([]);
  useEffect(()=>{
    console.log("Hola");
    fetchMovimientos();
    fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/movimientos')
    .then(response=>response.json())
    .then(data=>setMovimientos(data.data));
  }
  ,[])
  let navigate = useNavigate();
  const handleClick = () =>{
    navigate('/cuentas/crear_movimiento');
  }
  const handleCreate = () =>{
    dispatch();
  }
    return(
        <>
        <div className='text-left w-1/3'>
          <GenericSelect placeholder={"Categoria"} />

        </div>
        <div className='text-right'>
          <SearchButton />
          <Button onClick={()=>handleClick()} className="m-2">Crear </Button>

        </div>
        <CajasTables data={movimientos} columns={columns} />
        </>
    )
}

export default ConceptoMovimientosCuentas;