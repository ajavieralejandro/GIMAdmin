import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import ClienteAsociarMenor from "../cliente.asociar.menor";
import Spinner from "../../../../components/Spinner/spinner";

const ClienteMenor = ({setPage}) =>{
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

        menores.length>0?<h1>Tengo menores asociados</h1>:<ClienteAsociarMenor />
    
        }
        
        </div>
    )
}

export default ClienteMenor;