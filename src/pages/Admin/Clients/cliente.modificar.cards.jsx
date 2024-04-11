import CreateClientCard from "../../../components/CreateClientCard/create.client.card";
import IconMenores from "../../../components/Icons/icon.menores";
import IconDatosMedicos from "../../../components/Icons/icon.datos.medicos";
import IconMoreCliente from "../../../components/Icons/icon.more.cliente";
import IconEditCliente from "../../../components/Icons/icon.edit.cliente";
const ClienteModificarCards = ({setPage}) =>{
    return(
        <div className=" grid grid-cols-2 content-around gap-4">

        <CreateClientCard Icon={IconMenores} handleClick={()=>setPage(1)} title="Asociar Menor" text="Asociar menores responsables a cargo de este usuario" />
        <CreateClientCard Icon={IconDatosMedicos} handleClick={()=>setPage(2)} title="Registrar Datos medicos" text="Registra y actualiza los distintos datos medicos del usuario" />
        <CreateClientCard Icon={IconEditCliente} handleClick={()=>setPage(3)} title="Editar Datos Cliente" text="Registra y actualiza los distintos datos asociados al cliente actual" />
        <CreateClientCard Icon={IconMoreCliente} handleClick={()=>setPage(4)} title="Registrar + datos" text="Registra y actualiza los datos especificos del cliente, promociones,etc..." />

        </div>
    )
}

export default ClienteModificarCards;