import SearchInput from "../../../components/SearchInput/search.input";
import GenericTable from "../../../components/GenericTable/GenericTable";
import { Flex,Button, Space } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
const HorariosVentas = () =>{
    const data =[{
        descripcion : 'Abdominales',
        dias : 'domingo',
    }
       
    ];
    const columns = [
        {
            title: 'Descripcion',
            dataIndex: 'descripcion',
            key: 'descripcion',
          },
          
          {
            title: 'Dias Permitidos',
            dataIndex: 'dias',
            key: 'dias',
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
    return(
        <>
            <Flex gap="small" wrap="wrap">
                        <SearchInput placeholder={"Buscar"} />
                        <Button style={{ marginLeft: 'auto' }} >Crear</Button>

                        </Flex>
                        <GenericTable data={data} columns={columns} />
        </>
    )
}

export default HorariosVentas;