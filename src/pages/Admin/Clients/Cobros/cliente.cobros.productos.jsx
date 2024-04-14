import { Select,Button } from "antd";
import { useState,useEffect } from "react";
const ClienteCobrosProductos = () =>{
    const [productos,setProductos]= useState([]);
    useEffect(()=>{
        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/productos')
        .then(res=>res.json())
        .then(data=>{
            let aux = data.map(element=>{
                return({...element,key:element.id,value:element.id,label:element.name})
            })
            setProductos(aux);
        })
    },[])
    return(
        <div>
        <article
        className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
        >
        <div className="grid grid-cols-1">
            <h1 className="text-left">Seleccionar Productos</h1>
            <Select options={productos} placeholder="Seleccionar Producto" />
        </div>
        <div className='pt-4'>
        <h1 className='text-left m-2'>Seleccionar Medio de Pago</h1>

        <Select
         
         style={{width:'100%'}} placeholder="Medio de pago"/>

        </div>
        <div className="text-right pt-6">
            <Button>Registrar Cobro Productos</Button>
        </div>
        </article>
        </div>
    )
}

export default ClienteCobrosProductos;