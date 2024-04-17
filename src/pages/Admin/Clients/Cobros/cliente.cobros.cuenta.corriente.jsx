import { useState,useEffect } from "react";
import { Select,Button } from "antd";
import ProductosTable from "../../../../components/ProductosTable/productos.table";
const ClienteCobroCuentaCorriente = ({setPage})=>{
    const [productos,setProductos]=useState([]);
    const [cuenta,setCuenta]=useState([]);
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

    const registrarCobro = () =>{
        //Chequear que exista stock para registrar cobro
        cuenta.forEach(element=>{
            let cantidad = parseInt(element.cantidad);
            if(cantidad>element.stock){
                alert("No existe stock en el sistema, actualice stock");
                return ;
            }
        })
        //Tengo que registrar el cobro
        
        //una vez registrado el cobro tengo que sacar los elementos del stock

    }

    const handleChange = (e) =>{
        let array = [];
        e.forEach(element => {
            
            let aux = productos.filter(item => {return item.id==element})[0];
            array= [...array,aux];
        });
        console.log("El arreglo es : ",array);
        setCuenta(array);
        console.log("Cuenta es : ",cuenta);
    }
    
    return(
        <div>
        <article
        className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6"
        >
        <h1 className="text-left text-xl pb-2">Cuenta Corriente</h1>

            <div className="grid grid-cols-1 ">
                <Select onChange={e=>handleChange(e)}  options={productos} mode="multiple" placeholder="Productos" />
            </div>
                {cuenta.length>0?<ProductosTable productos={cuenta} />:null}
            <div className="grid grid-cols-3 pt-6">
                <div className="text-left">
                    <Button onClick={()=>setPage(0)}>Atras</Button>
                </div>
                <div></div>
                <div className="text-right">
                    <Button onClick={()=>registrarCobro()}>Cobrar</Button>
                </div>

            </div>
            </article>
        </div>
    )
}

export default ClienteCobroCuentaCorriente;