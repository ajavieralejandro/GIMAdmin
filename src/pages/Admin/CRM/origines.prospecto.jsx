import GenericTable from "../../../components/GenericTable/GenericTable";
import SearchButton from "../../../components/SearchButton/SearchButton";
import { Button } from "antd";
const OriginesCRM = () =>{
    return(
        <>
        <div className="text-right">
            <SearchButton />
            <Button className="m-2">Crear</Button>
        </div>
        <GenericTable />
        </>
    )
}

export default OriginesCRM;