import ClientAvatar from "../../../../components/ClientAvatar/client.avatar";
import ClientesCobrosAbono from "./cliente.cobros.abonos";
import ClienteCobrosCards from "./cliente.cobros.cards";
import ClienteCobrosProductos from "./cliente.cobros.productos";
import { useState } from "react";
const ClienteCobros = () =>{
    const [page,setPage] = useState(0);

    return(
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <ClientAvatar />
                </div>
                <div>
                    {page==0?<ClienteCobrosCards setPage={setPage} />:null }
                    {page==1?<ClientesCobrosAbono setPage={setPage} />:null}
                    {page==2?<ClienteCobrosProductos setPage={setPage} />:null}
                </div>
            </div>
        </div>
    )
}

export default ClienteCobros;