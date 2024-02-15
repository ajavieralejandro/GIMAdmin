import SearchInput from "../../../components/SearchInput/search.input";
import Date from "../../../components/Date/Date";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import GenericTable from "../../../components/GenericTable/GenericTable";

const columns = [
    
        {
            title: 'Fecha',
            dataIndex: 'fecha',
            key: 'fecha',
          },
          {
            title: 'Registrado',
            dataIndex: 'fecha_registro',
            key: 'fecha_regristro',
          },
    
]

const data = [

]
const ComprobantesVentas = () =>{
    return (
        <>
        <div>
            <div className="grid grid-cols-4 gap-4"
            >
                <SearchInput placeholder={"Buscar"} />
                <Date />
                <GenericSelect />
                <GenericSelect />
            </div>
        </div>
        </>
    )
}

export default ComprobantesVentas;