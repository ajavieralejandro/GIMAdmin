import Input from "antd/es/input/Input";
import Checkbox from "antd/es/checkbox/Checkbox";
import TextArea from "antd/es/input/TextArea";
import { useState,useEffect} from "react";
import { Button,Select} from "antd";
import { useDispatch } from "react-redux";
import { addActividad } from "../../../store/ventas/ventas.actions";
import { useNavigate } from "react-router-dom";
const CrearActividad = () =>{
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [sucursales,setSucursales] = useState([]);

  const [actividad,setActividad] = useState({
      nombre : '',
      reserva : false,
      sucursales : [],
      comentarios : ""
  })

  const handleClick = () =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body :JSON.stringify({
        "nombre": actividad.nombre,
        "comentarios": actividad.comentarios,
        "reserva" : actividad.reserva,
        "sucursales":actividad.sucursales

      })
  };
  fetch("https://stingray-app-4224s.ondigitalocean.app/api/v1/actividades",
  requestOptions)
  .then(res=>res.json()
  .then(data=>{
    alert(data);
    navigate('/ventas/actividades');
  }))
}

  useEffect(()=>{
    fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/sucursales')
    .then(res=>res.json())
    .then(data=>{
      let aux = data.data.map(element=>{
        return(
          {...element,key:element.id,value:element.id,label:element.nombre}
        )
      })
      setSucursales(aux);
    })

  },[])
    return(
        <>
            <div>
            <div
  className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
  <div
    className="border-b-2 bg-blue-200 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50 dark:bg-blue-400">
    Crear Actividad
  </div>
  <div className="p-6 text-black">
    <div className="grid grid-cols-3 gap-4">
        <Input onChange={(e)=>setActividad({...actividad,nombre:e.target.value})} placeholder="Nombre" />
        <Select onChange={e=>{setActividad({...actividad,sucursales:[e]})}} mode="multiple" placeholder="Sucursales" options={sucursales} />
        <Checkbox onChange={e=>setActividad({...actividad,reserva:e.target.checked})}>Permitir Reserva y anulación</Checkbox>

    </div>
    <div className="grid grid-cols-3 gap-4 pt-12">
      <TextArea  onChange={(e)=>setActividad({...actividad,comentarios:e.target.value})} placeholder="Comentarios" />


    </div>
    <div className="text-right ml-2">
          <Button onClick={()=>{
            handleClick()
            //dispatch(addActividad(actividad));
            //navigate('/ventas/actividades')
                                
          }} > Guardar</Button>
        </div>
  </div>
      
  </div>
  
            </div>
        </>
    )
}

export default CrearActividad;