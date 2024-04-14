import IconCobroAbono from "../../../../components/Icons/icon.cobro.abono";
import CreateClientCard from "../../../../components/CreateClientCard/create.client.card";
import IconCobroCuentaCorriente from "../../../../components/Icons/icon.cobro.cuenta.corriente";
import IconCobroDeudas from "../../../../components/Icons/icon.cobro.deudas";
import IconCobroProducto from "../../../../components/Icons/icon.cobro.producto";
const ClienteCobrosCards = ({setPage}) =>{
    return(
        <div>
        <div className=" grid grid-cols-2 content-around gap-4">

        <CreateClientCard onClick={()=>setPage(1)} Icon={IconCobroAbono} handleClick={()=>setPage(1)} title="Registrar Cobro Abono" text="Gestiona los abonos del cliente" />
        <CreateClientCard onClick={()=>setPage(2)} Icon={IconCobroProducto} handleClick={()=>setPage(2)} title="Registrar Cobro Producto" text="Registra los cobros de los productos" />
        <CreateClientCard Icon={IconCobroDeudas } handleClick={()=>setPage(3)} title="Saldar Deudas" text="Registrar el cobro de las deudas del cliente" />
        <CreateClientCard Icon={IconCobroCuentaCorriente} handleClick={()=>setPage(4)} title="Cuenta Corriente" text="Registra los consumos del cliente en cuenta corriente" />

        </div>
        </div>
    )
}

export default ClienteCobrosCards;