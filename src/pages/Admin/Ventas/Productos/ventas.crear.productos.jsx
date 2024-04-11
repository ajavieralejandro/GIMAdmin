import { useState } from "react";
import { Input,InputNumber ,Select,Checkbox,Button} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useNavigate } from "react-router-dom";
const VentasCrearProductos = () =>{
    let navigate = useNavigate();
    const iva_option = [
        {
            key:1,
            value  : "21%"
        },
        {
            key:2,
            value  : "10%"
        },
        {
            key:2,
            value  : "0%"
        }
    ];

    const [producto,setProducto]=useState({
        name: "",
        price:1000,
        IVA:"",
        stock:0,
        cost:1000,
        disponible:false,
        comentarios:"",
        puntos_venta:0
    })
    const handleClick = () =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body :JSON.stringify({
              "name": producto.name,
              "price": producto.price,
              "cost":producto.cost,
              "IVA":producto.IVA,
              "disponible":producto.disponible,
              "puntos_venta":producto.puntos_venta,
              "stock":producto.stock,
              "comentarios":producto.comentarios
            
            })
          };
          fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/productos',requestOptions)
          .then(res=>res.json())
          .then(()=>navigate('/ventas/productos'));
          
    }
    return(
        <div>
        <h1 className="text-md">Crear Producto</h1>

            <div className="shadow-lg   m-2 px-4 py-5 rounded-lg  text-center ">
                <div className="grid pb-6 grid-cols-1 md:grid-cols-4 gap-4">
                    <Input onChange={e=>setProducto({...producto,name:e.target.value})} style={{width:'100%'}} placeholder="Nombre producto" />
                    <Input onChange={e=>setProducto({...producto,puntos_venta:e.target.value})} placeholder="Puntos por Venta" />
                    <Input onChange={e=>setProducto({...producto,stock:e.target.value})} placeholder="Stock" />
                    <Select onChange={e=>setProducto({...producto,IVA:e})} placeholder={"IVA"} options={iva_option} />

                    <div>
                    <h1>Precio :  <InputNumber
                    onChange={e=>setProducto({...producto,price:e})}
                defaultValue={1000}
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
              /> </h1></div>
              <div>
              <h1>costo :  <InputNumber
              onChange={e=>setProducto({...producto,cost:e})}
          defaultValue={1000}
          formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
        /> </h1></div>
        <Checkbox onChange={e=>setProducto({...producto,disponible:e.target.checked})}>Disponible</Checkbox>

                </div>
                <TextArea onChange={e=>setProducto({...producto,comentarios:e.target.value})} placeholder="comentarios" />
                <div className="text-right m-2">
                <Button onClick={()=>handleClick()}>Crear Producto</Button>
                </div>
            </div>
           
        </div>
    )
}

export default VentasCrearProductos;