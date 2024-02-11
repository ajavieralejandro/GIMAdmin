import Date from "../../../components/Date/Date";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
const ClasesProgramadasVentas = () =>{
    return(
        <>
            <div>
                <div className="grid grid-cols-3 gap-2">
                    <GenericSelect />
                    <GenericSelect />
                    <Date />
                </div>
                <div className="grid grid-cols-4 gap-2 pt-6">
                    <GenericSelect />
                    <GenericSelect />
                    <GenericSelect />

                    <Date />
                </div>
            </div>
        </>
    )
}

export default ClasesProgramadasVentas;