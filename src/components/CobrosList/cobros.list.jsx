import { useSelector } from "react-redux";
import { useEffect,useState} from "react";

const CobrosList = () =>{
    const [cobros,setCobros] = useState([]);
    let selector = useSelector(state=>state.client.cobros)
    useEffect(()=>{
        setCobros(selector);
    },[selector])
    return(
        <>
        {cobros.length>0? <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <table class="table-auto">
        <thead>
    <tr>
      <th>Producto</th>
      <th>Plan</th>
      <th>Precio</th>
    </tr>
  </thead>
  <tbody className="pt-12">
  {cobros.map(element=><tr>
            <td> {element.name}</td>
            <td> {element.plan}</td>
            <td> {element.price}</td>
            </tr>)
         }
  </tbody>
        
          
        </table>
      </div>:null}
      </>
       
    )
}

export default CobrosList;