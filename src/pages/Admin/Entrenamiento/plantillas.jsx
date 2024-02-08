import SearchInput from "../../../components/SearchInput/search.input";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import { Button } from "antd";
const Plantillas = () =>{
    return(
        <>
            <div className="h-screen w-full">
        <div className="grid grid sm:grid-cols-1 md:grid-cols-4 gap-10 "
        >
       
                <SearchInput placeholder={"Buscar"} />
                <GenericSelect placeholder={"Etiqueta"} />
                <GenericSelect placeholder={"Plan publico"} />
                <Button>Crear</Button>

        </div>
        </div>
        </>
    )
}

export default Plantillas; 