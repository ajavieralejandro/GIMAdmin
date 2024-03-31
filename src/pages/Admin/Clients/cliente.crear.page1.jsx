const ClientPage1 = ({setClient,client,setPage}) =>{
    const handleClick = () =>{
        setPage(2);
    }
    return(
        <div className="lg:col-span-2">
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-5">
            <label >Nombre</label>
            <input onChange={e=>setClient({...e,name:e.target.value})} type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
          </div>

          <div className="md:col-span-5">
            <label >Apellido</label>
            <input onChange={e=>setClient({...client,lastName:e.target.value})}  type="text" name="last_name" id="last_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
          </div>

          <div className="md:col-span-5">
            <label >Email </label>
            <input onChange={e=>setClient({...client,email:e.target.value})} type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="email@domain.com" />
          </div>

          <div className="md:col-span-3">
            <label >Address / Street</label>
            <input onChange={e=>setClient({...client,adress:e.target.value})} type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
          </div>

          <div className="md:col-span-2">
            <label >City</label>
            <input onChange={e=>setClient({...client,city:e.target.value})} type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
          </div>

          <div className="md:col-span-2">
            <label >Country / region</label>
            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
              <input onChange={e=>setClient({client,pais:e.target.value})} name="country" id="country" placeholder="País" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"  />
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
              <button tabindex="-1" for="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
              </button>
            </div>
          </div>

          <div className="md:col-span-1">
            <label >Zipcode</label>
            <input onChange={e=>setClient({...client,zip:e.target.value})} type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder=""  />
          </div>

        

  
          <div className="md:col-span-5 text-right">
            <div className="inline-flex items-end">
              <button onClick={()=>handleClick()}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Siguiente</button>
            </div>
          </div>

        </div>
      </div>
    )

}

export default ClientPage1;