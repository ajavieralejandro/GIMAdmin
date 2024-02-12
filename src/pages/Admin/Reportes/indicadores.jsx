import IndicadoresCard from "../../../components/IndicadoresCard/indicadores.card";
const IndicadoresReportes = ()=>{
    return(
        <>
            <div className="grid grid-cols-3 gap-2">
                <IndicadoresCard />
                <IndicadoresCard />
                <IndicadoresCard />
            </div>
        </>
    )
}

export default IndicadoresReportes;