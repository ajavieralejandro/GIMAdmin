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
    const [conceptos,setConceptos] = useState([]);
    const options_pago = [
        {key:1,value:'efectivo'},
        {key:2,value:'debito'},
        {key:3,value:'credito'},
        {key:4,value:'mercado pago'},




    ]

    const options_iva = [
        {key:1,value:'21%'},
        {key:2,value:'discriminado'},
        {key:3,value:'0%'},

    ]
    
    const handleClick = () =>{

        console.log("Movimiento es : ",movimiento);
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body :JSON.stringify({
                nombre : movimiento.nombre,
                fecha: movimiento.fecha,
                concepto: movimiento.concepto,
                caja : movimiento.caja,
                medio_pago : movimiento.medio_pago,
                iva : movimiento.iva,
                monto : movimiento.monto,
                descripcion : movimiento.descripcion
                
                        })
        };
         fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/movimientos', requestOptions)
            .then(response => {response.json()})
            .then(()=>navigate('/cuentas/movimientos_internos'));
        //dispatch(setMovimientoInterno(movimiento));

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
        //fetch cajas
        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/cajas')
        .then(res=>res.json())
        .then(data=>{
            let aux = data.map(element=>{return {...element,key:element.id,value:element.name}});
            console.log("Cajas es : ",aux);
            setCajas(aux);

        });

        //fetch conceptos, Esto esta mal es en concepto movimientos...
        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/conceptos')
        .then(res=>res.json())
        .then(data=>{
            let aux = data[0].map(element=>{return {...element,key:element.id,value:element.nombre}});
            setConceptos(aux);

        });


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
    <DatePicker onChange={(date, dateString)=>setMovimiento({...movimiento,fecha:dateString})}  />
    <Select onSelect={e=>setMovimiento({...movimiento,concepto:e})} options={conceptos} placeholder="Concepto" />
    <Select onSelect={e=>setMovimiento({...movimiento,caja:e})} options={cajas} placeholder="Caja" />
        
    </div>
    <div className="grid grid-cols-4 gap-4 pt-8"
    >
            <Select onSelect={e=>setMovimiento({...movimiento,medio_pago:e})} options={options_pago} placeholder="Medio de pago" />

        <Select onSelect={e=>setMovimiento({...movimiento,iva:e})}  options={options_iva}  placeholder="IVA" />
        <Input onChange={e=>setMovimiento({...movimiento,monto:e.target.value})} placeholder="Monto Total" />
    </div>
    <div className="pt-12">
    <TextArea onChange={e=>setMovimiento({...movimiento,descripcion:e.target.value})} placeholder="Descripción" />

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