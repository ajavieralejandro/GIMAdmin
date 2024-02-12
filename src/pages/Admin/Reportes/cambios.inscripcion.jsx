
import SearchInput from "../../../components/SearchInput/search.input";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import Date from "../../../components/Date/Date";
const CambiosInscripcionReportes = ()=>{
    return(
        <>
            <div className="grid grid-cols-4 gap-4"> 
            <SearchInput />
            <Date />
            <GenericSelect placeholder={"Abono Original"} />
            <GenericSelect placeholder={"Abono nuevo"} />

            </div>
            <h1 className="text-xl text-left pt-12"> Realice una nueva busqueda</h1>

        </>
    )
}

export default CambiosInscripcionReportes;