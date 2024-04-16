import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {setCurrentClient} from '../../../store/client/client.actions';
const ClienteEditar = ({setPage}) =>{
  let dispatch = useDispatch();
  let currentClient = useSelector(state=>state.client.currentClient);
  const [client,setClient]=useState(currentClient);

    const handleClick = () =>{
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body :JSON.stringify({
            "client_id":currentClient.id,
            "name": client.name,
            "last_name": client.last_name,
            
          })
      };
       fetch(`https://stingray-app-4224s.ondigitalocean.app/api/v1/clients/${currentClient.id}`, requestOptions)
          .then(response => response.json())
          .then(data=>{ 
            console.log(data);
            dispatch(setCurrentClient(client));
            setPage(0);
          })
    }
    return(
        <div className="lg:col-span-2">
        <button onClick={()=>setPage(0)} type="text" class="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white  gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
    <svg class="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
    </svg>
    <span>Atras</span>
</button>
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-5">
            <label >Nombre</label>
            <input defaultValue={currentClient?currentClient.name:null} onChange={e=>setClient({...client,name:e.target.value})} type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
          </div>

          <div className="md:col-span-5">
            <label >Apellido</label>
            <input value={currentClient?currentClient.last_name:null} onChange={e=>setClient({...client,lastName:e.target.value})}  type="text" name="last_name" id="last_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
          </div>

          <div className="md:col-span-5">
            <label >Email </label>
            <input value={currentClient?currentClient.email:""} onChange={e=>setClient({...client,email:e.target.value})} type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="email@domain.com" />
          </div>

          <div className="md:col-span-3">
            <label >Address / Street</label>
            <input value={currentClient?currentClient.address:null} onChange={e=>setClient({...client,adress:e.target.value})} type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
          </div>

          <div className="md:col-span-2">
            <label >City</label>
            <input onChange={e=>setClient({...client,city:e.target.value})} type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
          </div>

          <div className="md:col-span-2">
            <label >Pais</label>
            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
              <input onChange={e=>setClient({...client,pais:"pais :"+e.target.value})} name="country" id="country" placeholder="País" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
              <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
              </button>
            </div>
          </div>

          <div className="md:col-span-2">
            <label >Provincia</label>
            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
              <input onChange={e=>setClient({...client,provincia:e.target.value})} name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
              <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <button  className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
              </button>
            </div>
          </div>

          <div className="md:col-span-1">
            <label >Zip</label>
            <input onChange={e=>setClient({...client,zip:e.target.value})} type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""  />
          </div>

        

  
          <div className="md:col-span-5 text-right">
            <div className="inline-flex items-end">
              <button onClick={()=>handleClick()}  className="bg-white  text-slate-500 font-bold py-2 px-4 hover:bg-slate-200 pt-2 m-2 rounded">Siguiente</button>
            </div>
          </div>

        </div>
      </div>
    )

}

export default ClienteEditar;