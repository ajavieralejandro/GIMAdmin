import GenericSelect from "../GenericSelectSearch/GenericSelectSearch";
import { Button } from "antd";
import { useState,useEffect } from "react";

import {  useDispatch } from "react-redux";
import { setClientCobro } from "../../store/client/client.actions";
import { Input } from 'antd';

const ItemsElement = ({handleClose,items}) =>{
   
    const dispatch = useDispatch();
    const [planes,setPlanes]=useState([]);
    const [plan,setPlan]=useState([]);

  
    const [cobro,setCobro] = useState(
        {
            name : '',
            price : '',
            plan : '',
            cant_cuotas : '',
        }
    )
    const handleOk = ()=>{
   
        dispatch(setClientCobro(cobro));
        handleClose();
    }
    const[item,setItem] = useState(null);
    const [cantidad,setCantidad] = useState(0);
    const handleChange = (e) =>{
        
        let aux = (items[e]);
        if (aux.type == 'Producto')
            setPlan(planes.filter(element=>element.name=="Abono Total"));
        else    
            setPlan(planes);
        setItem(aux);
        setCobro({
            ...cobro,
            name : aux.name,
            price : aux.price,
            
        })
    
    }

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/v1/planes_abonos")
       .then((response) => response.json())
       .then((data) => { 
        setPlanes(data.map((element,index)=>{
            return {...element,value:element.name,key:index}
        }))
    
     })}, []);

     const handlePlan = (e) =>{
  
        setCobro({
            ...cobro,
            plan : e
        })

     }

     const handleCantChange = (e) =>{
        console.log("cantidad : ");
        console.log(e.target.value);
        setCantidad(e.target.value);
        setCobro({
            ...cobro,cantidad:e.target.value
        })
     }
    return(
        <>
             <tr className="bg-white border-b dark:bg-white dark:border-gray-100">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    <GenericSelect  onChange={handleChange} options={items} placeholder={"Items"} />
                </th>
                <td className="px-6 py-4">
                   {item!=null?<GenericSelect onChange={handlePlan} options={plan} placeholder={"Seleccionar Plan"} 
                    
                   
                   />:null}
                </td>
                <td className="px-6 py-4">
                    {(item!=null)?<Input onChange={handleCantChange
                        } placeholder="Cantidad" />:null}
                </td>
                <td className="px-6 py-4">
                {item!=null && cobro.cantidad?<h1> 
                    {cobro.price * cobro.cantidad}
</h1>:null}

                </td>
                <td className="px-6 py-4"> <Button onClick={handleClose} type="text">Cancelar</Button>
                </td>
                <td className="px-6 py-4">
                <Button onClick={()=>handleOk()} type="text">Agregar</Button>
                </td>

            </tr>
          
           
        </>
    )
}

export default ItemsElement;