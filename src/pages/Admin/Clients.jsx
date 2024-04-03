import ClientCard from "../../components/ClientCard/ClientCard";
import { useEffect, useState } from "react";
import SearchInput from '../../components/SearchInput/search.input';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
const Clients = () =>{
    let navigate = useNavigate();
    const handleSearch = (text)=>{
      console.log("Text es : ",text);
      console.log(isNaN(text));
      console.log(clientes);
      if(isNaN(text.target.value) && text.target.value!=="")
        setData(clientes.filter(client => client.name.toLowerCase().includes(text.target.value.toLowerCase()) || client.last_name.toLowerCase().includes(text.target.value.toLowerCase() 
              )))
      else
        setData(clientes.filter(client => client.dni.toString().includes(text.target.value)  
      )
      );
      if(text.target.value==='') setData(clientes);
    }
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [index,setIndex] = useState(5);
    const[ clientes,setClients] = useState([]);
    const onChange = (page) =>{
      setClients(data.slice())
    }

    const crearCliente = () =>{
      navigate('/clientes/crear_cliente');
    }

 


    useEffect(() => {
         fetch("https://stingray-app-4224s.ondigitalocean.app/api/v1/clients")
        .then((response) => response.json())
        .then((data) => { 
            setLoading(false)
            
            setClients(data.data);
            setData(data.data);
         })
           

      }, []);
    return(
        
    <>
    <section className="bg-white ">
    <div className="grid grid-cols-2">
    <div className="text-left "
    >
              <SearchInput onChange={handleSearch} />

    </div>
    <div className="text-right">
      <Button onClick={()=>crearCliente()}  type="text">Crear Cliente</Button>
    </div>
    </div>
      
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          {loading?null:
            data.map(client => <ClientCard key={client.dni} client={client} 
            />)
          }
           

    </div>
</section>
    </>)
}

export default Clients;