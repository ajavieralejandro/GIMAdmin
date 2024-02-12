import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import Date from "../../../components/Date/Date";
import SearchButton from "../../../components/SearchButton/SearchButton";
const HistorialClienteReportes = () =>{
    return(
        <>
            <div className="grid grid-cols-4 gap-2">
                <GenericSelect placeholder={"Tipo"} />
                <Date />
                <GenericSelect placeholder={"Sucursal"} />
                <GenericSelect placeholder={"Abono"} />


            </div>
            <div className="grid grid-cols-4 gap-2">
            <GenericSelect placeholder={"Activo Hoy"} />
            <GenericSelect placeholder={"Activo Fechas"} />
            <GenericSelect placeholder={"Nivel Actual"} />
            <SearchButton />
            </div>

            <h1 className="text-xl text-left pt-12"> Realice una nueva busqueda</h1>

        </>
    )
}

export default HistorialClienteReportes;