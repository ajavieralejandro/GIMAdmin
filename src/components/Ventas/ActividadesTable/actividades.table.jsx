import GenericSelect from "../../GenericSelect/GenericSelect";
import Checkbox from "antd/es/checkbox/Checkbox";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import { useSelector } from "react-redux";
const ActividadesTabla = ({actividades,setActividades}) =>{
    let selector = useSelector(state=>state.ventas.actividades);
    let options = selector.map((element,index)=>{return{...element,key:index,value:element.nombre}})
    console.log(selector);
    console.log(options);
    const removeActivity = (table_index) =>{
        let array_aux = actividades.filter((element,index)=> table_index!=index );
        setActividades(array_aux);
    }
    return(
        <>
<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm ">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">Actividad</th>
              <th scope="col" className="px-6 py-4">Es principal</th>
              <th scope="col" className="px-6 py-4">Pase Libre</th>
              <th scope="col" className="px-6 py-4">Clases</th>
              <th scope="col className=px-6 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {actividades.map((element,index)=>{
                return(    <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium"><GenericSelect  options={options} placeholder={"Actividad"} /></td>
                <td className="whitespace-nowrap px-6 py-4"><Checkbox /></td>
                <td className="whitespace-nowrap px-6 py-4"><Checkbox /></td>
                <td className="whitespace-nowrap px-6 py-4"><Input placeholder="cant clases" /></td>
                <td className="whitespace-nowrap px-6 py-4"><Button onClick={()=>removeActivity(index)} type="text">Borrar</Button></td>
  
              </tr>);
            })}
        
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default ActividadesTabla;