import Date from "../../../components/Date/Date";
import SearchInput from "../../../components/SearchInput/search.input";
const DocumentacionIngresosReportes = () =>{
    return(
        <>
            <div className="grid grid-cols-4 gap-4">
                <SearchInput />
                <Date />
            </div>
        </>
    )
}

export default DocumentacionIngresosReportes;