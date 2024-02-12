import SearchButton from "../../../components/SearchButton/SearchButton";
import { Button } from "antd";
import GenericTable from "../../../components/GenericTable/GenericTable";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
const DatosConfigurablesConf = () =>{
    return(
        <>
            <div>
                <GenericSelect placeholder={"Datos de"} />
            </div>
            <div className="text-right">
                <SearchButton />
                <Button>Crear</Button>
            </div>

            <GenericTable data={data} columns={columns} />
        </>
    )
}

export default DatosConfigurablesConf;