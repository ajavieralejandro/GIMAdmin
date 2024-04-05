import CreateClientCard from "../../../components/CreateClientCard/create.client.card";
import ClientAvatar from "../../../components/ClientAvatar/client.avatar";
import { useState } from "react";
import ClienteModificarCards from "./cliente.modificar.cards";
import ClienteAsociarMenor from "./cliente.asociar.menor";
import ClienteDatosMedicos from "./cliente.datos.medicos";
import ClienteDatos from "./cliente.datos";
import ClienteEditar from "./client.editar";
const ModificarCliente = () =>{
    const [page,setPage] = useState(0);
    const [client,setClient]= useState({});
    return(
        <div className="grid grid-cols-2 gap-4">
        <div>
        <ClientAvatar />
        </div>
        <div >
          
        {page==0?<ClienteModificarCards setPage={setPage} />:null}
        {page==1?<ClienteAsociarMenor setPage={setPage} />:null}
        {page==2?<ClienteDatosMedicos setPage={setPage} />:null}
        {page==3?<ClienteEditar client={client} setClient={setClient} setPage={setPage} />:null}

        {page==4?<ClienteDatos />:null}
      </div>
        </div>
        
    )

}

export default ModificarCliente;