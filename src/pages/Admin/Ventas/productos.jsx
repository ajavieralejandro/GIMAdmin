import GenericTable from "../../../components/GenericTable/GenericTable";
import { CheckCircleOutlined } from "@ant-design/icons";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import SearchInput from "../../../components/SearchInput/search.input";
import { Space,Checkbox, Button } from "antd";
import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
const columns = [
    {
        title: 'nombre',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Disponible',
        key: 'disponible',
        dataIndex: 'disponible',
        render: (_, { disponible }) => (
          <>
            {disponible?<CheckCircleOutlined />:null}
          </>
        ),
      },
      {
        title: 'Precio',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Costo Unit.',
        dataIndex: 'cost',
        key: 'cost',
      },
      {
        title: 'stock',
        dataIndex: 'stock',
        key: 'stock',
      },
      {
        title: 'Comentarios',
        dataIndex: 'comentarios',
        key: 'comentarios',
      },
      {
        title: 'Action',
        key: 'action',
        render: (e) => (
          <Space size="middle">
            <a>Editar</a>
            <a>Borrar</a>
          </Space>
        ),
      },
      
    
];

const ProductosVentas = ()=>{
  let navigate = useNavigate();
  const handleClick = () =>{
    navigate("/ventas/crear_producto");
  }
  const [productos,setProductos] = useState([]);
  useEffect(()=>{
    fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/productos')
    .then(res=>res.json())
    .then(data=>setProductos(data));
  },[]);
    return(
        <>
            <div className="grid grid-cols-3 gap-2">
                <SearchInput placeholder={"Buscar..."} />
                <div></div>
                <div className="text-right"
                >
                                <Button onClick={()=>handleClick()}>Crear</Button>
    
                </div>

            </div>
        
            <div className="pt-12">
              <GenericTable  data={productos} columns={columns} />

            </div>
        </>
    )
}

export default ProductosVentas;