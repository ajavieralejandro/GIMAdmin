import Date from "../../../components/Date/Date";
import Checkbox from "antd/es/checkbox/Checkbox";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import SearchInput from "../../../components/SearchInput/search.input";
const RecuperacionContraseñaReportes = () =>{
    return(
        <>
            <div className="grid grid-cols-4 gap-4">
                <SearchInput />
                <Date />

            </div>
            <h1 className="text-xl text-left pt-12"> Realice una nueva busqueda</h1>

        </>
    )
}

export default RecuperacionContraseñaReportes;