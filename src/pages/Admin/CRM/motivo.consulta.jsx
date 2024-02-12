import { Button } from "antd";
import SearchButton from "../../../components/SearchButton/SearchButton";
import GenericTable from "../../../components/GenericTable/GenericTable";
const columns =[];
const data = [];

const MotivoConsultaCRM = () =>{
    return(
        <>
        <div className="text-right">
            <SearchButton />
            <Button className="m-2">Crear</Button>
        </div>
        <div>
            <GenericTable data={data} columns={columns} />
        </div>
        </>
    )
}

export default MotivoConsultaCRM;