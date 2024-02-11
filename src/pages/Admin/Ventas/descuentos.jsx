import GenericSelect from "../../../components/GenericSelect/GenericSelect";
import { Button} from "antd";
import Search from "antd/es/input/Search";
const DescuentosVentas = () =>{
    return(
        <>
        <div className="text-left">
        
        </div>

            <div className=" grid grid-cols-3 gap-2">
            <Search
      placeholder={"Buscar"}
      allowClear
    
    />
            <GenericSelect />

            <Button>Crear</Button>
            </div>
            <div className="text-left pt-12">
            <h1>Realice una nueva busqueda</h1>

            </div>
                </>

    )
}

export default DescuentosVentas;