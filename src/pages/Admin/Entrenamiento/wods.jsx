import SearchInput from "../../../components/SearchInput/search.input";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import { Button } from "antd";
import GenericTabl from "../../../components/GenericTable/GenericTable";
import Date from "../../../components/Date/Date";
import SearchButton from "../../../components/SearchButton/SearchButton";
import GenericTable from "../../../components/GenericTable/GenericTable";
import { CheckCircleOutlined } from "@ant-design/icons";
import { Space } from "antd";

const columns = [

    {
      title: 'Descripcion',
      dataIndex: 'descripcion',
      key: 'descripcion',
      render: (text) => <a>{text}</a>,
    },
   
    {
      title: 'Actividad',
      dataIndex: 'actividad',
      key: 'actividad',
    },
    {
        title: 'Desde',
        dataIndex: 'desde',
        key: 'desde',
      },
   
   
    {
      title: 'Hasta',
      dataIndex: 'hasta',
      key: 'hasta',
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
        title: 'No activos',
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
  ];
  const data = [
    {
      descripcion: 'Focus Tren Inferior',
      actividad : 'Sin Restriccion',
      desde : '08/02/2024',
      hasta : '09/02/2024',
      disponible:true,
      active:true
    },
    
   
  ];

const Wods = () =>{
    return(
        <>
            <div className="h-screen w-full">
        <div className="grid grid sm:grid-cols-1 md:grid-cols-4 gap-10 "
        >
                <Date />
                <GenericSelect placeholder={"Para etiqueta"} />
                <SearchButton />

                <Button>Crear</Button>
                

        </div>
        <GenericTable data={data} columns={columns} />
            </div>
        </>
    )
}

export default Wods; 