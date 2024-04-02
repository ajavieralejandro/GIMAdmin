import styled from "@emotion/styled";
import { DatePicker,Select } from "antd";
const ClientPage2 = ({setClient,client,setPage}) =>{
    const handleClick = () =>{
        setPage(2);
    }
    return(
        <div className="lg:col-span-2">
        <h1 className="text-xl text-center">Otros Datos</h1>

        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-5">
            <label >DNI</label>
            <input onChange={e=>setClient({...e,dni:e.target.value})} type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
          </div>

          <div className="md:col-span-5">
            <label >Genero</label>
            <Select style={{width:'100%'}} options={[
              {key : 1, value:'Femenino'},
              {key : 2, value:'Masculino'},
              {key : 3, value:'Otro'}
              
            ]}></Select>
          </div>

          <div className="md:col-span-5">
            <label >Nacimiento </label>
            <DatePicker style={{width:'100%'}} />
          </div>

          <div className="md:col-span-3">
            <label >Ocupacion</label>
            <input onChange={e=>setClient({...client,adress:e.target.value})} type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
          </div>

          <div className="md:col-span-2">
            <label >Tel.</label>
            <input onChange={e=>setClient({...client,city:e.target.value})} type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
          </div>

     

        

     
          <div className="col-span-5 grid grid-cols-1  md:grid-cols-2 gap-2 pt-6">
          <div className=" text-left">
          
          <button onClick={()=>setPage(1)}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Atras</button>
     
      </div>


        <div className="text-right">
        
            <button onClick={()=>handleClick()}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Siguiente</button>
       
        </div>
          </div>
       

        </div>
      </div>
    )

}

export default ClientPage2;