import { Checkbox ,Button} from "antd";
import GenericTable from "../../../components/GenericTable/GenericTable";
const AjustesPreciosVentas = () =>{
    return (
        <>
        <div className="grid grid-cols-4">
            <Checkbox>Abonos y adicionales</Checkbox>
            <Checkbox>Productos</Checkbox>
            <Checkbox>Solo disponibles</Checkbox>
            <Checkbox>Solo modificados</Checkbox>

        </div>
        <div className="text-right pt-2">
            <Button className="m-2">Guardar</Button>
            <Button>Cancelar</Button>
        </div>
        <div className="text-left pt-2">
            <p>items actualizados : 0</p>
        </div>
        <div className="pt-6">
            <GenericTable />
        </div>

        </>
    )
}

export default AjustesPreciosVentas;