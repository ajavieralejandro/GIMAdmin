import SearchButton from "../../../components/SearchButton/SearchButton";
import GenericTable from "../../../components/GenericTable/GenericTable";
import { CheckCircleOutlined } from "@ant-design/icons";
const data = [
    {
        sucursal : 'Lomas de Zamora',
        capacidad : '35',
        reserva : true,
        condicional:true,
        minutos : '30',
        control_dni:true,
        control_edad:true,
    }
];
const columns = [
    
        {
            title: 'Sucursal',
            dataIndex: 'sucursal',
            key: 'sucursal',
          },
          {
            title: 'Capacidad Maxima',
            dataIndex: 'capacidad',
            key: 'capacidad',
          },
          {
            title: 'Reserva Obligatoria',
            key: 'reserva',
            dataIndex: 'reserva',
            render: (_, { reserva }) => (
              <>
                {reserva?<CheckCircleOutlined />:null}
              </>
            ),
          },
          {
            title: 'Ingreso Reserva condicional',
            key: 'condicional',
            dataIndex: 'condicional',
            render: (_, { condicional }) => (
              <>
                {condicional?<CheckCircleOutlined />:null}
              </>
            ),
          },
          {
            title: 'Minutos margen reserva',
            dataIndex: 'minutos',
            key: 'minutos',
          },
          {
            title: 'Control DNI',
            key: 'control_dni',
            dataIndex: 'control_dni',
            render: (_, { control_dni }) => (
              <>
                {control_dni?<CheckCircleOutlined />:null}
              </>
            ),
          },


    
]
const SucursalesConf = () =>{
    return(
        <>
            <div className="text-left">
                <SearchButton />
            </div>
            <GenericTable data={data} columns={columns} />

        </>
    )
}

export default SucursalesConf;