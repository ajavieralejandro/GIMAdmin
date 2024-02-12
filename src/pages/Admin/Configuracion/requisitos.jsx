import GenericTable from "../../../components/GenericTable/GenericTable";
import SearchInput from "../../../components/SearchInput/search.input";
import { Button } from "antd";
const data = [];
const columns = [];
const RequisitosConf = () =>{
    return(
        <>
            <div className="text-left">
                <SearchInput />
            </div>
            <div className="text-right">
                <Button>Crear</Button>
            </div>
            <GenericTable data={data} columns={columns} />
        </>
    )
}

export default RequisitosConf;