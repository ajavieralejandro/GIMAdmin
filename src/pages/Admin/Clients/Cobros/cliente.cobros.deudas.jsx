
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import DeudasElement from "../../../../components/DeudasModal/deudas.element";
const ClienteCobrosDeudas = ({setPage}) => {
    let client_id = useSelector(state=>state.client.currentClient.id);
    const [deudas,setDeudas] = useState([]);
    useEffect(()=>{
        fetch(`https://stingray-app-4224s.ondigitalocean.app/api/v1/client/debts/${client_id}`)
        .then(res=>res.json())
        .then(data=>setDeudas(data))
    },[])
    return(
        <div>{deudas.length>0?<table className="min-w-full bg-white font-[sans-serif]">
        <thead className="bg-gray-700 whitespace-nowrap">
          <tr>
            <th className="pl-6 w-8">
              <input  id="checkbox" type="checkbox" className="hidden peer" />
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
            deudas.map(element => <DeudasElement  value={element.value} key={element.id} debt={element} />)
          }
         
        
        </tbody>
      </table>:<h1>No se registran Deudas</h1>}
        
        </div>
    )
}

export default ClienteCobrosDeudas;
