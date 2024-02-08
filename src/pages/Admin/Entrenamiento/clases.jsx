import GenericTable from "../../../components/GenericTable/GenericTable";
import { Space } from "antd";
import {Button} from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import {Flex} from "antd";
const columns = [

    {
      title: 'Clase',
      dataIndex: 'clase',
      key: 'clase',
      render: (text) => <a>{text}</a>,
    },
   
    {
      title: 'Dia',
      dataIndex: 'dia',
      key: 'dia',
    },
    {
        title: 'Horario',
        dataIndex: 'horario',
        key: 'horario',
      },
   
   
    {
      title: 'Sede',
      dataIndex: 'sede',
      key: 'sede',
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
        clase:'abdominales',
        dia:'Jueves',
        horario:'18:00hs a 20:00hs',
        sede:'Lomas de Zamora'
    },
    
   
  ];
const ControlClases = () =>{
    return <>
    <Flex>
    <Button style={{marginLeft:'auto'}} type="default" icon={<PlusCircleOutlined />}>Nueva Clase</Button>

    </Flex>
    <div className="pt-2">
    <GenericTable data={data} columns={columns} />

    </div>
    </>
}

export default ControlClases;