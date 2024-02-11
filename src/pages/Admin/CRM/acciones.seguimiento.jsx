import { Button,Space} from "antd";
import SearchButton from "../../../components/SearchButton/SearchButton";
import GenericTable from "../../../components/GenericTable/GenericTable";

const data = [
    {
        descripcion:'Mandar Whatsapp',
        abreviatura:'WAP',
        dias : '2'
    },
    {
        descripcion:'Mandar Encuesta',
        abreviatura:'ENC',
        dias : '3'
    },
    {
        descripcion:'Primera Clase',
        abreviatura:'PRIM',
        dias : '2'
    },
    {
        descripcion:'ABONO VENCIDO',
        abreviatura:'VEN',
        dias : '5'
    }
];
const columns = [
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
        title: 'Días',
        dataIndex: 'dias',
        key: 'dias',
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

const AccionesSeguimientoCRM = () =>{

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

export default AccionesSeguimientoCRM;