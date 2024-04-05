import Input from "antd/es/input/Input";
import { Select,Button } from "antd";
const ClienteDatos = () =>{
    return(
        <div>
            <div className=" rounded  shadow-md">
            <h1 className="text-md pb-6 ">Otros Datos</h1>
                <div className="grid grid-cols-1 m-2 pb-6">
                <label className="text-black">Tel de Contacto </label>
                <Input />
                </div>
                <Select onSelect={e=>setClient({...client,ref:e})} placeholder={"Como nos conociste?"} style={{width:'100%'}} options={[
                    {key : 1, value:'Referidos'},
                    {key : 2, value:'Publicidad'},
                    {key : 3, value:'Redes'},
                    {key : 4, value:'Otros'}
        
                    
                  ]}></Select>
            </div>
            <div className="text-right pt-6">
                  <Button className="submit">Cargar + datos</Button>
            </div>
        </div>
    )
}

export default ClienteDatos;