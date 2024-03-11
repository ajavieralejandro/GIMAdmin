import SearchInput from "../../../components/SearchInput/search.input";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import GenericTable from "../../../components/GenericTable/GenericTable";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
const columns = [];
const data = [];

const UsuariosConf = () =>{
    let navigate = useNavigate();
    const handleClick = () =>{
       navigate('/configuracion/crear_usuario');
    }
    return(
        <div>
            <div className="text-right">
                <Button onClick={handleClick} type="text">Registrar Usuario</Button>
            </div>
            <div className="pt-8 grid md:grid-cols-5 grid-cols-1 gap-2">
                <GenericSelect placeholder={"Administrador"} />
                <GenericSelect placeholder={"Activo"} />
                <GenericSelect placeholder={"Adm. Usuarios"} />
                <GenericSelect placeholder={"Caja"} />
                <SearchInput />

            </div>
            <GenericTable data={data} columns={columns} />
        </div>
    )
}

export default UsuariosConf;