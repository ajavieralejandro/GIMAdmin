import CreateClientCard from "../../../components/CreateClientCard/create.client.card";
const ClienteModificarCards = ({setPage}) =>{
    return(
        <div className=" grid grid-cols-2 content-around gap-4">

        <CreateClientCard handleClick={()=>setPage(1)} title="Asociar Menor" text="Asociar menores responsables a cargo de este usuario" />
        <CreateClientCard handleClick={()=>setPage(2)} title="Registrar Datos medicos" text="Registra y actualiza los distintos datos medicos del usuario" />
        <CreateClientCard handleClick={()=>setPage(3)} title="Editar Datos Cliente" text="Registra y actualiza los distintos datos asociados al cliente actual" />
        <CreateClientCard handleClick={()=>setPage(4)} title="Registrar + datos" text="Registra y actualiza los datos especificos del cliente, promociones,etc..." />

        </div>
    )
}

export default ClienteModificarCards;