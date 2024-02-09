import SearchInput from "../../../components/SearchInput/search.input";
import { Button,Flex } from "antd";
const NivelesFidelizacion = () =>{
    return (
        <Flex>
        <SearchInput placeholder={"Buscar"} />

            <Button style={{marginLeft:'auto'}}>Crear</Button>


        </Flex>
    )
}

export default NivelesFidelizacion;