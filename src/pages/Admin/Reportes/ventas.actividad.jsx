import Date from "../../../components/Date/Date";
import Checkbox from "antd/es/checkbox/Checkbox";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import SearchButton from "../../../components/SearchButton/SearchButton";
const VentasActividadPrincipalReportes = () =>{
    return(
        <>
            <div className="grid grid-cols-4 gap-4">
                <Date />
                <GenericSelect placeholder={"caja "}/>
                <Checkbox>Solo ventas registradas</Checkbox>
                <SearchButton />

            </div>
        </>
    )
}

export default VentasActividadPrincipalReportes;