import Input from "antd/es/input/Input";
import { useState } from "react";
const CobrosModalMixto = ({monto}) =>{

    const [total,setTotal] = useState(monto);
    const [debito,setDebito] = useState(0);
    const [credito,setCredito] = useState(0);
    const [efectivo,setEfectivo] = useState(0);
    const[ mercadoPago,setMercadoPago] = useState(0);




    const handleDebito = (e)=>{
        if(!isNaN(e.target.value))
            setDebito(Math.round(parseFloat(e.target.value)));
        if(e.target.value =="" || isNaN(e.target.value))
            setDebito(0);
    
    }

    const handleCredito = (e)=>{
        if(!isNaN(e.target.value) )
            setCredito(Math.round(parseFloat(e.target.value)));
            if(e.target.value =="" || isNaN(e.target.value))

            setCredito(0);
    }

    const handleEfectivo = (e)=>{
        if(!isNaN(e.target.value) )
            setEfectivo(Math.round(parseFloat(e.target.value)));
            if(e.target.value =="" || isNaN(e.target.value))
            setEfectivo(0);
    }

    const handleMercadoPago = (e)=>{
        if(!isNaN(e.target.value) )
            setMercadoPago(Math.round(parseFloat(e.target.value)));
            if(e.target.value =="" || isNaN(e.target.value))

            setMercadoPago(0);
       
    }

    return (
        <>
        <h1>Monto total a pagar : {total}</h1>
            <div className="grid grid-cols-1 gap-4">
                <Input onChange={(e)=>handleDebito(e)} placeholder="Debito" />
                <Input onChange={(e)=>handleCredito(e)}  placeholder="Credito" />
                <Input onChange={(e)=>handleEfectivo(e)} placeholder="Efectivo" />
                <Input onChange={(e)=>handleMercadoPago(e)} placeholder="Mercado Pago" />
                <h1>Total : {debito+efectivo+credito+mercadoPago}</h1>

            </div>
        </>
    )
}

export default CobrosModalMixto;