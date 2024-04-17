import { useState,useEffect } from "react";
import { Select,Button } from "antd";
import { useSelector } from "react-redux";
import ProductosTable from "../../../../components/ProductosTable/productos.table";
const ClienteCobroCuentaCorriente = ({setPage})=>{
    let user_id = useSelector(state=>state.user.currentUser.id);
    let client_id = useSelector(state=>state.client.currentClient.id);
    let caja_id = useSelector(state=>state.user.currentUser.caja);
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
        let cobro_name = "";
        let total_price = 0;
        cuenta.map(producto=>{
            if(producto.cantidad>0)
                total_price += producto.price * producto.cantidad;
                cobro_name = "cobro : "+producto.name+" cantidad :"+producto.cantidad+"\n";
        })
        //Chequear que exista stock para registrar cobro
        cuenta.forEach(element=>{
            let cantidad = parseInt(element.cantidad);
            if(cantidad>element.stock){
                alert("No existe stock en el sistema, actualice stock");
                return ;
            }
        })
        //Tengo que registrar el cobro

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body :JSON.stringify({
              "user_id": user_id,
              "caja_id" : caja_id,
              "client_id" : client_id,
              "status" : "green",
              "vencimiento" : (new Date().toDateString()),
               "name" : cobro_name,
               "price" : total_price


            })}
            fetch("https://stingray-app-4224s.ondigitalocean.app/api/v1/deudas",requestOptions)
            .then(res=>res.text())
            .then((data=>alert(data)));
        
        //una vez registrado el cobro tengo que sacar los elementos del stock
        cuenta.map(producto=>{
            //actualizo el stock de prodcutos que se consumieron
            if(producto.cantidad>0){
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body :JSON.stringify({
                      "stock":producto.stock,     
                    })}
                fetch(`https://stingray-app-4224s.ondigitalocean.app/api/v1/producto/restar_stock/${producto.id}`,requestOptions)
                .then(res=>res.json())
                .then(()=>setPage(0))

            }
        })
        //Falta cargar los puntos por referido


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