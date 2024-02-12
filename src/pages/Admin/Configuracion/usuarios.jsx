import SearchInput from "../../../components/SearchInput/search.input";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import GenericTable from "../../../components/GenericTable/GenericTable";

const columns = [];
const data = [];

const UsuariosConf = () =>{
    return(
        <>
            <div className="grid grid-cols-5 gap-2">
                <GenericSelect placeholder={"Administrador"} />
                <GenericSelect placeholder={"Activo"} />
                <GenericSelect placeholder={"Adm. Usuarios"} />
                <GenericSelect placeholder={"Caja"} />
                <SearchInput />

            </div>
            <GenericTable data={data} columns={columns} />
        </>
    )
}

export default UsuariosConf;