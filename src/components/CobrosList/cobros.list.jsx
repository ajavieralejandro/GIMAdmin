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
        <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          {cobros.map(element=><div role="button"
            class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            {element.name}
          </div>)}
          
        </nav>
      </div>:null}
      </>
       
    )
}

export default CobrosList;