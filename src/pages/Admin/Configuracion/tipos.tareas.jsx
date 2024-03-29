import SearchButton from "../../../components/SearchButton/SearchButton";
import { Button } from "antd";
import GenericTable from "../../../components/GenericTable/GenericTable";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import { Space } from "antd";
const columns = [
    {
        title:'Descripcion',
        dataIndex: 'descripcion',
        key:'descripcion'
    },
    {
        title:'Abreviatura',
        dataIndex: 'abreviatura',
        key:'abreviatura'
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
      }
]

const data =[
    {
        descripcion:'Clientes',
        abreviatura:'CONTCLI'
    },
    {
        descripcion:'Mantenimiento',
        abreviatura:'Mant'
    }
]

const TiposTareasConf = () =>{
    return(
        <>
         
            <div className="text-right">
                <SearchButton />
                <Button className="m-2">Crear</Button>
            </div>

            <GenericTable data={data} columns={columns} />
        </>
    )
}

export default TiposTareasConf  ;