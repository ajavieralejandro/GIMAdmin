import { DatePicker,Select,Button } from "antd";
const ClientPage4 = ({setClient,client,setPage}) =>{
    const handleClick = () =>{
        console.log("El cliente es : ",client);
    }
    return(
        <div className="lg:col-span-2">

        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-5">
            <label >Medicamentos</label>
            <input onChange={e=>setClient({...e,medicamentos:e.target.value})} type="text" name="obra_social" id="obra_social" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
          </div>

          <div className="md:col-span-5">
          <label >Fumador</label>
          <input onChange={e=>setClient({...e,medicamentos:e.target.value})} type="text" name="obra_social" id="obra_social" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
        </div>

        <div className="md:col-span-5">
        <label >Alergias</label>
        <input onChange={e=>setClient({...e,medicamentos:e.target.value})} type="text" name="obra_social" id="obra_social" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
      </div>
       
      <div className="md:col-span-5">
      <label >Lesiones</label>
      <input onChange={e=>setClient({...e,medicamentos:e.target.value})} type="text" name="obra_social" id="obra_social" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
    </div>

    <div className="md:col-span-5">
    <label >Enfermedades </label>
    <input onChange={e=>setClient({...e,medicamentos:e.target.value})} type="text" name="obra_social" id="obra_social" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
  </div>
        
          

     
          <div className="col-span-5 grid grid-cols-1  md:grid-cols-2 gap-2 pt-6">
          <div className=" text-left">
          
          <button type="text" onClick={()=>setPage(3)}  className=" hover:text-blue-600 text-blue-400 font-bold py-2 px-4 rounded">Atras</button>
     
      </div>


        <div className="text-right">
        
            <button type="text" onClick={()=>setPage(5)}  className=" hover:text-blue-600 text-blue-400 font-bold py-2 px-4 rounded">Siguiente</button>
       
        </div>
          </div>
       

        </div>
      </div>
    )

}

export default ClientPage4;