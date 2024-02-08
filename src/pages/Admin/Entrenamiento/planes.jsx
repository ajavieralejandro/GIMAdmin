import ClientList from "../../../components/ClientsList/ClientsList";
import SearchInput from "../../../components/SearchInput/search.input";
import ClientPlanCard from "../../../components/ClientCard/ClientPlanCard";
import { Flex } from "antd";
const Planes = () =>{
    return(
        <>
        <Flex>
        <SearchInput style={{marginLeft:'auto'}} placeholder={"Buscar"} />

        </Flex>
        <div className="pt-2">
        <ClientList ClientCard={ClientPlanCard} />
        </div>
        </>
    )
}

export default Planes;