import GenericTable from "../GenericTable/GenericTable";
import { useState,useEffect } from "react";
import GenericSelect from "../GenericSelect/GenericSelect";
import Input from "antd/es/input/Input";
import ItemsElement from "./items.elements";
import { Button } from "antd";



const ItemsCobros = ({handleClose,index}) =>{
    const[items,setItems]=useState([]);
    const[options,setOptions] = useState([]);
    useEffect(() => {
        fetch("https://stingray-app-4224s.ondigitalocean.app/api/v1/items")
       .then((response) => response.json())
       .then((data) => { 
        let aux = data.filter(element => {
            if(element.type!="Producto")
            return element;
        }
           
            );
        setOptions(aux.map((element,index)=>{
            return {...element,label:element.name,value:index}

        }
            ));

       
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
                    Plan
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
                <th scope="col" class="px-6 py-3">
                    Agregar
                </th>
            </tr>
        </thead>
        <tbody>
                <ItemsElement items={options} handleClose={handleClose} />
        </tbody>
    </table>

</div>
        </>
    )
}

export default ItemsCobros;