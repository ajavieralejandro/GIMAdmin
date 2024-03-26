import { DatePicker } from "antd";
import {Select,Input, Button} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setMovimientoInterno } from "../../../store/caja/caja.actions";
import { useNavigate } from "react-router-dom";
const CrearMovimientoCaja = () =>{
    let selector_conceptos = useSelector(state => state.caja.conceptos);
    let navigate = useNavigate();
    let dispatch = useDispatch();
    const [cajas,setCajas] = useState([]);
    
    const handleClick = () =>{

 
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body :JSON.stringify({
                nombre : movimiento.nombre,
                
                        })
        };
         fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/movimientos', requestOptions)
            .then(response => response.json())
        //dispatch(setMovimientoInterno(movimiento));
        navigate('/cuentas/movimientos_internos');

    }
    const [movimiento,setMovimiento] = useState({
        nombre : '',
        fecha:'',
        concepto: '',
        caja : '',
        medio_pago : '',
        iva : '',
        monto : '',
        descripcion : ''
    });

    useEffect(()=>{
        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/cajas')
        .then(res=>res.json())
        .then(data=>setCajas(data.data));

    },[])
    return(
        <>
            <div>
            <div
  className="block rounded-lg  text-center shadow-secondary-1 dark:bg-surface-dark dark:text-white text-surface">
  <div
    className="border-b-2 bg-blue-300 border-neutral-100 px-6 py-3 dark:border-white/10">
    Datos del movimiento Interno 
  </div>
  <div className="p-6">
    <div className="grid grid-cols-4 gap-4">
    <Input onChange={e=>setMovimiento({...movimiento,nombre:e.target.value})} placeholder="Nombre" />
    <DatePicker />
    <Select placeholder="Concepto" />
    <Select  placeholder="Caja" />
        
    </div>
    <div className="grid grid-cols-4 gap-4 pt-8"
    >
            <Select placeholder="Medio de pago" />

        <Select placeholder="IVA" />
        <Input onChange={e=>setMovimiento({...movimiento,monto:e.target.value})} placeholder="Monto Total" />
    </div>
    <div className="pt-12">
    <TextArea placeholder="Descripción" />

    </div>
      

  </div>
  <div className="text-right">
            <Button onClick={()=>handleClick()}>Registrar</Button>
        </div>  
</div>
            </div>
        </>
    )
}

export default CrearMovimientoCaja;