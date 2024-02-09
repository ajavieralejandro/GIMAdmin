import { Flex,Checkbox,Button,Space} from "antd";
import GenericTable from "../../../components/GenericTable/GenericTable";
const options = [
    { label: 'Mostrar Activas', value: 'Actives' },
    { label: 'Mostrar Modificadas', value: 'Modificadas' },
  ];

  const data=[
    {
        descripcion: ' ASI002 - Asistencia a clase reservada ',
        tipo:'Suma',
        puntos:'1',
        activa:'01/02/2024',
        parametros:'',
        vencimiento:''
    }
  ];
  const columns = [

    {
      title: 'Descripcion',
      dataIndex: 'descripcion',
      key: 'descripcion',
      render: (text) => <a>{text}</a>,
    },
   
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
    },
    {
        title: 'Puntos',
        dataIndex: 'puntos',
        key: 'puntos',
      },
   
   
    {
      title: 'Activa',
      dataIndex: 'activa',
      key: 'activa',
    },
    {
        title: 'Parametros',
        dataIndex: 'parametros',
        key: 'parametros',
      },
      {
        title: 'Vencimiento',
        dataIndex: 'vencimiento',
        key: 'vencimiento',
      },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Borrar</a>
        </Space>
      ),
    },
  ];const FidelizacionReglasPuntaje = () =>{
    return(
        <>
        <Flex>
        <Checkbox.Group style={{marginRight:'auto'}} options={options} defaultValue={['Actives']}  />
        <Flex style={{marginLeft:'auto'}}>      <Button >Guardar</Button>
        <Button style={{marginLeft:'5%'}}>Cerrar</Button>
</Flex>
  
        </Flex>
        <GenericTable data={data} columns={columns} />
        </>
    )
}

export default FidelizacionReglasPuntaje;