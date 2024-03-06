import { useSelector } from "react-redux";
import { useEffect,useState} from "react";

const CobrosList = () =>{
    const [cobros,setCobros] = useState([]);
    const [debts,setDebts] = useState([]);
    const [total,setTotal] = useState(0);
    let selector = useSelector(state=>state.client.cobros);
    let selector2 = useSelector(state=>state.client.debts);
 

    useEffect(()=>{
        setCobros(selector);
        setDebts(selector2);
        let amount = 0;
      selector.map(element=>{
        amount = amount + element.price * element.cantidad;
      })
      selector2.map(element=>{
        amount = amount + parseFloat(element.price) ;
      })
      console.log("amount es : ",amount);
      setTotal(amount);
        
    },[selector,selector2])
    return(
        <>
        {cobros.length>0? <div className="pt-10 relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <table class="table-auto">
        <thead>
    <tr>
      <th>Producto</th>
      <th>Cantidad</th>
      <th>Precio</th>
    </tr>
  </thead>
  <tbody className="pt-12">
  {cobros.map(element=><tr>
            <td> {element.name}</td>
            <td> {element.cantidad}</td>
            <td> {element.total}</td>
            </tr>)
         }
          {debts.map(element=><tr>
            <td> {element.name}</td>
            <td> 1</td>
            <td> {element.price}</td>
            </tr>)
         }
  </tbody>
        
          
        </table>
        <h1 className="text-left m-2 pt-12">Monto Total : ${Math.round(total,2)}</h1>

      </div>:null}
      </>
       
    )
}

export default CobrosList;