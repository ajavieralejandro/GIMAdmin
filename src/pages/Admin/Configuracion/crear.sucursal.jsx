import Input from "antd/es/input/Input";
import Checkbox from "antd/es/checkbox/Checkbox";
import { Button } from "antd";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const CrearSucursal = () =>{
    let navigate = useNavigate();
    const [sucursal,setSucursal] = useState({
        nombre : "",
        capacidad : "",
        minutos : "",
        ingresoCondicional : "",
        reserva:"true",
        controlDNI : "true"

    })
    const handleClick = ()=>
    {
        console.log("Sucursal es : ",sucursal);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body :JSON.stringify({
                nombre : sucursal.nombre,
                capacidad : sucursal.capacidad,
                minutos : sucursal.minutos,
                reserva : sucursal.reserva,
                controlDNI : sucursal.controlDNI

            })
        };
         fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/sucursales', requestOptions)
            .then(response => response.json())
            .then(data=>{ 
                console.log(data);
                navigate('/configuracion/sucursales');
            })


    }
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
        <Input onChange={e=>setSucursal({...sucursal,nombre:e.target.value})} placeholder="Nombre" />
        <Input onChange={e=>setSucursal({...sucursal,capacidad:e.target.value})} placeholder="Capacidad Maxima" />
        <Input onChange={e=>setSucursal({...sucursal,minutos:e.target.value})} placeholder="Minutos Reserva" />

       
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <Checkbox>Ingreso Condicional</Checkbox>
            <Checkbox>Reserva Obligatoria</Checkbox>
            <Checkbox>Control DNI</Checkbox>
        </div>
        <div className="text-right"
        >
            <Button onClick={()=>handleClick()}>Crear Sucursal</Button>
        </div>

        </>
    )
}

export default CrearSucursal;