import SearchButton from "../../../components/SearchButton/SearchButton";
import { Button } from "antd";
import GenericTable from "../../../components/GenericTable/GenericTable";
import { Space } from "antd";
const columns =[
    {
        title: 'Descripcion',
        dataIndex: 'descripcion',
        key: 'descripcion',
      },
      {
        title: 'Abreviatura',
        dataIndex: 'abreviatura',
        key: 'abreviatura',
      },
      {
        title: 'Tipo',
        dataIndex: 'tipo',
        key: 'tipo',
      },
      {
        title: 'Recargo',
        dataIndex: 'recargo',
        key: 'recargo',
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
        descripcion :'Correccion de Caja',
        abreviatura:'CORRECCION',
        tipo:'Plataforma Online',
        recargo:'0%'
    }
]
const MediosPagoConf = () =>{
    return(
        <>
        <div>
            <div className="text-right">
                <SearchButton/>
                <Button className="m-2">Crear</Button>

            </div>
            <GenericTable columns={columns} data={data} />
        </div>

        </>
    )
}

export default MediosPagoConf;