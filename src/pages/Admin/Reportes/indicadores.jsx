import IndicadoresCard from "../../../components/IndicadoresCard/indicadores.card";
import GenericSelect from "../../../components/GenericSelect/GenericSelect";
const IndicadoresReportes = ()=>{
    return(
        <>
            <div className="grid grid-cols-3 gap-4">
                <GenericSelect placeholder={"Valores Periodo Actual"} />
                <GenericSelect placeholder={"Sucursal"} />

            </div>
           
            <div className="grid grid-cols-3 gap-2 pt-8">
                <IndicadoresCard text="nuevos prospectos" number="4" />
                <IndicadoresCard text="prospectos con invitaciones" number="0" />
                <IndicadoresCard text="conversiones" number="1" />
                <IndicadoresCard text="ICP (general)" number="25%" />
                <IndicadoresCard text="ICP (invitaciones)" number="0%" />
                <IndicadoresCard text="ICP (participacion)" number="25%" />




            </div>
        </>
    )
}

export default IndicadoresReportes;