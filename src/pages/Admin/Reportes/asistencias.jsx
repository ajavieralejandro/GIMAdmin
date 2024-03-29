import Date from "../../../components/Date/Date";
import Checkbox from "antd/es/checkbox/Checkbox";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import SearchButton from "../../../components/SearchButton/SearchButton";
const AsistenciasReportes = () =>{
    return(
        <>
            <div className="grid grid-cols-4 gap-4">
                <Date />
                <GenericSelect placeholder={"Sucursal "}/>
                <Checkbox>Solo ventas registradas</Checkbox>
                <GenericSelect placeholder={"Reservar Sin Asistencia "}/>

            </div>
            <div className="text-right">
            <SearchButton />

            </div>
        </>
    )
}

export default AsistenciasReportes;