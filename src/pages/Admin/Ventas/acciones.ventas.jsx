import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import Checkbox from "antd/es/checkbox/Checkbox";
import SearchButton from "../../../components/SearchButton/SearchButton";
import { Button } from "antd";
const AccionesVentas = () =>{
    return(
        <>
            <div className="grid grid-cols-4 gap-4">
                <GenericSelect />
                <GenericSelect />
                <Checkbox>Inc. facturados</Checkbox>
                <Checkbox>Inc. Pagos</Checkbox>

                
            </div>
            <div className="text-right pt-12">     
                        <Button className="m-1">Generar Cobro</Button>
                        <Button className="m-1">Generar Factura</Button>
                        <SearchButton />
</div>
<div className="pt-12 text-left justify-center w-full ">
                <h1>Realice una busqueda</h1>
            </div>
        </>
    )
}

export default AccionesVentas;