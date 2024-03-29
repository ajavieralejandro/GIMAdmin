import { Flex } from 'antd';
import GenericSelect from '../../../components/GenericSelect/GenericSelect';
import Search from "antd/es/input/Search";
import {Button,Space} from 'antd';
import {Checkbox} from 'antd';
import GenericTable from '../../../components/GenericTable/GenericTable';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const columns=[
    {
        title: 'Descripcion',
        dataIndex: 'descripcion',
        key: 'descripcion',
      },
      {
        title: 'Tipo',
        dataIndex: 'tipo',
        key: 'tipo',
      },
      {
        title: 'Precio',
        dataIndex: 'precio',
        key: 'precio',
      },
      {
        title: 'Disponible',
        key: 'active',
        dataIndex: 'active',
        render: (_, { active }) => (
          <>
            {active?<CheckCircleOutlined />:null}
          </>
        ),
      },
      {
        title: 'Condiciones y Comentarios',
        dataIndex: 'condiciones',
        key: 'condiciones',
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>Editar {record.name}</a>
            <a>Borrar</a>
          </Space>
        ),
      },
];


const data = [
    {
        descripcion : '1 Clase Lomas',
        tipo : 'Abono',
        precio : '400',
        active : true,
        condiciones : 'Puntos por Venta Suma 1500'
    }
]

const AbonosVentas = () =>{
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate('/ventas/crear_abono');
  }
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
                    <GenericTable columns={columns} data={data} />

                </div>
        </>
    )
}

export default AbonosVentas;