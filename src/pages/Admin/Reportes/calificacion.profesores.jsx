import Date from "../../../components/Date/Date";
import Checkbox from "antd/es/checkbox/Checkbox";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import SearchButton from "../../../components/SearchButton/SearchButton";
const CalificacionProfesoresReportes = () =>{
    return(
        <>
            <div className="grid grid-cols-4 gap-4">
            <GenericSelect placeholder={"Tipo "}/>

                <Date />
                <GenericSelect placeholder={"Entrenador "}/>


            </div>
            <div className="pt-12">
                <div className="text-left">
                    
                <Checkbox>Solo entrenadores activos</Checkbox>
                <Checkbox>Solo calificaciones activos</Checkbox>

                <SearchButton />
                </div>
            </div>

            <h1 className="text-xl text-left pt-12"> Realice una nueva busqueda</h1>

        </>
    )
}

export default CalificacionProfesoresReportes;