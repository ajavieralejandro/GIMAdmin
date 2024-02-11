import SearchInput from "../../../components/SearchInput/search.input";
import GenericTable from "../../../components/GenericTable/GenericTable";
const data = [];
const columns = [];

const ReferentesCRM = () =>{
    return(
        <>
        <div className="text-left">
            <SearchInput />
        </div>
        <GenericTable  data={data} columns={columns}/>

        </>
    )
}

export default ReferentesCRM;