import ClientAvatar from "../../../../components/ClientAvatar/client.avatar";
import ClienteCobrosCards from "./cliente.cobros.cards";
const ClienteCobros = () =>{
    return(
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <ClientAvatar />
                </div>
                <div>
                    <ClienteCobrosCards />
                </div>
            </div>
        </div>
    )
}

export default ClienteCobros;