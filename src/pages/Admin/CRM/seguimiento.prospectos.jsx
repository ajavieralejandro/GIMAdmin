
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import SearchInput from "../../../components/SearchInput/search.input";
import Date from "../../../components/Date/Date";
import Checkbox from "antd/es/checkbox/Checkbox";
import { Button } from "antd";
import GenericTable from "../../../components/GenericTable/GenericTable";
const SeguimientoCRM = () =>{
    return (
        <>
            <div className="grid grid-cols-4 gap-2">
                <SearchInput placeholder={"buscar"} />
                <GenericSelect />
                <Date />
                <GenericSelect />
            </div>
            <div className="grid grid-cols-4 gap-2 pt-12">
                <GenericSelect />
                <GenericSelect />
                <Checkbox>Inc. prospectos</Checkbox>
                <Button>Crear</Button>
            </div>
            <div>
                <h1 className="text-left pt-12 text-2xl">Cantidad Total : 338</h1>
                <GenericTable />
            </div>
        </>
    )
}

export default SeguimientoCRM;