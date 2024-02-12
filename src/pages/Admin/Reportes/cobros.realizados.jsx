import Date from "../../../components/Date/Date";
import Checkbox from "antd/es/checkbox/Checkbox";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import SearchButton from "../../../components/SearchButton/SearchButton";
const CobrosRealizadosReportes = () =>{
    return(
        <>
            <div className="grid grid-cols-4 gap-4">
            <GenericSelect placeholder={"Tipo "}/>

                <Date />
                <GenericSelect placeholder={"Vendedor "}/>
                <GenericSelect placeholder={"Caja "}/>


            </div>
            <div className="pt-12">
                <div className="text-left">
                    
                <Checkbox>Solo cobros registrados</Checkbox>
                <SearchButton />
                </div>
            </div>
        </>
    )
}

export default CobrosRealizadosReportes;