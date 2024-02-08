import Search from "antd/es/input/Search";
import { Button,Flex } from "antd";
const ListaPremios = () =>{
    return(
        <>
            <section className="bg-white h-screen">

            <Flex gap="small" wrap="wrap">

            <Search
      placeholder="Realice una busqueda"
      allowClear
      enterButton="Search"
      size="large"
      style={{width:'50%'}}
      onSearch={null}
    />
                <Button style={{ marginLeft: 'auto' }}>Crear</Button>

</Flex>
            </section>
        </>
    )
}

export default ListaPremios;