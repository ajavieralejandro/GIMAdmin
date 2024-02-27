import { useSelector } from "react-redux";
import { useEffect, useState} from "react";
import DeudasElement from "./deudas.element";
import { useDispatch } from "react-redux";
import { addClientDebt } from "../../store/client/client.actions";

const DeudasModal = ()=>{
  let dispatch = useDispatch();
  const selectAll = () =>{
    if(!selected){
      setDebts(debts.map(element=>{
        return{...element,value:true};
      }))
      setSelected(true);
      dispatch(addClientDebt(debts))
    }

    else {
      setDebts(debts.map(element=>{
        return{...element,value:false};
      }))
      setSelected(false);
    }

  
  

  }
  const [debts,setDebts] = useState([]);
  const [selected,setSelected]=useState(false);
  let total_debt = 0;
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/client/debts/1")
   .then((response) => response.json())
   .then((data) => { 
      setDebts(data.map(element=>{
        return {...element,value:false}
      }));
      data.map(element=>{
        console.log("Hola itero las deudas");
        console.log(element);
        if(!element.status)
          total_debt = total_debt+ 10;
      })
      console.log("Deuda total es :",total_debt);
    }
    )
      

 }, []);
  let client = useSelector((state)=>state.client);
    return(
        <div className="  ">

  <table className="min-w-full bg-white font-[sans-serif]">
    <thead className="bg-gray-700 whitespace-nowrap">
      <tr>
        <th className="pl-6 w-8">
          <input onClick={()=>selectAll()} id="checkbox" type="checkbox" className="hidden peer" />
          <label for="checkbox"
            className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
              <path
                d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                data-name="7-Check" data-original="#000000" />
            </svg>
          </label>
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-white">
          Name
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-white">
          Precio
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-white">
          Vencimiento
        </th>
  
    
      </tr>
    </thead>
    <tbody className="whitespace-nowrap">
       {
        debts.map(element => <DeudasElement  value={element.value} key={element.id} debt={element} />)
      }
     
    
    </tbody>
  </table>
</div>
    )
}

export default DeudasModal;