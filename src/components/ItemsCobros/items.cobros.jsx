import GenericTable from "../GenericTable/GenericTable";
import { useState } from "react";
import GenericSelect from "../GenericSelect/GenericSelect";
import Input from "antd/es/input/Input";
import ItemsElement from "./items.elements";
import { Button } from "antd";
const items = [
    {
        'value' : 0,
        'label' : 'abono anual',
        'price' : 120000
    },
    {
        'value' : 1,
        'label' : 'abono mensual',
        'price' : 15000
    }
]



const ItemsCobros = ({handleClose,index}) =>{
    const[item,setItem]=useState(null);
    const handleChange = (value) => {
        setItem(items[value]);// { value: "lucy", key: "lucy", label: "Lucy (101)" }
      };

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
            </tr>
        </thead>
        <tbody>
                <ItemsElement handleClose={handleClose} />
        </tbody>
    </table>

</div>
        </>
    )
}

export default ItemsCobros;