import SelectCajas from "../../../components/SelectCajas/SelectCajas";
import { Button ,Flex} from "antd";
import CajasTables from '../../../components/CajasTables/CajasTables'
import { Space } from "antd";
const columns = [

    {
      title: 'Nro',
      dataIndex: 'nro',
      key: 'nro',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Fecha Apertura',
      dataIndex: 'fecha_apertura',
      key: 'fecha_apertura',
    },
    {
      title: 'Monto Apertura',
      dataIndex: 'monto_apertura',
      key: 'monto_apertura',
    },
    {
        title: 'Fecha Cierre',
        dataIndex: 'fecha_cierre',
        key: 'fecha_cierre',
      },
      {
        title: 'Monto Cierre',
        dataIndex: 'monto_cierre',
        key: 'monto_cierre',
      },
      {
        title: 'Caja',
        dataIndex: 'caja',
        key: 'caja',
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
          <Space size="small">
            <a>Cerrar</a>
    
          </Space>
        ),
      },
  ];
  const data = [
    {
     nro:'3046',
     fecha_apertura:'07/02/2024 14:08 LORENA',
     monto_apertura : '0,00',
     fecha_cierre:'',
     monto_cierre:'',
     caja : '',
     comentarios:'Apertura de Caja'
    },
    
   
  ];
const AperturasCierres = () =>{
    return(
        <>
            <Flex gap="small" wrap="wrap">
            <SelectCajas />
         <Button style={{ marginLeft: 'auto' }}>Abrir Caja</Button>
       


  </Flex> 
  <br />
         <h1 className="text-left">Monto en Caja Abierta :</h1> 
         <CajasTables data={data} columns={columns} />

   </> )
}

export default AperturasCierres;