import { DatePicker,Select,Button } from "antd";
const ClientPage3 = ({setClient,client,setPage}) =>{
    const handleClick = () =>{
        console.log("El cliente es : ",client);
    }
    return(
        <div className="lg:col-span-2">

        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-5">
            <label >Obra Social</label>
            <input onChange={e=>setClient({...e,obraSocial:e.target.value})} type="text" name="obra_social" id="obra_social" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
          </div>

       
          <div className="md:col-span-5">
            <label >Ultimo Control </label>
            <DatePicker onSelect={(e=>setClient({...client,control_medico:e.$d}))} style={{width:'100%'}} />
          </div>

          <div className="md:col-span-3">
            <label >Contacto Emergencia</label>
            <input onChange={e=>setClient({...client,ocupacion:e.target.value})} type="text" name="ocupacion" id="ocupacion" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
          </div>

          <div className="md:col-span-2">
            <label >Tel.</label>
            <input onChange={e=>setClient({...client,tel:e.target.value})} type="text" name="tel" id="tel" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
          </div>

          <div className="md:col-span-5 pt-2">
         <Select onSelect={e=>setClient({...client,grupo_sang:e})} placeholder={"Grupo Sanguineo "} style={{width:'100%'}} options={[
            {key : 1, value:'A+'},
            {key : 2, value:'A-'},
            {key : 3, value:'O'},
            {key : 4, value:'O+'}

            
          ]}></Select>
        </div>
          
        

     
          <div className="col-span-5 grid grid-cols-1  md:grid-cols-2 gap-2 pt-6">
          <div className=" text-left">
          
          <button type="text" onClick={()=>setPage(1)}  className=" hover:text-blue-600 text-blue-400 font-bold py-2 px-4 rounded">Atras</button>
     
      </div>


        <div className="text-right">
        
            <button type="text" onClick={()=>handleClick()}  className=" hover:text-blue-600 text-blue-400 font-bold py-2 px-4 rounded">Siguiente</button>
       
        </div>
          </div>
       

        </div>
      </div>
    )

}

export default ClientPage3;