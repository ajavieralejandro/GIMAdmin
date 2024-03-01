import { useEffect,useState } from "react";
import ItemsElement from "../ItemsCobros/items.elements";
const ProductsCobros = () =>{
    const [options,setOptions] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/v1/items/")
       .then((response) => response.json())
       .then((data) => { 
        let aux = (data.filter((element,index)=>{
            (element.type=='Producto')
            return element;

        }
            ))
   
            ;

       
        }
        )
        console.log(options);
          
    
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
                    Cancelar
                </th>
            </tr>
        </thead>
        <tbody>
                <ItemsElement items={options} handleClose={null} />
        </tbody>
    </table>

</div>
        </>
    )
}

export default ProductsCobros;