import CajasTables from '../../../components/CajasTables/CajasTables'
import { Space } from 'antd';
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
      abreviatura: '07',
     
      active: true,
    },
    
   
  ];
const Categorias = () =>{
    return <>
                <CajasTables data={data} columns={columns} />

    </>
}

export default Categorias;