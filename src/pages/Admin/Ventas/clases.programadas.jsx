import Date from "../../../components/Date/Date";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import { Checkbox, Button,Space } from "antd";
import GenericTable from "../../../components/GenericTable/GenericTable";
import { CheckCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const data = [

    {
        actividad : 'CROSSFIT',
        sucursal : 'Lomas',
        profesor : '',
        fecha  : '12/04/2023',
        reservas :'0/30',
        active:true
    }
];
const columns = [
    
        {
            title: 'Actividad',
            dataIndex: 'actividad',
            key: 'actividad',
          },
          {
            title: 'Sucursal',
            dataIndex: 'sucursal',
            key: 'sucursal',
          },
          
          {
            title: 'Profesor',
            dataIndex: 'profesor',
            key: 'profesor',
          },
          
          {
            title: 'Fecha',
            dataIndex: 'fecha',
            key: 'fecha',
          },
          
          {
            title: 'Reservas',
            dataIndex: 'reservas',
            key: 'reservas',
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
            title: 'Action',
            key: 'action',
            render: (_, record) => (
              <Space size="middle">
                <a>Editar {record.name}</a>
                <a>Borrar</a>
              </Space>
            ),
          },
          
          
    
]
const ClasesProgramadasVentas = () =>{
  let selector = useSelector(state=>state.clases.clases);
  const array_aux = selector.map(element=>{
    return {
      actividad : element.actividades[1],
      profesor : element.profesores[0],
      sucursal : element.sucursal,
      reservas : element.cupo

    }
  })
  let navigate = useNavigate();
  const handleClick = () =>{
    navigate('/ventas/crear_clase');
  }
    return(
        <>
            <div>
                <div className="grid grid-cols-3 gap-2">
                    <GenericSelect />
                    <GenericSelect />
                    <Date />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-6">
                    <GenericSelect />
                    <GenericSelect />
                    <GenericSelect />

                    <Date />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-6">
                    <Checkbox>Solo res</Checkbox>
                    <Checkbox>Solo disp</Checkbox>
                    <Checkbox>En Zoom</Checkbox>
                    <GenericSelect />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-6">
                    <Button onClick={()=>handleClick()}>Crear</Button>
                    <Button>Programar</Button>
                    <Button>Modificacion Masiva</Button>
                    <Button>Borrar</Button>

                    
                </div>
                <div className="pt-12">
                <GenericTable data={array_aux} columns={
                    columns
                } />
                </div>
       
                
            </div>
        </>
    )
}

export default ClasesProgramadasVentas;