import ClientAvatar from "../../../components/ClientAvatar/client.avatar"
import { useState } from "react";
import { DatePicker } from "antd";
import Input from "antd/es/input/Input";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const ClienteAsociarMenor = ({setPage}) =>{
    let navigate = useNavigate();
    let cliente = useSelector(state=>state.client.currentClient);
    const [children,setChildren] = useState({
        name:"",
        last_name:"",
        dni :"",
        genre:"",
        birth:"",
        tel:"",
        email:""
    });
    console.log("Children es : ",children);

    const registrarMenor = () =>{
        alert('Registro Menor');
        console.log("Children es : ",children);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body :JSON.stringify({
              "name": children.name,
              "last_name": children.last_name,
              "dni": children.dni,
              "tel": children.tel,
              "birth": children.birth,
              "client_id": cliente.id,
  
            })
        };
        console.log("Request Options es : ",requestOptions);
         fetch('https://stingray-app-4224s.ondigitalocean.app/api/v1/childrens', requestOptions)
            .then(response => response.json())
            .then(data=>{ 
                alert(data);
                setPage(0);
            })
  
    }
    return(
        <div className="">
            <div className="grid grid-cols-1 gap-2">
           
            <label >Nombre</label>
            <input onChange={e=>setChildren({...children,name:e.target.value})}  type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
            <label >Apellido</label>
            <input onChange={e=>setChildren({...children,last_name:e.target.value})}   type="text" name="last_name" id="last_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
            <label >DNI</label>
            <input onChange={e=>setChildren({...children,dni:e.target.value})}  type="text" name="dni" id="dni" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
            <label >Tel.</label>
            <input onChange={e=>setChildren({...children,tel:e.target.value})}  type="text" name="tel" id="tel" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  placeholder="" />
            <label >fecha de nacimiento</label>
            <DatePicker onChange={(e=>setChildren({...children,birth:e.$d}))} placeholder="Fecha de nacimiento" />
            <div>
                <div className="text-right pt-12">
                <button className="m-2">Cancelar</button>
                <button onClick={()=>registrarMenor()} className="m-auto">Registrar Menor</button>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default ClienteAsociarMenor;