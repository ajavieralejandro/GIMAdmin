import CreateClientCard from "../../../components/CreateClientCard/create.client.card";
import ClientAvatar from "../../../components/ClientAvatar/client.avatar";
const ModificarCliente = () =>{
  
    return(
        <div className="grid grid-cols-2 gap-4">
        <div>
        <ClientAvatar />
        </div>
        <div className=" grid grid-cols-2 gap-4">
        <CreateClientCard title="Asociar Menor" text="Asociar menores responsables a cargo de este usuario" />
        <CreateClientCard title="Registrar Datos medicos" text="Registra y actualiza los distintos datos medicos del usuario" />
        <CreateClientCard title="Editar Datos Cliente" text="Registra y actualiza los distintos datos asociados al cliente actual" />
        <CreateClientCard title="Registrar + datos" text="Registra y actualiza los datos especificos del cliente, promociones,etc..." />

      </div>
        </div>
        
    )

}

export default ModificarCliente;