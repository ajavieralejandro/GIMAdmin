import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import Date from "../../../components/Date/Date";
const Vencimientos = () =>{
    return (
        <>
             <div className="h-screen w-full">
        <div className="grid grid sm:grid-cols-1 md:grid-cols-4 gap-10 "
        >
                        <GenericSelect placeholder={"Renovacion"} />
                        <Date />
                        <GenericSelect placeholder={"Entrenador"} />
                        <GenericSelect placeholder={"Cliente activo"} />


        </div>
            </div>
        </>
    )
}

export default Vencimientos;