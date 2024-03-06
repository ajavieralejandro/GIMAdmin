import { useEffect,useState } from "react";
import ItemsElement from "../ItemsCobros/items.elements";
import GenericSelect from "../GenericSelect/GenericSelect";
import { Button, Input } from "antd";
import { useDispatch } from "react-redux";
import { setClientCobro } from "../../store/client/client.actions";
const ProductsCobros = ({onExit}) =>{
    let dispatch = useDispatch();

    const handleCobro = () =>{
        let aux = {
            name : item.name,
            price : item.price,
            cantidad : cantidad,
            total : cantidad * item.price
        }

        dispatch(setClientCobro(aux));
        onExit();
    }

    const [options,setOptions] = useState([]);
    const [item,setItem] = useState(null);
    const [cantidad,setCantidad] = useState(0);

    const handleChange = (e) =>{
        console.log(e);
        setItem(options.filter(element=>{
            return element.name == e
        })[0]);

    }
    useEffect(() => {
        fetch("https://stingray-app-4224s.ondigitalocean.app/api/v1/items")
       .then((response) => response.json())
       .then((data) => { 
        let aux = (data.filter((element,index)=>{
            if(element.type=='Producto')
            return {
                ...element
            }

        }
        
            ));

      
   
      
            
            aux = aux.map((element,index)=>{
                return({
                    ...element, value:element.name,key:index
                })
            })

            setOptions(aux);

        }
        
        )
          
    
     }, []);

    return(
        <>
             
<div class="relative overflow-x-auto pt-8">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Producto
                </th>
          
                <th scope="col" class="px-6 py-3">
                    Cantidad
                </th>
                <th scope="col" class="px-6 py-3">
                    Precio
                </th>
                <th scope="col" class="px-6 py-3">
                    Descuento
                </th>
                <th scope="col" class="px-6 py-3">
                    Opciones
                </th>
            </tr>
        </thead>
        <tbody>
        <tr className="bg-white border-b dark:bg-white dark:border-gray-100">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    <GenericSelect  onChange={e=>handleChange(e)} options={options} placeholder={"Items"} />
                </th>
                <td className="px-6 py-4">
                {(item!=null)?<Input onChange={(e)=>{setCantidad(e.target.value)}
                        } placeholder="Cantidad" />:null}
                </td>
                <td className="px-6 py-4">
                    {(item!=null)?<h1>{item.price * cantidad}</h1>:null}
                </td>
                <td className="px-6 py-4">
                {(item!=null)?<Input onChange={(e)=>{setCantidad(e.target.value)}
                        } placeholder="Descuento" />:null}
                </td>
                <td className="px-6 py-4">
                {item!=null ?<div>
                    <Button onClick={()=>handleCobro()} type="text">Agregar</Button>
                    <Button type="text">Cancelar</Button>

                </div>:null}

                </td>
           

            </tr>
        </tbody>
    </table>

</div>
        </>
    )
}

export default ProductsCobros;