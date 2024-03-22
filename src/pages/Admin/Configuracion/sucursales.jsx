import SearchButton from "../../../components/SearchButton/SearchButton";
import GenericTable from "../../../components/GenericTable/GenericTable";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import { useEffect,useState} from "react";




const columns = [
    
        {
            title: 'Sucursal',
            dataIndex: 'nombre',
            key: 'nombre',
          },
          {
            title: 'Capacidad Maxima',
            dataIndex: 'capacidad',
            key: 'capacidad',
          },
          
          
          {
            title: 'Minutos margen reserva',
            dataIndex: 'minutos',
            key: 'minutos',
          }


    
]
const SucursalesConf = () =>{
  const [sucursales,setSucursales] = useState([]);

  useEffect(()=>{
    fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/sucursales')
    .then(response=>response.json())
    .then(data=>setSucursales(data.data));

  },
    [sucursales]);
  
  let navigate = useNavigate();
  console.log("Sucursales es : ",sucursales);
  const handleClick = () =>{
    navigate('/configuracion/crear_sucursal');
  }

    return(
        <>
        <div>
        <div className="text-left ">
        <div className="text-right pt-12 pb-12">
        <Button onClick={()=>handleClick()}>Crear Sucursal</Button>
      </div>
    </div>
  
        </div>
         
            <GenericTable data={sucursales} columns={columns} />

        </>
    )
}

export default SucursalesConf;