import { DatePicker,Select,Button } from "antd";
import CreateClientCard from "../../../components/CreateClientCard/create.client.card";
const ClientPage5 = ({setClient,client,setPage}) =>{
    const handleClick = () =>{
        console.log("El cliente es : ",client);
    }
    return(
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
        <CreateClientCard title="Asociar Menor" text="Asociar menores responsables a cargo de este usuario" />
        <CreateClientCard title="Registrar Datos medicos" text="Registra y actualiza los distintos datos medicos del usuario" />
        <CreateClientCard title="Editar Datos Cliente" text="Registra y actualiza los distintos datos asociados al cliente actual" />
        <CreateClientCard title="Registrar + datos" text="Registra y actualiza los datos especificos del cliente, promociones,etc..." />

      </div>
    )

}

export default ClientPage5;