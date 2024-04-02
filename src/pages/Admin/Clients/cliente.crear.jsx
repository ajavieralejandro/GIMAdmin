import AvatarUploader from "../../../components/AvatarUploader/avatar.uploader";
import { useState } from "react";
import ClientPage1 from "./cliente.crear.page1";
import ClientPage2 from "./cliente.crear.page2";
import ClientPage3 from "./cliente.crear.page3";
import ClientPage4 from "./cliente.crear.page4";
import ClientPage5 from "./cliente.crear.page5";
const CrearCliente = () =>{
    const [page,setPage] = useState(1);
    const [client,setClient]=useState({
       
    })
    return(
        <>
<div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
<div className="container max-w-screen-lg mx-auto">
  <div>
   

    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
    
      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
        <div className="text-gray-600">
        
          <p className="font-medium text-lg">Crear Cliente</p>
          <AvatarUploader setClient={setClient} />

        </div>
            {page==1?
                <ClientPage1 client={client} setClient={setClient} setPage={setPage} />
                : null}
          {page==2?
                <ClientPage2 client={client} setClient={setClient} setPage={setPage} />
                : null}
          {page==3?
                  <ClientPage3 client={client} setClient={setClient} setPage={setPage} />
                  : null}

          {page==4?
                    <ClientPage4 client={client} setClient={setClient} setPage={setPage} />
                    : null}
        
          {page==5?
                      <ClientPage5 client={client} setClient={setClient} setPage={setPage} />
                      : null}
          
   
      </div>
    </div>
  </div>


</div>
</div>

        </>
    )

}

export default CrearCliente; 