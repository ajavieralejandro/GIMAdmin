import SearchInput from "../../../components/SearchInput/search.input";
import GenericTable from "../../../components/GenericTable/GenericTable";
import { Flex,Button, Space } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect,useState} from "react";
import { deleteActividad } from "../../../store/ventas/ventas.actions";
const ActividadesVentas = () =>{
    const [actividades,setActividades] = useState([]);
    let dispatch = useDispatch();
    let selector = useSelector(state=>state.ventas.actividades);
    const navigate = useNavigate();
    useEffect(()=>{
     
        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/actividades')
        .then(response=>response.json())
        .then(data=>{
          setActividades(data);
          })
        }
      

    ,[])
    const handleClick = () =>{
      navigate('/ventas/crear_actividad');
    }


    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
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
            <Flex gap="small m-2 pt-8" wrap="wrap">
                        <SearchInput placeholder={"Buscar"} />
                        <Button onClick={()=>handleClick()} style={{ marginLeft: 'auto' }} >Crear</Button>

                        </Flex>
                        <div className="pt-12">
                        <GenericTable data={actividades} columns={columns} />

                        </div>
        </>
    )
}

export default ActividadesVentas;