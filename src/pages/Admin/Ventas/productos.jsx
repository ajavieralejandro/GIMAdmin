import GenericTable from "../../../components/GenericTable/GenericTable";
import { CheckCircleOutlined } from "@ant-design/icons";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import SearchInput from "../../../components/SearchInput/search.input";
import { Space,Checkbox, Button } from "antd";
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
        title: 'Descripcion',
        dataIndex: 'descripcion',
        key: 'descripcion',
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
        dataIndex: 'precio',
        key: 'precio',
      },
      {
        title: 'Costo Unit.',
        dataIndex: 'costo',
        key: 'costo',
      },
      {
        title: 'Usa Stock',
        key: 'Tiene stock',
        dataIndex: 'stock',
        render: (_, { stock }) => (
          <>
            {stock?<CheckCircleOutlined />:null}
          </>
        ),
      },
      {
        title: 'Stock',
        dataIndex: 'cant_stock',
        key: 'cant_stock',
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

const ProductosVentas = ()=>{
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
            <GenericTable data={data} columns={columns} />
        </>
    )
}

export default ProductosVentas;