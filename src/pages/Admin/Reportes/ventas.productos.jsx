import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import Date from "../../../components/Date/Date";
import SearchButton from "../../../components/SearchButton/SearchButton";
import Checkbox from "antd/es/checkbox/Checkbox";
const VentasProductosReportes = () =>{
    return(
        <>
            <div className="grid grid-cols-4 gap-2">
                <GenericSelect placeholder={"Tipos"} />
                <Date />
                <GenericSelect placeholder={"Caja"} />
                <GenericSelect placeholder={"Vendedor"} />
            </div>
            <div className="grid grid-cols-4 gap-4 pt-8">
            <GenericSelect placeholder={"Tipos"} />
            <Checkbox><p className="m-1">Solo Ventas Registradas</p></Checkbox>
            <Checkbox><p className="m-1">Inc. Items libres</p></Checkbox>
            <SearchButton />
            </div>

            <h1 className="text-xl text-left pt-12"> Realice una nueva busqueda</h1>
            
        </>
    )
}

export default VentasProductosReportes;