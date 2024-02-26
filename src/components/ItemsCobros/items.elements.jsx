import GenericSelect from "../GenericSelectSearch/GenericSelectSearch";
import { Button } from "antd";
import { useState } from "react";

import {  useDispatch } from "react-redux";
import { setClientCobro } from "../../store/client/client.actions";

const ItemsElement = ({handleClose,items}) =>{
    const dispatch = useDispatch();
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
    }
    
    const[item,setItem] = useState(null)
    const handleChange = (e) =>{
        console.log("selecciono : ");
        console.log(items[e]);
        let aux = (items[e]);
        setItem(aux);
        setCobro({
            ...cobro,
            name : aux.name,
            price : aux.price,
            
        })
    
    }
    return(
        <>
             <tr className="bg-white border-b dark:bg-white dark:border-gray-100">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    <GenericSelect  onChange={handleChange} options={items} placeholder={"Items"} />
                </th>
                <td className="px-6 py-4">
                   {item!=null?<GenericSelect placeholder={"Seleccionar Plan"} 
                     options={[
                        {value : 1,
                        label:'12 cuotas'},
                        {value : 2,
                            label:'Abono Completo'}
                     ]}
                   
                   />:null}
                </td>
                <td className="px-6 py-4">
                    {item!=null?<h1>3/6</h1>:null}
                </td>
                <td className="px-6 py-4">
                {item!=null?<h1>                    {item.price}
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