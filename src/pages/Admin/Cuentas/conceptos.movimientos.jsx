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
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Real',
    key: 'real',
    dataIndex: 'real',
    render: (_, { real }) => (
      <>
        {real?<CheckCircleOutlined />:null}
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
    dataIndex: 'cac',
    key: 'cac',
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
  const [conceptos,setConceptos] = useState([]);
  useEffect(()=>{
    console.log("Hola");
    fetchMovimientos();
    fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/conceptos_movimiento')
    .then(response=>response.json())
    .then(data=>{
      console.log("Hola");
      console.log(data);
      setConceptos(data);
    });
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
        <CajasTables data={conceptos} columns={columns} />
        </>
    )
}

export default ConceptoMovimientosCuentas;