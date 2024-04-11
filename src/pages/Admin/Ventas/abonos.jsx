import { Flex } from 'antd';
import GenericSelect from '../../../components/GenericSelect/GenericSelect';
import Search from "antd/es/input/Search";
import {Button,Space} from 'antd';
import {Checkbox} from 'antd';
import GenericTable from '../../../components/GenericTable/GenericTable';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';



const AbonosVentas = () =>{
  const [abonos,setAbonos]=useState([]);
  useEffect(()=>{
    fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/abonos')
    .then(res=>res.json())
    .then(data=>setAbonos(data))

  },[])
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate('/ventas/crear_abono');
  }

  const handleBorrar = (e) =>{
    fetch(`https://stingray-app-4224s.ondigitalocean.app/api/v1/abonos/${e.id}
      `,{ method: 'DELETE' })
      .then(res=>res.json())
      .then(()=>{
        setAbonos(abonos.filter(abono=>abono.id!=e.id))
      });
  
  }



const columns=[
  {
      title: 'Descripcion',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
    },
    {
      title: 'Precio',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Disponible',
      key: 'venta',
      dataIndex: 'venta',
      render: (_, { venta }) => (
        <>
          {venta?<CheckCircleOutlined />:null}
        </>
      ),
    },
    {
      title: 'Condiciones y Comentarios',
      dataIndex: 'comentarios',
      key: 'comentarios',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a >Editar</a>
          <button onClick={()=>handleBorrar(record)} >Borrar</button>
        </Space>
      ),
    },
];




    return(
        <>

                <div className='grid grid-cols-5 gap-4 overflow-hidden items-center'>
                    <GenericSelect />
                    <GenericSelect />
                    <GenericSelect />
                    <GenericSelect />
                    <GenericSelect  placeholder="Matricula" />



                </div>
            
              
                <div className='grid grid-cols-2 md:grid-cols-4 gap-10 pt-12 items-center'>
                <Search style={{width:200}} placeholder={"Buscar"} />

                <div className='text-left m-2 '>
                <Checkbox>
                    Solo Disponibles</Checkbox> 
                </div>
              
                <Button onClick={()=>handleClick()} >Crear</Button>
                <Button >Buscar</Button>
          


                </div>
                <div className='pt-8'>
                    <GenericTable columns={columns} data={abonos} />

                </div>
        </>
    )
}

export default AbonosVentas;