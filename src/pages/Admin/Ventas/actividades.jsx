import SearchInput from "../../../components/SearchInput/search.input";
import GenericTable from "../../../components/GenericTable/GenericTable";
import { Flex,Button, Space } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';

const ActividadesVentas = () =>{
    const navigate = useNavigate();

    const handleClick = () =>{
      navigate('/ventas/crear_actividad');
    }

    const data =[{
        descripcion : '8 clases',
        active : true,
        reservas : '8 reservas'
    }
       
    ];
    const columns = [
        {
            title: 'Descripcion',
            dataIndex: 'descripcion',
            key: 'descripcion',
          },
          {
            title: 'Reserva y anulacion',
            key: 'active',
            dataIndex: 'active',
            render: (_, { active }) => (
              <>
                {active?<CheckCircleOutlined />:null}
              </>
            ),
          },
          {
            title: 'Cant. Reservas',
            dataIndex: 'reservas',
            key: 'reservas',
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
                        <Button onClick={()=>handleClick()} style={{ marginLeft: 'auto' }} >Crear</Button>

                        </Flex>
                        <GenericTable data={data} columns={columns} />
        </>
    )
}

export default ActividadesVentas;