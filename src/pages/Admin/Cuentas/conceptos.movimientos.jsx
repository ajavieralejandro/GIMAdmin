import CajasTables from '../../../components/CajasTables/CajasTables';
import { CheckCircleOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import GenericSelect from '../../../components/GenericSelect/GenericSelect';
import {Button} from 'antd';
import SearchButton from '../../../components/SearchButton/SearchButton';

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
    return(
        <>
        <div className='text-left w-1/3'>
          <GenericSelect placeholder={"Categoria"} />

        </div>
        <div className='text-right'>
          <SearchButton />
          <Button className="m-2">Crear </Button>

        </div>
        <CajasTables data={data} columns={columns} />
        </>
    )
}

export default ConceptoMovimientosCuentas;