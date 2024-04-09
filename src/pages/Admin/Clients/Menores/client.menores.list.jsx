
import GenericTable from "../../../../components/GenericTable/GenericTable";
import { Space } from "antd";
const ClientMenoresList = ({menores}) =>{
    const cols = [
        {
            title: 'Nombre',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Apellido',
            dataIndex: 'last_name',
            key: 'last_name',
          },
          {
            title: 'Action',
            key: 'action',
            render: () => (
              <Space size="middle">
                <a>Editar</a>
                <a>Borrar</a>
              </Space>
            ),
          },
    ]
    return(
        <div>
            <GenericTable data={menores} columns={cols} />
        </div>
    )
}

export default ClientMenoresList;