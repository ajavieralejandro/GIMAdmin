import Search from "antd/es/input/Search";
import { Button,Flex } from "antd";
import SearchInput from '../../../components/SearchInput/search.input';
const ListaPremios = () =>{
    return(
        <>
            <section className="bg-white h-screen">

            <Flex gap="small" wrap="wrap">
                <SearchInput placeholder={"Buscar"} />
                <Button style={{ marginLeft: 'auto' }}>Crear</Button>

</Flex>
            </section>
        </>
    )
}

export default ListaPremios;