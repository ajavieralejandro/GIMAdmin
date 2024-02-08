import SearchInput from "../../../components/SearchInput/search.input"
import { Flex,Button,Space } from "antd";
import GenericTable from "../../../components/GenericTable/GenericTable";

const columns = [

    {
      title: 'Descripcion',
      dataIndex: 'descripcion',
      key: 'descripcion',
      render: (text) => <a>{text}</a>,
    },
   
    {
      title: 'Categoria',
      dataIndex: 'categoria',
      key: 'categoria',
    },
    {
        title: 'Nro Maquin',
        dataIndex: 'nro_maquina',
        key: 'nro_maquina',
      },
   
   
    {
      title: 'Comentarios',
      dataIndex: 'comentarios',
      key: 'comentarios',
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
      descripcion: 'ABDO',
      categoria: 'CROSS',
      nro_maquina: '0',
      comentarios : 'Ejercicios',
    },
    
   
  ];

const Ejercicios = () =>{
    return(<>
                        <Flex gap="small" wrap="wrap">
                        <SearchInput placeholder={"Buscar"} />
                        <Button style={{ marginLeft: 'auto' }} >Crear</Button>

                        </Flex>
                        <GenericTable
                        data={data} columns={columns} 
                        />

    </>)
}

export default Ejercicios;