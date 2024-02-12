import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import GenericTable from "../../../components/GenericTable/GenericTable";
const IngresosGastosReportes = () =>{

    const columns = [
        {
            title: 'año',
            dataIndex: 'anio',
            key: 'anio',
          },
          {
            title: 'Enero',
            dataIndex: 'enero',
            key: 'enero',
          },
          {
            title: 'Febrero',
            dataIndex: 'febrero',
            key: 'febrero',
          },
          {
            title: 'Marzo',
            dataIndex: 'marzo',
            key: 'marzo',
          },
          {
            title: 'Abril',
            dataIndex: 'abril',
            key: 'abril',
          },
          {
            title: 'May.',
            dataIndex: 'mayo',
            key: 'mayo',
          },
          {
            title: 'Jun.',
            dataIndex: 'junio',
            key: 'junio',
          },
          {
            title: 'Jul.',
            dataIndex: 'julio',
            key: 'julio',
          },
          {
            title: 'Ago.',
            dataIndex: 'agosto',
            key: 'agosto',
          },
          {
            title: 'Sep.',
            dataIndex: 'septiembre',
            key: 'septiembre',
          },
          {
            title: 'Oct.',
            dataIndex: 'octubre',
            key: 'octubre',
          },
          {
            title: 'Nov',
            dataIndex: 'noviembre',
            key: 'noviembre',
          },
          {
            title: 'Dic',
            dataIndex: 'diciembre',
            key: 'diciembre',
          },
          {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
          },
    ]

    const data = [
        {
            anio:'2024',
            enero:'1.000.003',
            febrero:'2.001.002',
            marzo:'0.00',
            abril:'0.00',
            mayo:'0.00',
            junio:'0.00',
            julio:'0.00',
            agosto:'0.00',
            septiembre:'0.00',
            octubre:'0.00',
            noviembre:'0.00',
            diciembre:'0.00',
            total:'3.001.005',

        }
    ]

    return(
        <>
            <GenericSelect placeholder={"Sucursal"} />
            <GenericSelect placeholder={"Vista"} />
            <GenericTable data={data} columns={columns} />
        </>
    )
}

export default IngresosGastosReportes;