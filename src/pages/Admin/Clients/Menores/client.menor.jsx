import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import ClienteAsociarMenor from "../cliente.asociar.menor";
import Spinner from "../../../../components/Spinner/spinner";
import ClientMenoresList from "./client.menores.list";
import { Button } from "antd";
const ClienteMenor = ({setPage}) =>{
    const handleClick = () =>{
        setMenores([]);
    }
    let client = useSelector(state=>state.client.currentClient);
    const [menores,setMenores] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch(`https://stingray-app-4224s.ondigitalocean.app/api/v1/client/childrens/${client.id}`)
        .then(res=>res.json())
        .then(data=>{
            setMenores(data)
            setLoading(false)
        })
    },[])
    return(
        <div>
        {loading?<Spinner />:

        menores.length>0?<ClientMenoresList menores={menores} />:<ClienteAsociarMenor />
    
        }

        <div className="text-right pt-12">
            <Button type="text" onClick={()=>handleClick()}>Registrar Nuevo Menor</Button>
        </div>
        
        </div>
    )
}

export default ClienteMenor;