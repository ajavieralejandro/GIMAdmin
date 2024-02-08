import { Button } from "antd"
import { SearchOutlined } from "@ant-design/icons"
const SearchButton = () =>{
    return(
        <>
                    <Button icon={<SearchOutlined />}style={{ marginLeft: 'auto' }}>Buscar</Button>

         </>
    )
}

export default SearchButton;