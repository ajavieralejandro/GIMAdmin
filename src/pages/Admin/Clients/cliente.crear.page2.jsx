import styled from "@emotion/styled";
import { DatePicker,Select } from "antd";
const ClientPage2 = ({setClient,client,setPage}) =>{
    const handleClick = () =>{
        console.log("El cliente en pagina 2 es : ",client);
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body :JSON.stringify({
            "name": client.name,
            "last_name": client.lastName,
            "dni": client.dni,
            "gender": client.genero,
            "email": client.email,
            "phone_number": client.tel,
            "birth": client.nacimiento,
            "profession": client.ocupacion,
            "address": client.address+" "+client.city+" "

          })
      };
       fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/clients', requestOptions)
          .then(response => response.json())
          .then(data=>{ 
              alert(data);
          })

        setPage(5);

    }
    return(
        <div className="lg:col-span-2">

        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-5">
          <div>
          <label >DNI</label>
          <input onChange={e=>setClient({...client,dni:e.target.value})} type="text" name="dni" id="dni" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
          </div>
          
          </div>

          <div className="md:col-span-5">
          <div>  <label >Genero</label>
          <Select onSelect={e=>setClient({...client,genero:e})
          } style={{width:'100%'}} options={[
            {key : 1, value:'Femenino'},
            {key : 2, value:'Masculino'},
            {key : 3, value:'Otro'}
            
          ]}></Select></div>
          
          </div>

          <div className="md:col-span-5">
            <label >Nacimiento </label>
            <DatePicker onChange={(e=>setClient({...client,nacimiento:e.$d}))} style={{width:'100%'}} />
          </div>

          <div className="md:col-span-3">
            <label >Ocupacion</label>
            <input onChange={e=>setClient({...client,ocupacion:e.target.value})} type="text" name="ocupacion" id="ocupacion" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
          </div>

          <div className="md:col-span-2">
            <label >Tel.</label>
            <input onChange={e=>setClient({...client,tel:e.target.value})} type="text" name="tel" id="tel" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
          </div>

     
          <div className="md:col-span-5 pt-2">
         <Select onSelect={e=>setClient({...client,ref:e})} placeholder={"Como nos conociste?"} style={{width:'100%'}} options={[
            {key : 1, value:'Referidos'},
            {key : 2, value:'Publicidad'},
            {key : 3, value:'Redes'},
            {key : 4, value:'Otros'}

            
          ]}></Select>
        </div>
        

     
          <div className="col-span-5 grid grid-cols-1  md:grid-cols-2 gap-2 pt-6">
          <div className=" text-left">
          
          <button onClick={()=>setPage(1)}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Atras</button>
     
      </div>


        <div className="text-right">
        
            <button onClick={()=>handleClick()}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 text">Siguiente</button>
       
        </div>
          </div>
       

        </div>
      </div>
    )

}

export default ClientPage2;