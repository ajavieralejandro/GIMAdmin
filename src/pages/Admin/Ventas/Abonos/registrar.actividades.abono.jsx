
import { useState,useEffect } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import ActividadesTabla from "../../../../components/Ventas/ActividadesTable/actividades.table";
import { useSelector } from "react-redux";
const RegistroActividadesAbono = () =>{
    let abono = useSelector(state=>state.abono.currentAbono);
    let navigate = useNavigate();
    const [actividadesAbono,setActividadesAbono]= useState([
        {
            actividad_id:'',
            es_principal:false,
            pase_libre:false,
            cant_clases:0
        }
    ]);
    const [actividades,setActividades]= useState([]);
    
    const handleBack = () =>{
        navigate('/ventas/crear_abono');
    }

    const handleNext = () =>{
      /**
       * {

    "abono_id":3,
    "actividades" : [
        {
            "actividad_id":4,
            "principal":true,
            "pase_libre":false,
            "cant_clases":5
        }


    ]


}
       */
const requestOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body :JSON.stringify({
    "abono_id": abono.id,
    "actividades": actividadesAbono
  
  })
};

        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/actividades_abonos',requestOptions)
        .then(res=>res.json())
        .then(data=>alert(data))
    }
    return(
        <div
        className="pt-12 pb-12 block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">        <div
        className="border-b-2 text-xl border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 dark:bg-blue-400">
        Registrar Actividades
      </div>
      <div className="p-2 ">
        {actividadesAbono.length>0?<ActividadesTabla actividades={actividadesAbono} setActividades={setActividadesAbono}  />:null}
        <div className="text-right"
        >
                <Button onClick={()=>setActividadesAbono([...actividadesAbono,{}])}>Agregar Actividad</Button>
    
        </div>
    
        </div> 
        <div className="grid grid-cols-3 pt-12">
        <div className="text-left ">
        <Button onClick={()=>handleBack()}  type="text" >Atras</Button>
      </div>
          <div></div>
           
          <div className="text-right ">
            <Button  type="text" >Siguiente</Button>
          </div>
         
        </div>
       
      </div>
    )
}

export default RegistroActividadesAbono;
