import Input from "antd/es/input/Input";
import { Select, Checkbox, Button } from "antd";
import { useState } from "react";
const CrearCaja = () =>{
    const[caja,setCaja]=useState({
        nombre:"",
        sucursal:"",
        activa:false,

    })

    const[sucursales,setSucursales]=useState([]);


    useState((
      
       
    )=>{
        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/sucursales')
        .then(res=>res.json())
        .then(data=>{
            console.log("data es ",data);
            setSucursales(data.data.map((element)=>{return {...element,value:element.nombre,key:element.id}}));
        });
        console.log("sucursales es : ",sucursales);
    },
    [])
    return(
        <>

        <div className="m-auto pt-6">
        <h1 className="pb-6">Crear Caja</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input onChange={e=>setCaja({...caja,nombre:e.target.value})} placeholder="Nombre Caja" />
            <Select onSelect={(index,element)=>setCaja({...caja,sucursal:element.id})} options={sucursales} placeholder="Sucursal" />
            <Checkbox onChange={e=>setCaja({...caja,activa:e.target.checked})}>Activa</Checkbox>
            </div>

            <div className="text-right pt-12">
            <Button onClick={()=>console.log(caja)}>Crear Caja</Button>
            </div>

        </div>
        
        </>
    )

    
}

export default CrearCaja;