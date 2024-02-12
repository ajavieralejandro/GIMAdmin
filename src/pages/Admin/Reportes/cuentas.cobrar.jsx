import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import Date from "../../../components/Date/Date";
import SearchButton from "../../../components/SearchButton/SearchButton";
import Checkbox from "antd/es/checkbox/Checkbox";
const CuentasCobrarReportes = () =>{
    return(
        <>
            <div className="grid grid-cols-4 gap-2">
                <GenericSelect placeholder={"Sucursal"} />
                <GenericSelect placeholder={"Periodo"} />

                <Date />
                <GenericSelect placeholder={"Tipo de deuda"} />


            </div>
            <div className="grid grid-cols-4 gap-2 pt-8">
            <GenericSelect placeholder={"Debito Automatico"} />
            <Checkbox>Periodos sin deudas</Checkbox>
            <div></div>
            <SearchButton />
            </div>

            <h1 className="text-xl text-left pt-12"> Realice una nueva busqueda</h1>

        </>
    )
}

export default CuentasCobrarReportes;