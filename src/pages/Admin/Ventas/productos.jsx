import GenericTable from "../../../components/GenericTable/GenericTable";
import { CheckCircleOutlined } from "@ant-design/icons";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import SearchInput from "../../../components/SearchInput/search.input";
import { Space,Checkbox, Button } from "antd";
import { useEffect ,useState} from "react";
const data = [
    {
        descripcion : 'Cod : 00',
        disponible : true,
        precio :'0.00',
        costo : '0',
        stock : true,
        cant_stock : '70.000',
        comentarios : 'Puntos por venta : USA REGLA'

    }
];
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
  const [productos,setProductos] = useState([]);
  useEffect(()=>{
    fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/productos')
    .then(res=>res.json())
    .then(data=>setProductos(data));
  },[]);
    return(
        <>
            <div className="grid grid-cols-4 gap-2">
                <SearchInput placeholder={"Buscar..."} />
                <GenericSelect />
                <GenericSelect />
                <GenericSelect />

            </div>
            <div className="grid grid-cols-4 gap-2">
                <Checkbox>No usa Stock</Checkbox>
                <Checkbox>Sin stock</Checkbox>
                <Checkbox>Stock bajo</Checkbox>
                <Checkbox>Stock normal</Checkbox>


            </div>
            <div className="text-right"
            >
                            <Button>Crear</Button>

            </div>
            <GenericTable data={productos} columns={columns} />
        </>
    )
}

export default ProductosVentas;