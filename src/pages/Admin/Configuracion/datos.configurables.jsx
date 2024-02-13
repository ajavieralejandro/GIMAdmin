import SearchButton from "../../../components/SearchButton/SearchButton";
import { Button } from "antd";
import GenericTable from "../../../components/GenericTable/GenericTable";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import { Space } from "antd";

const columns = [
    {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
      },
      {
        title: 'Categoria',
        dataIndex: 'categoria',
        key: 'categoria',
      },
      {
        title: 'Tipo',
        dataIndex: 'tipo',
        key: 'tipo',
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

const data =[
    {
        nombre:'Contacto de Urgencia',
        categoria : 'Contacto de Urgencia',
        tipo :'Texto'
    }
]

const DatosConfigurablesConf = () =>{
    return(
        <>
            <div className=" flex items-stretch pb-12">
                <div className="text-left w-1/2">
                <GenericSelect placeholder={"Datos de"} />

                </div>
                <div className="text-right ml-auto "  >
                <SearchButton />
                <Button className="m-1">Crear</Button>
            </div>
            </div>
         

            <GenericTable data={data} columns={columns} />
        </>
    )
}

export default DatosConfigurablesConf;