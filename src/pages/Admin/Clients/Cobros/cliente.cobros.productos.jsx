import { Select,Button } from "antd";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
const ClienteCobrosProductos = ({setPage}) =>{
    let client_id = useSelector(state=>state.client.currentClient.id);
    let caja_id = useSelector(state=>state.user.currentUser.caja);
    const [productos,setProductos]= useState([]);
    const [cobro,setCobro] = useState({
        nombre : "Cobro producto : ",
        fecha : "",
        concepto : "",
        caja : "",
        descripcion:"Cobro de Producto",
        iva : "",
        monto : "",
        medio_pago : "",
        cantidad : 0,
    })
    useEffect(()=>{
        fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/productos')
        .then(res=>res.json())
        .then(data=>{
            let aux = data.map(element=>{
                return({...element,key:element.id,value:element.id,label:element.name})
            })
            setProductos(aux);
        })
    },[]);

    const registrarProducto = () =>{
     
       console.log("El cobro a registrar  es :",cobro);
    }

    return(
        <div>
        <article
        className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
        >
        <div className="grid grid-cols-1">
            <h1 className="text-left">Seleccionar Productos</h1>
            <Select onChange={(e)=>setCobro({...cobro,medio_pago:e})} options={productos} placeholder="Seleccionar Producto" />
        </div>
        <div className='pt-4'>
        <h1 className='text-left m-2'>Seleccionar Medio de Pago</h1>

        <Select
         onChange={e=>setCobro({...cobro,medio_pago:e})}
         style={{width:'100%'}} placeholder="Medio de pago"/>

        </div>

        <div className='pt-4'>
        <h1 className='text-left m-2'>Seleccionar IVA </h1>

        <Select
         onChange={e=>setCobro({...cobro,iva:e})}
         style={{width:'100%'}} placeholder="IVA"/>

        </div>

        <div className='pt-4'>
        <h1 className='text-left m-2'>Aplicar Descuento</h1>

        <Select
         onChange={e=>setCobro({...cobro,descuento:e})}
         style={{width:'100%'}} placeholder="descuento"/>

        </div>
        
        <div className="grid grid-cols-3 gap-2 pt-6">
        <div className='text-left'>
            <Button onClick={()=>setPage(0)}>Atras</Button>
        </div>
        <div></div>
        <div>                            <Button>Registrar Cobro </Button>

        </div>

    </div>
        </article>
    
        </div>
    )
}

export default ClienteCobrosProductos;