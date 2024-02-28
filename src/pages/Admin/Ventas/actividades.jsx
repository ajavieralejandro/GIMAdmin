import SearchInput from "../../../components/SearchInput/search.input";
import GenericTable from "../../../components/GenericTable/GenericTable";
import { Flex,Button, Space } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteActividad } from "../../../store/ventas/ventas.actions";
const ActividadesVentas = () =>{
    let dispatch = useDispatch();
    let selector = useSelector(state=>state.ventas.actividades);
    console.log(selector);
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
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre',
          },
          {
            title: 'Reserva y anulacion',
            key: 'reserva',
            dataIndex: 'reserva',
            render: (_, { reserva }) => (
              <>
                {reserva?<CheckCircleOutlined />:null}
              </>
            ),
          },
          {
            title: 'Cant. Reservas',
            dataIndex: 'cant_reservas',
            key: 'cant_reservas',
          },
          {
            title: 'Action',
            key: 'action',
            render: (actividad) => (
              <Space size="middle">
                <a >Editar</a>
                <a onClick={()=>dispatch(deleteActividad(actividad))}>Borrar</a>
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
                        <GenericTable data={selector} columns={columns} />
        </>
    )
}

export default ActividadesVentas;