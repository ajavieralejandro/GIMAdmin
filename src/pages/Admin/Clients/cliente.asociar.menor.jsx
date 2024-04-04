import ClientAvatar from "../../../components/ClientAvatar/client.avatar"
import { useState } from "react";
import { DatePicker } from "antd";
import Input from "antd/es/input/Input";
const ClienteAsociarMenor = () =>{
    const [children,setChildren] = useState({
        name:"",
        last_name:"",
        dni :"",
        genre:"",
        birth:"",
        tel:"",
        email:""
    })
    return(
        <div className="">
            <div className="grid grid-cols-1 gap-2">
           
            <label >Nombre</label>
            <input  type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
            <label >Apellido</label>
            <input  type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
            <label >DNI</label>
            <input  type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
            <label >Tel.</label>
            <input  type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
            <label >fecha de nacimiento</label>
            <DatePicker placeholder="Fecha de nacimiento" />
            <div>
                <div className="text-right pt-12">
                <button className="m-2">Cancelar</button>
                <button className="m-auto">Registrar Menor</button>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default ClienteAsociarMenor;