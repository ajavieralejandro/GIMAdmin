
import SearchInput from "../../../components/SearchInput/search.input";
import Date from "../../../components/Date/Date";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import { Button } from "antd";
import SearchButton from "../../../components/SearchButton/SearchButton";
import GenericTable from "../../../components/GenericTable/GenericTable";

const columns = [
    {
        title: 'Cliente',
        dataIndex: 'cliente',
        key: 'cliente',
      },
      {
        title: 'Fecha',
        dataIndex: 'fecha',
        key: 'fecha',
      },
      {
        title: 'Puntos',
        dataIndex: 'puntos',
        key: 'puntos',
      },
      {
        title: 'Comentarios',
        dataIndex: 'comentarios',
        key: 'comentarios',
      },
      {
        title: 'Vencimiento',
        dataIndex: 'vencimiento',
        key: 'vencimiento',
      },
];
const data = [
    {
        cliente : 'Videla Rocio',
        fecha : '01/02/2024',
        puntos : '10',
        comentarios : 'Venta de Lomas',
        vencimiento : 'Sin vencimiento'
    }

]; 
const Listados = () =>{
    return(
        <>
             <div className="h-screen w-full">
        <div className="grid grid sm:grid-cols-1 md:grid-cols-4 gap-10 "
        >
       
                <SearchInput placeholder={"Buscar"} />
                <GenericSelect placeholder={"Consulta"} />
                <Date />
                <SearchButton />

        </div>
            <GenericTable data={data} columns={columns} />
            </div>
        </> 
    )
}

export default Listados;