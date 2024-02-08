import Date from "../../../components/Date/Date";
import { Button, Flex } from "antd";
const CoverturaPuntos = () =>{
    return(
        <div className="h-screen">
                    <Flex gap="small" wrap="wrap">

            <Date />
            <Button style={{ marginLeft: 'auto' }}>Buscar</Button>
            </Flex>
        </div>
    )
}

export default CoverturaPuntos;