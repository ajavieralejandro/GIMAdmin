
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import Date from "../../../components/Date/Date";
import SearchButton from "../../../components/SearchButton/SearchButton";
import GenericTable from "../../../components/GenericTable/GenericTable";
const EventosSeguridadConf = ()=>{
    return(
        <>
            <div>
                <div className="grid grid-cols-4 gap-2">
                    <GenericSelect placeholder={"Usuarios"} />
                    <Date />
                    <div>

                    </div>
                    <SearchButton />
                </div>
                <div className="pt-12">
                    <GenericTable />
                </div>
            </div>
        </>
    )
}

export default EventosSeguridadConf;