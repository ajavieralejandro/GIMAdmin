import SearchInput from "../../../components/SearchInput/search.input";
import { Button } from "antd";
const ProfesoresConf = () =>{
    return (
        <>
            <div className="text-left">
                <SearchInput placeholder={"Buscar"} />
            </div>
            <div className="text-right"
            >
                <Button>Crear</Button>
            </div>
            <h1 className="text-xl text-left pt-12"> Realice una nueva busqueda</h1>

        </>
    )
}

export default ProfesoresConf;