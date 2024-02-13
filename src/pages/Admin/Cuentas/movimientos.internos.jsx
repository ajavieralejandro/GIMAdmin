import SearchInput from "../../../components/SearchInput/search.input";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import Date from "../../../components/Date/Date";
import Checkbox from "antd/es/checkbox/Checkbox";
import { Button } from "antd";
import GenericTable from "../../../components/GenericTable/GenericTable";
import { Space } from "antd";
const columns =[
    {
        title: 'Fecha',
        dataIndex: 'fecha',
        key: 'fecha',
      },
      {
        title: 'Registrado',
        dataIndex: 'registrado',
        key: 'registrado',
      },
      {
        title: 'NRO',
        dataIndex: 'numero',
        key: 'numero',
      },
      {
        title: 'Estado',
        dataIndex: 'estado',
        key: 'estado',
      },
      {
        title: 'Descripcion',
        dataIndex: 'descripcion',
        key: 'descripcion',
      },
      {
        title: 'Medio de Pago',
        dataIndex: 'medio_pago',
        key: 'medio_pago',
      },
      {
        title: 'Monto',
        dataIndex: 'monto',
        key: 'monto',
      },
    
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>anular</a>
            
          </Space>
        ),
      },
];
const data = [
    {
        fecha : '13/02/2024',
        registrado : 'Ariana',
        numero : '1100',
        concepto : 'Apertura Caja',
        estado : 'Registrado',
        descripcion : '',
        medio_pago : 'PESOS EFECTIVO',
        monto : '5000'

    }
];
const MovimientosInternosCuentas = () =>{
    return(
        <>
           <div className="text-right">
                    <Button>Crear</Button>
            </div>
            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-2">
                <SearchInput />
                <GenericSelect placeholder={"Concepto"} />
                <GenericSelect placeholder={"Categoria"} />


            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-8">
                <Date />
                <GenericSelect placeholder={"Caja"} />
                <Checkbox className="ml-5"><p className="text-md m-1">Solo Reales</p></Checkbox>
            </div>
         
            <div className="pt-8">
                <GenericTable data={data} columns={columns} />
            </div>
        </>
    )
}

export default MovimientosInternosCuentas;