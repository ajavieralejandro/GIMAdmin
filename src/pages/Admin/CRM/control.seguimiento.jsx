import Date from "../../../components/Date/Date";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import Checkbox from "antd/es/checkbox/Checkbox";
import SearchButton from "../../../components/SearchButton/SearchButton";
import GenericTable from "../../../components/GenericTable/GenericTable";
const ControlSeguimientoCRM = () =>{
    return(
        <>
            <div className="grid grid-cols-3 gap-2">
                <GenericSelect  />
                <Date />
                <div>
                <Checkbox>Pendiente</Checkbox>
                <Checkbox>Realizado</Checkbox>
                </div>
             
       
            </div>
            <div className="text-left grid grid-cols-3 gap-2 pt-8">
                    <GenericSelect />
                    <GenericSelect />
                    <div className="text-right">
                    <SearchButton />
                </div>
                </div>
                <div>
                <h1 className="text-left pt-12 text-2xl">Cantidad Total : 338</h1>
                <GenericTable />
            </div>
                
        </>
    )
}

export default ControlSeguimientoCRM;