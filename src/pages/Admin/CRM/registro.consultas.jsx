import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import Date from "../../../components/Date/Date";
import SearchButton from "../../../components/SearchButton/SearchButton";
const RegistroConsultasCRM = () =>{
    return(
        <>
        <div className="grid grid-cols-3 gap-2">
            <GenericSelect />
            <Date />
            <SearchButton />
        </div>
        <div>
                <h1 className="text-left pt-12 text-2xl"> Realice una nueva Busqueda</h1>
            </div>
        </>
    )
}

export default RegistroConsultasCRM;