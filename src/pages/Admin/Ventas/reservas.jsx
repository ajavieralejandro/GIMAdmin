import Date from "../../../components/Date/Date";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import { Button } from "antd";
const ReservasFijasVentas = () =>{
    return(
        <>
            <div className="grid grid-cols-3 gap-2">
                <GenericSelect />
                <GenericSelect />
                <Date />
                
            </div>
            <div className="text-right pt-6 mr-6">
            <Button>Buscar</Button>

            </div>
            <div className="pt-12 text-left justify-center w-full ">
                <h1>Realice una busqueda</h1>
            </div>
        </>
    )
}

export default ReservasFijasVentas;