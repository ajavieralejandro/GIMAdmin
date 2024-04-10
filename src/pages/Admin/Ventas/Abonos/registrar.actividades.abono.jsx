
import { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import ActividadesTabla from "../../../../components/Ventas/ActividadesTable/actividades.table";
const RegistroActividadesAbono = () =>{
    let navigate = useNavigate();
    const [actividades,setActividades]= useState([
        {
            actividad_id:'',
            es_principal:false,
            pase_libre:false,
            cant_clases:0
        }
    ]);
    const handleBack = () =>{
        navigate('/ventas/crear_abono');
    }
    return(
        <div
        className="pt-12 pb-12 block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">        <div
        className="border-b-2 text-xl border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 dark:bg-blue-400">
        Registrar Actividades
      </div>
      <div className="p-2 ">
        {actividades.length>0?<ActividadesTabla actividades={actividades} setActividades={setActividades}  />:null}
        <div className="text-right"
        >
                <Button onClick={()=>setActividades([...actividades,{}])}>Agregar Actividad</Button>
    
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
