import GenericSelect from "../GenericSelect/GenericSelect";
import { Button } from "antd";
const handleChange = () =>{

}

const items = [];
const item = <h1>hola</h1>
const ItemsElement = ({handleClose}) =>{
    return(
        <>
             <tr class="bg-white border-b dark:bg-white dark:border-gray-100">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    <GenericSelect onChange={handleChange} options={items} placeholder={"Items"} />
                </th>
                <td class="px-6 py-4">
                   {item!=null?<GenericSelect placeholder={"Seleccionar Plan"} />:null}
                </td>
                <td class="px-6 py-4">
                    {item!=null?<h1>3/6</h1>:null}
                </td>
                <td class="px-6 py-4">
                {item!=null?<h1>                    $2999
</h1>:null}

                </td>
                <td class="px-6 py-4"> <Button onClick={handleClose} type="text">Cancelar</Button></td>

            </tr>
          
           
        </>
    )
}

export default ItemsElement;